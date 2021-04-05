

function userLog(state=null, action){
    switch(action.type){

        case 'LOGIN_SUCCESS':
        return action.userData

        case 'LOGIN_OUT':    
        return {}

        case "CURRENT_USER":
        return action.userInfo

        default:

        return state

    }
}


export default userLog
