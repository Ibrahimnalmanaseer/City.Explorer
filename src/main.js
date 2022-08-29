import React from "react";
import Entry from './form.js';
// import Data from "./Data.js";

const GLOBAL='pk.e6f569abb6089f922ac76a14ac4bc5e4'

class Main extends React.Component{



  constructor(props){

    super(props)

    this.state={

      city:'',
      lat:'',
      lon:'',
      
    
    }
  }

   
  getCity=(cityname,latitude,longitude)=>{

    this.setState({
      city:cityname,
      lat:latitude,
      lon:longitude,
      


    })

    
  }
  render(){


      
      return(  <div>


           <Entry getcity={this.getCity} />
           <h1>latitude: {this.state.lat}</h1>
           <h1>longitude: {this.state.lon}</h1>
            <img src={` https://maps.locationiq.com/v3/staticmap?key=${GLOBAL}&center=${this.state.lat},${this.state.lon}`} alt='City Map'/>
           
           
        </div>

      )

    }
}

export default Main;