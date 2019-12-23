<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"/>
        <q-toolbar-title>
         Bus App
        </q-toolbar-title>
        <a href="tel:+48667221779">
          <q-btn color="white" text-color="primary"  unelevated icon="phone" label="667 221 779" />
        </a>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="white">
      <q-list>
        <q-item class="nav-header q-ma-none q-pa-none" >
        <q-parallax class="q-ma-none flex column" style='height:300px;' src="https://images.pexels.com/photos/105234/pexels-photo-105234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <q-item-section avatar class="q-ma-none flex column" color='white'>
           <div class="logo-circle">
              <q-img
              style="transform : translateX(7px)"
              class="logo q-pa-sm q-ma-sm"
              src="../assets/app-icon.png"
              spinner-color="primary"
              spinner-size="82px"
            />
           </div>
            <p class="absolute-bottom q-ma-md bg-primary text-white text-center text-bold	" style="font-size:30px" color="primary">Bus App</p>
          </q-item-section>
              </q-parallax>
        </q-item>
        <q-item class="nav-link" v-ripple clickable to="/" >
          <q-item-section avatar>
            <q-icon name="arrow_back_ios" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Start</q-item-label>
            <q-item-label caption>Powrót do strony głównej</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="nav-link" v-ripple clickable  to="/rozklad">
          <q-item-section avatar>
            <q-icon name="directions_bus" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Rozkład</q-item-label>
            <q-item-label caption>Plan odjazdów i przyjazdów</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable class="nav-link" v-ripple  to="/aplikacja">
          <q-item-section avatar>
            <q-icon name="mobile_friendly"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Aplikacja</q-item-label>
            <q-item-label caption>Aplikacja mobilna</q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-ripple clickable  class="nav-link" to="contact" >
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Kontakt</q-item-label>
            <q-item-label caption>Napisz do nas</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
<style lang="scss" >
  .nav-header{
    min-height: 200px;
    background: #ddd;
  }
  .logo{
    width: 100px;
    height: 100px;
    padding: 10px;
    img{
      width: 70px;
    }
  }
    .nav-link{
      transition: all ease-in-out 0.3s;
      color: #1c1c1c!important;
      &:hover{
        background: #ddd;
        color: $primary!important
      }
    }
    .logo-circle{
      background: rgba(221, 221, 221, 0.558);
      border-radius: 50%;
      padding: 10px;
    }
</style>