<template>
  <q-page padding class="">
    <q-card class="bg-white text-center q-pa-sm">
      <h1 class="text-h4  text-bold text-primary text-center">O aplikacji</h1>
      <h6 class="q-ma-md text-body1 ">
        Aplikacja BusApp jest przeznaczona dla firm transportowych zajmujących się przewozem pasażerów.

      </h6>
      
      <h6 class="q-ma-md text-body1  ">
       To czym wyróżnia się nasza aplikacja to: 
      </h6>
      <tabs/>
      
      <p class="text-body1">
        Aplikacja którą państwo oglądacie jest tylko wersją demo. Kolorystyka, Logo ,szata graficzna, dodatkowe strony a także dodatkowe funkcjonalności (takie jak mapy,formularze, cenniki ) są ustalane osobiście z klientem.
      </p>
      <p class="text-body1">
        Więcej informacji udzielę osobiście pod numerem: <a class="tel" href="tel:+48667221779">667 221 779</a>
      </p>
    </q-card>
  </q-page>
</template>

<script>
import tabs from '../components/tabs'
export default {
  name: 'aplikacja',
  components : {
    tabs
  }
}
</script>
<style lang="scss">
  .tel{
    color : $primary;
    text-decoration: none
  }
</style>