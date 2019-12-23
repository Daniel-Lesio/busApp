<template>
  <q-page class=" flex flex-center ">
    <q-card class="brand rounded-lg shadow-2  q-px-lg column bg-white text-primary q-pa-md">
       <div class="q-pt-lg">
              <q-img
                class="logo q-pa-sm "

              src="../assets/app-icon.png"
              spinner-color="primary"
              spinner-size="82px"
            />
           </div>
     <h4 round  class=" q-ma-md text-primary text-6 text-bold round ">Bus App</h4>
    <p class="text-h6">Aplikacja dla transportu</p>
    <div class="row items-center justify-end q-gutter-sm">
    <q-btn
    color="primary"
    to="/rozklad"
    >
      Rozkład
    </q-btn>
            <q-btn label="INFO" color="primary"  to="/aplikacja" outline  v-close-popup />
    
          </div>
    
    </q-card>
  </q-page> 
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      day : 0
    }
    },
  methods:{
    test(){
      alert('test')
    }
  }
}
</script>
<style lang="scss" scoped>
.app{
  height: calc(100vh-200px)!important
}
  .rozklad{
    margin-left: auto;
    margin-right: auto;
    max-width: 900px;
  }
  .bg-white{
    background: white
  }
  .brand{
    width: 600px;
    max-width: 90vw;
    display: flex;
    align-items: center;
    border-radius: 5px;
  }
</style>