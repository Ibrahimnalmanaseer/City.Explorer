import React from "react";
import axios from "axios";

const Global='pk.e6f569abb6089f922ac76a14ac4bc5e4'
class Entry extends React.Component{



    getLocation=async(event)=>{

        event.preventDefault();
        
        
       
        let request = await axios.get(`https://eu1.locationiq.com/v1/search?key=${Global}&q=${event.target.city.value}&format=json`); 
        let weatherrequest= await axios.get(`http://localhost:3001/weather?city=${event.target.city.value}&lat=${request.data[0].lat}&lon=${request.data[0].lon}`)  // pass city name to the backend server
        this.props.getcity(event.target.city.value,request.data[0].lat,request.data[0].lon,weatherrequest.data.Discription,weatherrequest.data.Date);
        
        console.log(event.target.city.value,request.data[0])
            
    }

    render(){ return (



      
             
        <form onSubmit={this.getLocation}>
        <label>City: </label>
          <input type="text" name="city" placeholder='Enter a city'/>
          <button type='submit'>Explore!</button>
        </form>
   
    )
    }

}


export default Entry;