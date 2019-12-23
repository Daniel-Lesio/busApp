<template>
  <q-page class="app">
    <q-card class="q-mt-none" style='border-radius:0px!important'>
      <q-card-section class="row q-col-gutter-xs">
        <div class="col-12 text-h5 text-bold text-primary text-center q-mb-sm"> Szukaj : </div>
         <div class="col-12 col-md-2   q-pa-md flex col-auto items-center cp date-btn" v-on:click='calendar=true'>
          <q-btn icon="event" class="q-mr-sm"  round color="primary"/>
          <p class="text-h6 q-ma-none">{{date}}</p>  
         </div>
          <q-dialog v-model='calendar'>
          <q-date v-model="date"  :locale="myLocale" today-btn/>
         </q-dialog>
         <div class="col-12 col-sm-6 col-md-5 q-pa-sm">
        <q-select
          autofocus
          v-model="model_z"
          use-input
          label="Z:"
          hide-selected
          fill-input
          @input='options_z_func'
          :options="options_from"
          @filter="filterFnFrom"
          input-debounce="0"
          transition-show="flip-up"
          transition-hide="flip-down">
      </q-select>
      </div>
        <div class="col-12 col-sm-6 col-md-5 q-pa-sm">
          <q-select
            v-model="model_do"
            use-input
            label="Do:"
            hide-selected
            fill-input
            @input='options_do_func'
            :options="options_to"
            @filter="filterFnTo"
            transition-hide="flip-down"
            transition-show="flip-up">
          </q-select>
      </div>
      </q-card-section>
  </q-card>
      <q-card  v-if="!checkModels"   class="q-ma-lg q-pa-md"  style='border-radius:0px!important' >
         <q-card-section >
            <h1 class="text-h6 text-primary ">
              Rozpocznij wyszukiwanie...
            </h1>
         </q-card-section>     
      </q-card>    
      <q-list 
      class="q-pa-md" 
      v-for="(bus,index) in planOfVoyage" :key='index'
      >
        <q-list bordered class="gotham q-ma-none primary text-h6 rounded-borders bg-white">
          <q-expansion-item
            class="text-dark"
            :default-opened='planOfVoyage.length>1 ? false :true '
            expand-separator
            icon="directions_bus"
            :label="bus.name"
            :caption="`bus : ${bus.bus}`"
          >


           <q-timeline class="q-px-lg q-py-md" color="primary">
              <stop :stop='stop' :date='date' :dayOfWeek='dayOfWeek' :holidays='holidays' v-for="(stop,index) in bus.stops" :key="index">
          
              </stop>
    
           </q-timeline>
          </q-expansion-item>
        </q-list>
      </q-list>
   <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn v-on:click='reset()' class="reset-btn" fab icon="settings_backup_restore" color="accent" />
    </q-page-sticky>
  </q-page>
</template>
<script>
import stop from '../components/stop'
export default {
  name: 'rozklad2',
  components:{
    stop
  },
  data(){
    return{
      
      calendar : false,
      date: '',
      day : 0,
      model_z : null,
      model_do : null,
      val_z : this.optionz,
      options_from : this.options_from_before,
      options_from_before : [],
      options_to : this.options_to_before,
      options_to_before : []
     }
    },
  computed : {
      dayOfWeek(){
      let newDate  = new Date();
      let year = parseInt(this.date.split('/')[0]) 
      let month = parseInt(this.date.split('/')[1] -1) 
      let day = parseInt(this.date.split('/')[2]) 
      newDate.setYear(year)
      newDate.setMonth(month)
      newDate.setDate(day)
      let dow = newDate.getDay();
      
      const holidaysStrings = this.holidays.map(h=>{
        return `${h.d}${h.m}${h.y}`
      })
      let newDateString = `${day}${month}${year}`
      let inc = holidaysStrings.includes(newDateString)
      if( dow === 0 || inc ){
        return 2
      }
      else if( dow === 6 ){
        return 1
      }
      else{
        return 0
      }
      
      },
    holidays(){
      return this.$store.state.calendar.holidays
    },
    typeOfDay(){
      this.holidays.forEach( h=>{

      })
    },
    checkModels(){
        if(this.model_z && this.model_do){
          return true
        }
        return false
    },

    planOfVoyage(){
          let fromId = Number
          let toId = Number
          const chosenBuses = []
          if(this.checkModels){
          let from = this.$store.state.plan.stops.filter(stop=>stop.stopAdress === this.model_z)
          let to = this.$store.state.plan.stops.filter(stop=>stop.stopAdress === this.model_do)
          fromId = from[0].stopId
          toId = to[0].stopId
          const all_buses = this.$store.state.plan.buses
          all_buses.forEach(bus=> {
          if( bus.stops.includes( fromId)  && bus.stops.includes(toId)){
            chosenBuses.push(bus)
          }
          })
            const trasy_filtered = [  ] 
          let isIncreasing = fromId < toId ? true : false
          let  chosenBusesId = []
          chosenBuses.forEach((bus)=>{ 
          let f_id = bus.stops.findIndex( s=> s=== fromId)
          let t_id = bus.stops.findIndex(s => s === toId )
          let score = f_id < t_id ? true : false
          score ? chosenBusesId.push(bus.busId) : null
          })
          let trasy = this.$store.state.plan.trasy
          let trasyChosen = chosenBusesId.forEach(cbi=> {
          let tf = trasy.filter(t=>{
           return t.trasaName === cbi
          })
            tf.forEach(t=>trasy_filtered.push(t))
          } )
          trasy_filtered.forEach(tf=>{
            tf.stops.forEach(s=>{
             let  x = this.$store.state.plan.stops.filter(stop=>stop.stopId === s.stopId )[0]
             s.stopName = x.stopAdress
            })
          })
          let trasy_filtered_and_sliced = []
          trasy_filtered.forEach(tf=>{
              trasy_filtered_and_sliced.push({
                name : tf.name,
                trasaName : tf.trasaName,
                bus : tf.bus,
                stops : isIncreasing ? tf.stops.slice(fromId,toId +1) : tf.stops.slice(toId,fromId+1)
              })
          })
          return trasy_filtered_and_sliced
    }
    },
    chosen(){
      return this.$store.state.plan.chosen
    },
    myLocale(){
      return this.$store.state.calendar.myLocale
    },
    stops(){
      return this.$store.state.plan.stops
    },
    optionz(){
      return this.$store.state.plan.stops_z.map( stop=> stop.stopAdress)
    },
    optiondo(){
      return this.$store.state.plan.stops_do.map( stop=> stop.stopAdress)
    },
    options_filtered_z(){
      return this.optionz
    },
    options_filtered_do(){
      return this.optiondo
    },
  },
  mounted(){
    this.update_from();
    this.update_to();
    const today = new Date();
    let day =  today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    this.date = `${year}/${month}/${day}`
    let arr = []
  },
  methods:{
  
    reset(){
      this.model_z = ''
      this.model_do = ''
      this.$store.dispatch('plan/reset')
      this.update_from()
      this.update_to()
    },
    update_from(){
      let myArr = this.$store.state.plan.stops_z
      this.options_from_before = []
      myArr.forEach(el => {
      this.options_from_before.push(el.stopAdress)
    });
    },
    update_to(){
      let myArr = this.$store.state.plan.stops_do
      this.options_to_before = []
        myArr.forEach(el => {
      this.options_to_before.push(el.stopAdress)
    });
    },
    options_z_func(){
      this.$store.dispatch('plan/options_z',this.model_z)
      this.update_to();
    },
    options_do_func(){
      this.$store.dispatch('plan/options_do',this.model_do)
      this.update_from();
    },
    filterFnFrom (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.options_from = this.options_from_before.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
     filterFnTo (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.options_to = this.options_to_before.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  },
}
</script>
<style lang="scss">
.app{
  min-height: calc(100vh + 1px)!important 
}
  .rozklad{
    margin-left: auto;
    margin-right: auto;
    max-width: 900px;
  }
  .bg-white{
    background: white
  }
  .pr{
    position: relative;
  }
  .pa{
    position: absolute;
    right: 10px;
    top: -20px;
    background: $primary;
    color: white;
    height: 40px;
    width: 100px;
  }
  .notactive{
    background: white;
    color : $primary;
  
  }
  .active{
    background: $primary;
    color : white;
  }
  .center-x{
    margin-left: auto;
    margin-right: auto;
  }
  .date-btn{
    transition: all ease-in-out 0.3s;
    
    justify-content: center;
    &:hover{
      background: rgb(235, 235, 235);
    }
  }
  .form{
    width: 500%;
    max-width: 100vw;
  }
  
 .ex{
   height: 70px;
   font-size: 24px;
 }
</style>