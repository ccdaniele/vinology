import React from 'react';
import {connect} from 'react-redux';
import {myQueries} from '../actions/query.action'
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'; 
import jsPDF from 'jspdf'

class Show extends React.Component{
    constructor(){
        super()
        this.state={
            car: []
        }
        
    }

    jsPDFGenerator=()=>{


       
        
        var doc = new jsPDF('p','pt');

        doc.text(20,30,'General Specifications')
        doc.text(20,60, `Model: ${this.state.model}`)
        doc.text(20,90,`Year: ${this.state.year}`)
        doc.text(20,120,`Make: ${this.state.make}`)
        doc.text(20,150,`Trim: ${this.state.trim_level}`)
        doc.text(20,180,`Standard Seating: ${this.state.standard_seating}`)
        doc.text(20,210,`Fuel Specifications`)
        doc.text(20,240,`Highway Mileage: ${this.state.highway_mileage}`)
        doc.text(20,270,`city_mileage:  ${this.state.city_mileage}`)
        doc.text(20,300,`Tank size: ${this.state.tank_size}`)
        doc.text(20,330,'Mechanical ')
        doc.text(20,360,`Anti Brake System: ${this.state.anti_brake_system}`)
        doc.text(20,390,`Transmission: ${this.state.transmission}`)
        doc.text(20,420,`Type: ${this.state.drive_type}`)
        doc.text(20,450,`Engine: ${this.state.engine}`)
 
        doc.setFont('courier');
       
 
        doc.save('document.pdf')
 
 
 
     }

    handleDelete=(e)=>{

    
        const car_id = this.props.location.state
    
          fetch(`http://localhost:3000/api/v1/cars/${car_id}`,{method: 'DELETE'})
          .then(rsp => rsp.json())
          .then(data=>{



        
          
          
          
        
    })
    this.props.history.push('/queries')
    
}
    
    componentDidMount(){
    const car_id =  this.props.location.state
        
    fetch(`http://localhost:3000/api/v1/cars/${car_id}`)
      .then(resp=>resp.json())
      .then(data=>{
          this.setState({car:data})
          
      })

    }

    render(){

    
    return (
        <div className='wrapper'>
         <div className='inner'>
            <div className='m-auto'></div>
                <Card style={{ width: '21rem', backgroundColor: 'white' }}>
                <Card.Body>
                    <Card.Title>{this.state.car.model}</Card.Title>
                    <Card.Text>
                    Here you will find all the information about your car
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Model: {this.state.car.year}</ListGroupItem>
                    <ListGroupItem>Make: {this.state.car.make}</ListGroupItem>
                    <ListGroupItem>Highway mileage: {this.state.car.highway_mileage}</ListGroupItem>
                    <ListGroupItem>City mileage: {this.state.car.city_mileage}</ListGroupItem>
                    <ListGroupItem>Engine: {this.state.car.engine}</ListGroupItem>
                    
                    <button className="btn btn-secondary" onClick={this.handleDelete}>Delete</button>
                    <button className="btn btn-secondary" onClick={this.jsPDFGenerator}>Download</button>
                </ListGroup>
                <Card.Body>
                </Card.Body>
                </Card>
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

  const mapDispathToProps ={

    myQueries
  }
  
  export default connect (mapStateToProps, mapDispathToProps)(Show)

