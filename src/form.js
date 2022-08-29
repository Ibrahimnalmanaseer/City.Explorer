import React from "react";
import axios from "axios";


class Entry extends React.Component{



    getLocation=async(event)=>{

        event.preventDefault();
        
                
        const key='pk.c38cb90efb1f614a4d476396e3396b57';
        let request = await axios.get(`https://eu1.locationiq.com/v1/search?key=${key}&q=${event.target.city.value} &format=json`); 
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