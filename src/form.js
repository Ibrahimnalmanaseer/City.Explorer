import React from "react";
import axios from "axios";


class Entry extends React.Component{



    getLocation=async(event)=>{

        event.preventDefault();
        
        const Global='pk.e6f569abb6089f922ac76a14ac4bc5e4'
       
        let request = await axios.get(`https://eu1.locationiq.com/v1/search?key=${Global}&q=${event.target.city.value}&format=json`); 
        this.props.getcity(event.target.city.value,request.data[0].lat,request.data[0].lon);
        console.log(request)
        
            
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