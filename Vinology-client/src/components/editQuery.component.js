import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../style.css';
import {currentUser} from '../actions/user.action'
import {myQueries} from '../actions/query.action'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";




class Edit extends Component{
  constructor(){
    super()
    this.state = {
     name:"",
     loading: false
    }
  }



  handleLoading=()=>{
    this.setState({loading:true})
     setTimeout(()=>{
       this.setState({loading:false})
     },5000)
     setTimeout(()=>{
       this.props.history.push('/queries')
     },5000)
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

  handleEdit=(e)=>{

    e.preventDefault()


    const queryId =this.props.location.state

        const newObj ={
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: {
                name: this.state.name
            }
          })
        }
    
        fetch(`http://localhost:3000/api/v1/queries/${queryId}`,newObj)
        .then(resp=>resp.json())
        .then(data=>{
    
          console.log(data)
          this.handleLoading()
          this.loadMyQueries()
    
        })

  }

  

  render(){
   
   
      return (

<div className="wrapper">
        
        {!this.state.loading?
          <div className="inner">
          <form onSubmit={this.handleEdit}>
          <label className="form-text"></label>
            <div className='form-group'>
                
                <input type='text' className='form-control' placeholder='re-name your query' onChange={e=> this.setState({name: e.target.value})}/>
            </div>
            <input type="submit" name="submit" value="Create your query" className='btn btn-secondary btn-block'/>
          </form>
          </div>
         : 
         <div>
         
            <ClimbingBoxLoader loading={true} size={30} />
            
          
        </div>
         }

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

  currentUser, myQueries
}

export default connect (mapStateToProps, mapDispathToProps)(Edit)

