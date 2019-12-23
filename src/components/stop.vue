<template>
    <q-timeline-entry
    :title="stop.stopName"
    
    >
    
        <hour 
        v-for='(hour,index) in hours' :key="index"
        :hour='hour' 
        :dayOfWeek='dayOfWeek'
        :rides='rides'
        />
    </q-timeline-entry>
</template>
<script>
import  hour from './hour'
export default {
  name: 'stop',
  components : {
    hour
  },
  data () {
    return {
    }
  },
  props:{
    date : String,
    stop : Object,
    holidays : Array,
    dayOfWeek : Number,
    rides : Object
  },
  mounted(){
       
  },
  computed:{
    hours(){
      return this.stop.hours
    },
    test(){
      return this.$store.state.plan.kursActive
    },
    ride(){

    }
  },
}
</script>