function query(state=null, action){
    switch(action.type){

        

        case 'MY_QUERIES':
        return action.queries

        case 'LOGIN_OUT':    
        return {}


        default:

        return state

    }
}


export default query