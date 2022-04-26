//导出index
export const setToken=(TOKEN)=>{
   return localStorage.setItem('TOKEN',TOKEN);
}
export const getToken=()=>{
   return localStorage.getItem('TOKEN');
}
export const removeToken=()=>{
  return  localStorage.removeItem('TOKEN');
}