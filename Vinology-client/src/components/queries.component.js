import React, {Component} from 'react';
import {connect} from 'react-redux';
import {currentUser} from '../actions/user.action'
import {myQueries} from '../actions/query.action'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import '../css/queries.css';
import {currentQuery} from '../actions/car.action'





class queries extends Component{
  constructor(){
    super()
    this.state = {
     queries:[],
     car:[],
     loading: false
    }
  }

  loadMyQueries=()=>{
    
    const queriesArray = []
    const user = this.props.user.id
    
    
  
    fetch('http://localhost:3000/api/v1/queries')
      .then(resp=>resp.json())
      .then(data=>{
     
       
        queriesArray.push(data.filter(query=>query.user_id === user))
            this.props.myQueries(queriesArray) 
    console.log('queries from queries')
        })

    }
  

  handleLoading=()=>{
    this.setState({loading:true})
     setTimeout(()=>{
       this.setState({loading:false})
     },3000)

    }
     

  handleDelete=(e)=>{

    
    const query_id = e.target.value
    this.handleLoading()

      fetch(`http://localhost:3000/api/v1/queries/${query_id}`,{method: 'DELETE'})
      
        this.loadMyQueries()
        
        
    
  }

  handleAdd=(e)=>{
    this.props.currentQuery(e.target.value)

    

    this.props.history.push('/newcar')
  }


  handleEdit=(e)=>{
    const query_edit = e.target.value
    this.props.history.push({
      pathname: '/edit', 
      state: query_edit
      })
  }

  handleOnClick=(e)=>{

    const car_id = e.target.value

    this.props.history.push({
      pathname: '/showcar', 
      state: car_id
      })
  }

  render(){
    

      return (
      <div className="wrapper-q" >
      <div className='inner-r'>
       {!this.state.loading?
      <div className='inner-r'>
        {this.props.queries?
        <div className='inner'>
              {this.props.queries[0].map(query=>
       <div className="firstTernary">
        <body>
            <div class="container">
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                        
                            <h3>{query.name}</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                        <div>
                        {query.cars.map(car=>

                           <button className="btn btn-link" value={car.id} onClick={this.handleOnClick} > {car.model}</button>
                          
                           )}
                          </div>
                          <button className="btn btn-outline-info" value={query.id}onClick={this.handleAdd}>Add</button>
                          <button className="btn btn-outline-info" value={query.id}onClick={this.handleEdit}>Edit </button>
                          <button className="btn btn-outline-secondary" value={query.id}onClick={this.handleDelete}>Delete</button>
                        </div>
                       </div>
                      </div>
                  </div>
               </body>
              </div>
            )} 
        </div>
        : <ClimbingBoxLoader  loading={true} size={30}  /> }
        </div>
      : <ClimbingBoxLoader  loading={true} size={30}  /> }</div>
       </div>

    
    );
  } 
}

const mapStateToProps = (state)=>{
  
  return {
      user: state.userData,
      queries: state.queryData
  }
  
}

const mapDispathToProps ={

  currentUser, myQueries, currentQuery
}

export default connect (mapStateToProps, mapDispathToProps)(queries)

