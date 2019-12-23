<template>
<q-chip 
:class="chipClasses" 
square 
clickable   
icon='alarm' 
v-if="test_day_type" 
v-on:click="showKurs"
text-color="white"
>
  {{ hour.time }}
</q-chip>
</template>
<script>
export default {
   name: 'hour',
  data () {
    return {
       active : null
    }
  },
  props : {
    hour : Object,
    dayOfWeek : Number,
    rides:Object
  },
  computed:{
   kursActive(){
     return this.$store.state.plan.kursActive
   },
   rideActive(){
      if(this.kursActive === null){
        return this.active
      }
      else{
        return this.kursActive
      }
   },

    chipClasses(){
      return this.rideActive === this.hour.kurs? 'chip' : 'noActive'
    },
    list(){
      return this.hours.filter(h=>h.type===this.dayOfWeek)
    },
    test_day_type(){
    return this.hour.type == this.dayOfWeek ? true :false
    
    }
  },
  methods:{
    showKurs(){
        this.$store.dispatch('plan/setKursActive',this.hour.kurs)
}
  },
  mounted(){
    console.log(this.hour)
      if(this.dayOfWeek === 0){
        this.active = this.rides.ride0
      }
      else if(this.dayOfWeek === 1){
        this.active = this.rides.ride1
      }
      else{
       this.active = this.rides.ride2
      }
  }
}
</script>
<style lang="scss">
  .chip{
    background: $primary;
    color: white;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }
  .noActive{
    background: rgba( $primary ,0.3 );
    color : gray!important;
  }
</style>