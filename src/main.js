import React from "react";
import Entry from './form.js';
// import Data from "./Data.js";



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
           <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.c38cb90efb1f614a4d476396e3396b57&center=${this.state.lat},${this.state.lon}`}  alt='City Map' />
          
           
        </div>

      )

    }
}

export default Main;