import React, {Component} from 'react';

export default class Register extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            username:'',
            email:'',
            password:'',
            passwordConfirm:''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        const newObj ={
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              user: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                password_confirm: this.state.passwordConfirm
              }
            })
          }

        fetch('http://localhost:3000/api/v1/users', newObj )
            .then(r => r.json())
            this.props.history.push('/login')
        }

    render(){

        const size ={
            height: 30,
            width: 150,
            
        }

        return(
            <div className='body-login2'>
            <div className="wrapper">
            <div className="inner-sign-up">
            <form onSubmit={this.handleSubmit}>
               <p id='logoNav' style={size}></p> 
               <div className='form-group'>
                   
               </div>
               <div className='form-group'>
                   <input type='text' className='form-control' placeholder='Username'onChange={e=> this.setState({username: e.target.value})}/>
                   
               </div>
               <div className='form-group'>

                   <input type='email' className='form-control' placeholder='Email' onChange={e=> this.setState({email: e.target.value})}/>
                   
               </div>
               <div className='form-group'>
                   <input type='password' className='form-control' placeholder='Password' onChange={e=> this.setState({password: e.target.value})}/>
                   
               </div>
               <div className='form-group'>
                   <input type='password' className='form-control' placeholder='Confirm Password' onChange={e=> this.setState({passwordConfirm: e.target.value})}/>
               </div>
               <button className='btn btn-secondary btn-block'>Sign Up</button>
            </form>
            </div>
            </div>
            </div>
        )
    }
}