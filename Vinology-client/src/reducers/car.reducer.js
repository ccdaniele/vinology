function car(state=null, action){
    switch(action.type){

        

        case 'CURRENT_QUERY':
        return action.query

        case 'LOGIN_OUT':    
        return {}


        default:

        return state

    }
}


export default car