
export function OPTIONS_Z(state,val){
  
  let filteredArr = state.stops.filter(stop=> stop.stopAdress === val )
  let filtered_id = filteredArr[0].stopId
  let finArr = []
  let finArrFiltered = [] 
  state.buses.forEach(bus=> {
    if(bus.stops.includes(filtered_id)){
      bus.stops.forEach(stop => finArr.push(stop))
    }  
  });
  let finalArrOfId = [...new Set(finArr)]
  finalArrOfId.forEach(faoi => {
    state.stops.forEach( stop=>{
      if(stop.stopId === faoi){
        finArrFiltered.push(stop)
      }
    } )
  } )
  state.stops_do = []
  finArrFiltered.forEach(faf=>{
    if( faf.stopId != filtered_id ){
      state.stops_do.push(faf)
    }
  })
}
export function OPTIONS_DO(state,val){
  let filteredArr = state.stops.filter(stop=> stop.stopAdress === val)
  let filtered_id = filteredArr[0].stopId;
  let finArr = []
  let finArrFiltered = []
  
  state.buses.forEach(bus=> {
    if(bus.stops.includes(filtered_id)){
      bus.stops.forEach(stop => finArr.push(stop))
    }  
  });
  let finalArrOfId = [...new Set(finArr)]
  finalArrOfId.forEach(faoi => {
    state.stops.forEach( stop=>{
      if(stop.stopId === faoi){
        finArrFiltered.push(stop)
      }
    } )
  } )
  state.stops_z = []
  finArrFiltered.forEach(faf=>{
    if(faf.stopId != filtered_id){
      state.stops_z.push(faf)
    }
  })         
}
export function RESET(state){
 
  state.stops_do = []
  state.stops_z = []
  state.stops.forEach(stop =>{
    state.stops_do.push(stop)
    state.stops_z.push(stop)
  })
}
export function SET_KURS_ACTIVE(state,value){
  state.kursActive = value
}