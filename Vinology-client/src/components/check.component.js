
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {currentQuery} from '../actions/car.action'


class Check extends Component{
  constructor(){
    super()
    this.state = {
     loading: false,
     number: " ",
     response: false,
     message: []
     
    }
  }


  handleResponse=()=>{
   this.setState({response:true})
    setTimeout(()=>{
      this.setState({response:false})
    },8000)
    
}

  handleOnSubmit=(e)=>{
  e.preventDefault()
  
      const brandsInformation = [
        {
            "name": "Clear",
            "description": "No brand exists for the vehicle.",
            "code": "00"
        },
        {
            "name": "Flood damage",
            "description": "\"Vehicle damaged by freshwater flood (or it is unknown whether the damage was caused by fresh water or salt water).\"",
            "code": "01"
        },
        {
            "name": "Fire damage",
            "code": "02",
            "description": "Vehicle damaged by fire."
        },
        {
            "description": "Vehicle damaged by hail.",
            "name": "Hail damage",
            "code": "03"
        },
        {
            "description": "Vehicle damaged by saltwater flood.",
            "code": "04",
            "name": "Salt water damage"
        },
        {
            "name": "Vandalism",
            "description": "Vehicle damaged by vandals.",
            "code": "05"
        },
        {
            "description": "\"A Vehicle that has been built by combining a chassis with a different (non-matching VIN) frame engine and body parts. The VIN on the chassis is used as the vehicle's VIN.\"",
            "name": "Kit",
            "code": "06"
        },
        {
            "name": "Dismantled",
            "description": "The vehicle can only be sold as parts and cannot be legally driven.",
            "code": "07"
        },
        {
            "code": "08",
            "name": "Junk",
            "description": "The vehicle is incapable of safe operation for use on the roads or highways and has no resale value except as a source of parts or \"scrap or the vehicle's owner has irreversibly designated the vehicle\" as a source of parts or scrap. This vehicle shall never be titled or \"registered. Also known as non-repairable scrapped or destroyed.\""
        },
        {
            "name": "Rebuilt",
            "code": "09",
            "description": "\"The vehicle previously branded \"\"salvage\"\" has passed anti-theft and safety inspections or other jurisdiction procedures to ensure the vehicle was rebuilt to required standards. Also known as prior salvage (salvaged).\""
        },
        {
            "code": "10",
            "description": "\"A vehicle that has been permanently altered from original construction by removing adding or substituting major components.\"",
            "name": "Reconstructed"
        },
        {
            "code": "11",
            "description": "\"Damage or Not Specified - Any vehicle which has been wrecked\" \"destroyed or damaged to the extent that the total estimated or actual\" cost of parts and labor to rebuild or reconstruct the vehicle to its pre-accident condition and for legal operation on roads or highways exceeds a jurisdiction-defined percentage of the retail value of the vehicle. The retail value of the vehicle is determined by a current edition of a nationally recognized compilation (to include automated data bases) of retail values. Salvage--Damage or Not Specified also includes any vehicle to which an insurance company acquires owner- ship pursuant to a damage \"settlement or any vehicle that the vehicle's owner may wish to\" \"designate as a salvage vehicle by obtaining a salvage title without\" \"regard to extent of the vehicle's damage and repairs or any vehicle\" for which the jurisdiction cannot distinguish the reason the vehicle was designated salvage.",
            "name": "Salvage"
        },
        {
            "name": "Test Vehicle",
            "code": "12",
            "description": "The vehicle is built and retained by the manufacturer for testing."
        },
        {
            "code": "13",
            "name": "Refurbished",
            "description": "\"Any vehicle modified by the installation of a new cab and chassis for the existing coach which has been renovated resulting in a vehicle of greater value or a vehicle with a new style.\""
        },
        {
            "code": "14",
            "description": "Vehicle damaged by collision.",
            "name": "Collision"
        },
        {
            "description": "\"Eliminated in favor of code 09. Code 15 was \"\"Prior Salvage.\"\"\"",
            "code": "15",
            "name": "Reserved"
        },
        {
            "name": "Salvage Retention",
            "description": "The vehicle is branded salvage and is kept by the owner.",
            "code": "16"
        },
        {
            "code": "17",
            "name": "Prior Taxi",
            "description": "Vehicle previously registered as a taxi."
        },
        {
            "name": "Prior Police",
            "description": "Vehicle previously registered as a police vehicle.",
            "code": "18"
        },
        {
            "code": "19",
            "name": "Original Taxi",
            "description": "Vehicle is currently registered as a taxi."
        },
        {
            "description": "Vehicle is currently registered as a police vehicle.",
            "name": "Original Police",
            "code": "20"
        },
        {
            "name": "Remanufactured",
            "description": "Vehicle was reconstructed by the manufacturer.",
            "code": "21"
        },
        {
            "code": "22",
            "name": "Gray Market",
            "description": "\"Vehicle was manufactured for use outside of the United States and has been brought into the United States. Brand '22' has been replaced by brands '45' and '46' as of 6/25/01.\""
        },
        {
            "name": "Warranty Return",
            "code": "23",
            "description": "\"Vehicle returned to the manufacturer because of a breach in the warranty.\""
        },
        {
            "name": "Antique",
            "description": "The vehicle is over 50 years old.",
            "code": "24"
        },
        {
            "name": "Classic",
            "description": "\"The vehicle is over 20 years old and adheres to other jurisdiction-specific criteria e.g. vehicle make condition etc.\"",
            "code": "25"
        },
        {
            "code": "26",
            "description": "\"The vehicle will primarily be operated on private roads for agricultural purposes.\"",
            "name": "Agricultural Vehicle"
        },
        {
            "name": "Logging Vehicle",
            "code": "27",
            "description": "\"The vehicle will primarily be operated on private roads for logging purposes.\""
        },
        {
            "description": "\"The vehicle has been modified to not conform with the manufacturer's specifications and the modifications adhere to jurisdiction-specific criteria.\"",
            "name": "Street Rod",
            "code": "28"
        },
        {
            "code": "29",
            "name": "\"Vehicle Contains Reissued VIN\"",
            "description": "\"The chassis VIN has been reissued i.e. the same VIN is reused.\""
        },
        {
            "name": "Replica",
            "description": "\"A vehicle with a body built to resemble and be a reproduction of another vehicle of a given year and given manufacturer.\"",
            "code": "30"
        },
        {
            "description": "\"A vehicle that is declared a total loss by a jurisdiction or an insurer that is obligated to cover the loss or that the insurer takes possession of or title to.\"",
            "code": "31",
            "name": "Totaled"
        },
        {
            "code": "32",
            "name": "Owner Retained",
            "description": "\"A vehicle that has been declared by the insurance company to be a total loss but the owner maintains possession and ownership of the vehicle.\""
        },
        {
            "description": "\"The insurance company has issued a bond on the vehicle because the ownership of the vehicle cannot be proven; this allows the vehicle to be sold and titled. Note: This brand is not valid after January 17 2003.\"",
            "code": "33",
            "name": "Bond Posted"
        },
        {
            "description": "\"The title document is a facsimile title and not the active (original or duplicate) title document.\"",
            "name": "Memorandum Copy",
            "code": "34"
        },
        {
            "description": "\"The vehicle may only be used for parts. This code is no longer used use '07 - Dismantled'.\"",
            "code": "35",
            "name": "Parts Only"
        },
        {
            "code": "36",
            "name": "Recovered Theft",
            "description": "\"The vehicle was previously titled as salvage due to theft. The Vehicle has been repaired and inspected (or complied with other jurisdiction procedures) and may be legally driven.\""
        },
        {
            "description": "\"The vehicle has entered the titling jurisdiction from a jurisdiction that does not disclose lien-holder information on the title. The titling jurisdiction may issue a new title without this brand if no notice of a security interest in the vehicle is received within a jurisdiction defined timeframe. Note: This brand is not valid after January 17 2003.\"",
            "code": "37",
            "name": "Undisclosed Lien"
        },
        {
            "code": "38",
            "description": "\"A vehicle that was previously branded owner retained and was sold. The new owner's title contains this brand.\"",
            "name": "\"Prior Owner Retained\""
        },
        {
            "name": "\"Vehicle Non-conformity Uncorrected\"",
            "description": "\"A non-safety defect reported to the jurisdiction by the vehicle manufacturer remains uncorrected.\"",
            "code": "39"
        },
        {
            "description": "\"A non-safety defect reported to the jurisdiction by the vehicle manufacturer has been corrected.\"",
            "code": "40",
            "name": "\"Vehicle Non-conformity Corrected\""
        },
        {
            "name": "\"Vehicle Safety Defect Uncorrected\"",
            "description": "\"A safety defect reported to the jurisdiction by the vehicle manufacturer remains uncorrected.\"",
            "code": "41"
        },
        {
            "name": "\"Vehicle Safety Defect Corrected\"",
            "code": "42",
            "description": "\"A safety defect reported to the jurisdiction by the vehicle manufacturer has been corrected.\""
        },
        {
            "description": "\"A title should not be issued for the VIN. This brand can be issued for rebuilt vehicles.\"",
            "code": "43",
            "name": "\"VIN replaced by a new state assigned VIN\""
        },
        {
            "name": "Gray Market",
            "description": "\"Vehicle was manufactured for use outside the United States and has been brought into the United States. The vehicle is not in compliance with applicable federal standards.\"",
            "code": "45"
        },
        {
            "name": "Gray Market",
            "code": "46",
            "description": "\"Vehicle was manufactured for use outside the United States and has been brought into the United States. The vehicle is in compliance with applicable federal standards.\""
        },
        {
            "code": "47",
            "name": "Manufacturer Buy",
            "description": "A vehicle that has been bought back by the manufacturer under Back\"jurisdiction -defined regulations or laws such as lemon laws. For\" \"example the manufacturer could be obligated to buy back the vehicle\" when a specified number of repair attempts fails to correct a major \"problem on a new vehicle or if a new vehicle has been out of service\" for repair for the same problem for a cumulative period of 30 days or \"more within one year of purchase.\""
        },
        {
            "code": "48",
            "description": "Former Rental",
            "name": "Former Rental"
        },
        {
            "name": "Salvage--Stolen",
            "description": "\"Any vehicle the reporting jurisdiction considers salvage because an insurance company has acquired ownership pursuant to a settlement based on the theft of the vehicle.\"",
            "code": "49"
        },
        {
            "name": "\"Salvage--Reasons Other Than Damage or Stolen\"",
            "code": "50",
            "description": "\"Any vehicle the reporting jurisdiction considers salvage based on criteria such as abandonment not covered by the Salvage-- Damage or Not Specified and Salvage--Stolen brands. Note.--Percent of damage is not reported with brand code 50.\""
        },
        {
            "name": "Disclosed Damage",
            "description": "\"The vehicle has sustained damage to the extent that the damage is required to be disclosed under the jurisdiction's damage disclosure law.\"",
            "code": "51"
        },
        {
            "name": "Prior Non-",
            "code": "52",
            "description": "A vehicle constructed by repairing a vehicle that has been destroyed Repairable /or declared to be non-repairable or otherwise declared to not be Repairedeligible for titling because of the extent of damage to the vehicle but has been issued a title pursuant to state law after falling within this criterion with this brand on the face of the certificate of title."
        },
        {
            "code": "56",
            "description": "A salvage or junk vehicle determined for exportation outside of the United States and/or its territories, is not eligible for re-title/re-registration for on-road use in the United States.",
            "name": "Export Only Vehicle"
        },
        {
            "name": "Crushed",
            "code": "53",
            "description": "\"The frame or chassis of the vehicle has been crushed or otherwise destroyed so that it is physically impossible to use it in constructing a vehicle.\""
        },
        {
            "name": "Hazardous substance",
            "description": "Hazardous Substance Contaminated Vehicle - The jurisdiction has determined that the vehicle has been contaminated by a ‘hazardous substance’ and is unsafe for use. Excluding flood damaged vehicles.<br><br>A 'hazardous substance' is any substance that could diminish the safety of the vehicle or cause injury to its occupants. The 'hazardous substance' has one or more, but is not limited to the following intrinsic 'hazardous properties':<ul><li>Explosiveness</li><li>Flammability</li><li>Ability to oxidize (accelerate a fire)</li><li>Human toxicity (acute or chronic)</li><li>Corrosiveness (to human tissue or metal)</li><li>Eco toxicity (with or without bioaccumulation)</li><li>Capacity, on contact with air or water, to develop one or more of the above properties.</li></ul>",
            "code": "55"
        },
        {
            "description": "The true mileage for the vehicle. The odometer has not been \"tampered with reached its mechanical limits or been altered.\"",
            "code": "68",
            "name": "Actual"
        },
        {
            "description": "The odometer reading is known to be other than the true mileage for the vehicle.",
            "name": "Not Actual",
            "code": "69"
        },
        {
            "code": "70",
            "name": "Not Actual",
            "description": "Odometer tampering verified - The odometer reading is known to be \"other that the true mileage for the vehicle due to tampering.\""
        },
        {
            "code": "71",
            "name": "\"Exempt from Odometer Disclosure\"",
            "description": "\"The vehicle falls within criteria that allow it to change ownership without disclosure of the odometer reading.\""
        },
        {
            "name": "\"Exceeds Mechanical Limits\"",
            "description": "\"The odometer reading is less than the true mileage of the vehicle because the odometer can not display the total number of true miles.\"",
            "code": "72"
        },
        {
            "name": "\"Odometer may be Altered\"",
            "code": "73",
            "description": "\"The titling authority has reason to believe that the odometer reading does not reflect the true mileage of the vehicle because of an alteration to the odometer.\""
        },
        {
            "code": "74",
            "description": "\"The odometer in the vehicle is not the odometer put in the vehicle when manufactured.\"",
            "name": "Odometer Replaced"
        },
        {
            "description": "\"The odometer reading was recorded when the registration was renewed.\"",
            "code": "75",
            "name": "\"Reading at Time of Renewal\""
        },
        {
            "name": "\"Odometer Discrepancy\"",
            "description": "\"The titling authority has reason to believe that the odometer reading does not reflect the true mileage of the vehicle because of known previous recorded values of odometer for the vehicle.\"",
            "code": "76"
        },
        {
            "description": "\"The titling authority knows of some problem with the odometer reading that it cannot print on a title. Titling authority will discuss the problem (manual process) with authorized inquirers.\"",
            "name": "Call Title Division",
            "code": "77"
        },
        {
            "name": "\"Rectify Previous Exceeds Mechanical Limits Brand\"",
            "code": "78",
            "description": "A state other than the brander corrected brand 72."
        },
        {
            "code": "90",
            "description": "Consumer Assistance to Recycle and Save (CARS) program is Automobile -\"processing an application which if approved will render this vehicle\" CARS.gov \"incapable of operating on public streets roads and highways. The\" \"vehicle will have no value except as a source of parts or scrap shall\" be crushed or shredded within a specified time period (including the \"engine block) and shall not be exported prior to crushing or\" shredding. For additional information concerning the CARS program visit CARS.gov. Pursuant to the Consumer Assistance to Recycle and Save Act of",
            "name": "Pending Junk"
        },
        {
            "code": "91",
            "name": "Junk Automobile -",
            "description": "\"2009 (CARS) this vehicle is incapable of operating on public streets\" CARS.gov\"roads and highways. The vehicle has no value except as a source of\" \"parts or scrap shall be crushed or shredded within a specified time\" \"period (including the engine block) and shall not be exported prior to\""
        }
      ]
      
      if (this.state.number > 80 || this.state.number===" "){ this.setState({
          message: "Please insert a valid code"
      })
      this.handleResponse()
    }else{
      const data = brandsInformation.filter(message=>message.code===this.state.number)
      this.setState({
    message: data[0].description })}
    this.handleResponse()
    
      
}

  render(){
   
      return (
      <div className="wrapper">
        {this.state.response? 
        <div className="inner"><h2>{this.state.message}</h2>
        
        </div>
        : 
        <div>
        {!this.state.loading?
          
            <div className="inner">
          <form onSubmit={this.handleOnSubmit}>
          <label className="form-text"></label>
            <div className='form-group'>
                
                <input type='number' className='form-control' placeholder='Please insert your code' onChange={e=> this.setState({number: e.target.value})}/>
            </div>
            <input type="submit" name="submit" value="Let's check that code" className='btn btn-secondary btn-block'/>
          </form>
          </div>
          
         : 
         <div><ClimbingBoxLoader loading={true} size={30} /></div>
         }</div>}

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

export default connect (mapStateToProps, mapDispathToProps)(Check)






















