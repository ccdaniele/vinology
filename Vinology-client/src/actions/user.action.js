export const loginSuccess=(user)=>{
    return{
        type: "LOGIN_SUCCESS",  
        userData: user
        
    }
}
export const loginOut=()=>{
    return{
        type: "LOGIN_OUT"
    }
}

export const currentUser=(user)=>{
    return{
        type: "CURRENT_USER",  
        userInfo: user
        
    }
}








