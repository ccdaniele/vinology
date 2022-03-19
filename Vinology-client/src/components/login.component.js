import '../css/login.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loginSuccess} from '../actions/user.action'
import {myQueries} from '../actions/query.action'






 class Login extends Component {
     constructor(){
        super()
        this.state={
            username:'',
            password:'',
            loginSuccess:" ",
            error: '',
            queries: [],
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
    console.log('queries from login')
        })

    }

    handleSubmit = (e) =>{
        e.preventDefault()
    
        const newObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username: this.state.username,
                password: this.state.password
              }
            })}
          

            this.setState({
              username: '',
              password: ''
            })

        fetch('http://localhost:3000//api/v1/login', newObj)
          
          .then(resp => resp.json())
          .then(data => {
            if (data.message) { 
              
              this.setState({
                error: data.message
              })
              window.location.reload(false);
            } else {
              this.props.loginSuccess(data.user)
             
      

              this.setState({loginSuccess:data.user,
            token:data.jwt})

            localStorage.setItem('token',data.jwt)
          
            
            this.loadMyQueries()
            this.props.history.push('/')

            }
          })


      }





    render(){
     
  

    const size ={
      height: 30,
      width: 150,
      
  }
        return(

          
        
          <div>
          <div className='body-login' >
          
          <div className="wrapper">
            <div className="inner-sign-up">
              {this.state.error? <h4 style={{color:'white'}}>{this.state.error}</h4> : null}
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <p id='logoNav' style={size}className="form-text"></p> 
                      <div className='form-group'>
                          <label className="form-text"></label>
                        <input type='text' className='form-control' placeholder='Username' onChange={e=> this.setState({username: e.target.value})}/>
                            
                      </div>
                      <div className='form-group'>
                        <label  className="form-text"></label>
                      <input type='password' className='form-control' placeholder='Password' onChange={e=> this.setState({password: e.target.value})}/>
                    </div>
                  <button className='btn btn-secondary btn-block'>Sign in</button>
                </form> 
            </div>
          </div>
          </div>
          
          </div>          

        )
    }
}

const mapStateToProps = (state)=>{
  return {
      user: state.userData,
      queries: state.queryData
  }
}

const mapDispatchToProps = {
    loginSuccess, myQueries
}



export default connect (mapStateToProps, mapDispatchToProps)(Login)

