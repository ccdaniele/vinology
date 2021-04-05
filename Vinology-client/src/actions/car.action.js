export const myCars=(queries)=>{
    return{
        
        type: "MY_CARS",  
        queries: queries

        
        
    }
}

export const currentQuery=(query)=>{
    return{
        
        type:"CURRENT_QUERY",  
        query: query

        
        
    }
}
