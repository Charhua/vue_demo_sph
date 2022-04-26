import { v4 as uuidv4 } from 'uuid'

export const getUUID=()=>{
    let userUuid=localStorage.getItem('USERUUID');
    if(!userUuid){
        userUuid=uuidv4();
        localStorage.setItem('USERUUID',userUuid);
    }
    return userUuid;
}