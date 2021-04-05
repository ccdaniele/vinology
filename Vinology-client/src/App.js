// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.component';
import Nav from './components/nav.component'
import Register from './components/register.component'
import New from './components/newCar.component'
import Show from './components/showCar.component'
import Queries from './components/queries.component'
import Login from './components/login.component'
import NewQuery from './components/newQuery.component'
import Edit from './components/editQuery.component'
import Check from './components/check.component'
import {Route, Switch, withRouter} from 'react-router-dom'
import Report from './components/report.component';
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {currentUser} from './actions/user.action'
import {myQueries} from './actions/query.action'
import './index.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      currentUser: ''
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
            console.log('queries from app')
        })

    }

  componentDidMount(){

    const token = localStorage.getItem('token')

    if(!token) {this.props.history.push('/login')
        
    }else{

      const reqObj ={
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}` 
        }

        }
          
      fetch('http://localhost:3000/api/v1/current_user', reqObj)
      .then(resp => resp.json())
      .then(data=>{
        console.log(data,"fetch app")
                if (data.error){
                this.props.history.push('/login')
                }else{
                 
                this.props.currentUser(data)
                this.loadMyQueries()
                }
            })
    }
   
  }

render(){
  
  return (
    <div>
          <Nav/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/checkcode" component={Check}/>
              <Route exact path="/newcar" component={New}/>
              <Route exact path="/showcar" component={Show}/>
              <Route exact path="/queries" component={Queries}/>
              <Route exact path="/report" component={Report}/>
              <Route exact path="/newquery" component={NewQuery}/>
              <Route exact path="/edit" component={Edit}/>
            </Switch>
    </div>
  );
}
}

const mapDispathToProps ={

  currentUser, myQueries
}

const mapStateToProps = (state)=>{
  return {
    
      user: state.userData
  }
}


export default connect (mapStateToProps, mapDispathToProps) (withRouter(App));
