export const setTipsRecord = (value)=>{
    sessionStorage.setItem('TIPSTIMES',value);
}
export const getTipsRecord = ()=>{
   return  sessionStorage.getItem('TIPSTIMES');
}