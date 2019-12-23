<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px; margin-left:auto;margin-right:auto">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="Mobilność" />
          <q-tab name="movies" label="Wyszukiwarka" />
        
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="text-h6">Mobilność</div>
            <p class="q-ma-small">Nasza Aplikacja działa doskonale jako strona internetowa jak i aplikacja mobilna (istnieje też możliwość zainstalowania na komputerze stacjonarnym)</p> 
            <p>
            Pasażer może pobrać aplikacje na telefon, komputer i korzystać z niej nawet <span  class="acc">bez połączenia z internetem</span>.
            </p>
            <p>Strona na której zainstalowana jest aplikacja, po jednych odwiedzinach  działa również bez połączenia z internetem</p>
            <p class="q-ma-small">Aplikacja jest wykonana z wykorzystaniem najnowszych technologii . Korzystając z najnowszych wzorców projektowych i  programistycznych. </p> 
            <p class="q-ma-small"> Instalujemy i optymalizujemy też Google Analitycs , zwiększając pozycję w wyszukiwarkach. </p>
          </q-tab-panel>

          
          <q-tab-panel name="movies">
            <div class="text-h6">Wyszukiwarka</div>
            <p>
              Główną zasadą przy budowie wyszukiwarki była dla nas intuicyjność. 
            </p>
            <p class="q-ma-sm">W sposób prosty pasażer może wybrać miejsce odjazdu i  przyjazdu. </p>
            <p class="q-ma-sm">Pasażer może znaleźć szukaną lokalizacje poprzez automatycznie filtrowaną listę wpisując tylko kilka liter z nazwy miejscowości, ulicy lub nr.</p>
            <p class="q-ma-sm">Dzięki wbudowanemu kalendarzowi. Klient może zaplanować podróż bez konieczności sprawdzania czy dany dzień jest świętem czy dniem pracującym.</p>
            <p class="q-ma-sm">Aplikacja automatycznie podświetla najbliższą godzinę przyjazdu. Po kliknięciu w wybraną przez siebie godzinę podświetlone zostają wszystkie godziny przyjazdów na przystanki z danej trasy. </p>

            </q-tab-panel>
        </q-tab-panels>
      </q-card>

     
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
data () {
    return {
      tab: 'mails'
    }
  }
}
</script>

<style lang="scss">
  .acc{
    color: $primary!important
  }
</style>