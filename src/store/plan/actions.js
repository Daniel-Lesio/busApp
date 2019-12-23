export function options_z(context,val){
        context.commit('OPTIONS_Z',val)
}
export function options_do(context,val){
        context.commit('OPTIONS_DO',val)
}
export function reset(context){
        context.commit('RESET')
        context.commit('SET_KURS_ACTIVE',null)
}
export function setKursActive(context,value){
        context.commit('SET_KURS_ACTIVE',value)
}