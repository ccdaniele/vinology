
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {currentQuery} from '../actions/car.action'


class NewQuery extends Component{
  constructor(){
    super()
    this.state = {
     name:'',
     test:[],
     loading: false
     
    }
  }


  handleLoading=()=>{
   this.setState({loading:true})
    setTimeout(()=>{
      this.setState({loading:false})
    },5000)
    setTimeout(()=>{
      this.props.history.push('/newcar')
    },5000)
}

  handleOnSubmit=(e)=>{
  e.preventDefault()
  


    const newObj ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {
            name: this.state.name,
            user_id: this.props.user.id
        }
      })
    }

    fetch('http://localhost:3000/api/v1/queries',newObj)
    .then(resp=>resp.json())
    .then(data=>{

      
     
      localStorage.setItem('qtoken',data.id)
      this.handleLoading()
      this.props.currentQuery(data.id)
      
      

  
    })

    

}

  render(){
   
      return (
      <div className="wrapper">
        
        {!this.state.loading?
          <div className="inner">
          <form onSubmit={this.handleOnSubmit}>
          <label className="form-text"></label>
            <div className='form-group'>
                
                <input type='text' className='form-control' placeholder='name your query' onChange={e=> this.setState({name: e.target.value})}/>
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
      user: state.userData
  }
}

const mapDispathToProps ={

  currentQuery
}

export default connect (mapStateToProps, mapDispathToProps)(NewQuery)






















