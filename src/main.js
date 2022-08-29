import React from "react";
import Entry from './form.js';
import Weather from "./weather.js";

const GLOBAL='pk.e6f569abb6089f922ac76a14ac4bc5e4'

class Main extends React.Component{



  constructor(props){

    super(props)

    this.state={

      city:'',
      lat:'',
      lon:'',
      Discription:'',
      Date:'',
      
    
    }
  }

   
  getCity=(cityname,latitude,longitude,discription,date)=>{

    this.setState({
      city:cityname,
      lat:latitude,
      lon:longitude,
      Discription:discription,
      Date:date,
      


    })

    
  }
  render(){


      
      return(  <div>

            
           <Entry getcity={this.getCity} />
           <h3>latitude: {this.state.lat}</h3>
           <h3>longitude: {this.state.lon}</h3>
           <img src={`https://maps.locationiq.com/v3/staticmap?key=${GLOBAL}&center=${this.state.lat},${this.state.lon}`} alt='City Map'/>
           <Weather weatherdis={this.state.Discription}  weatherdate={this.state.Date}  />
           
        </div>

      )

    }
}

export default Main;