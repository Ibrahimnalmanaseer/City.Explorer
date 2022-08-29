import React from "react";


class Weather extends React.Component{





render(){


   return(
   
    <div>
   
   <h3> Discription : {this.props.weatherdis} </h3>
   <h3> Date : {this.props.weatherdate} </h3>

   </div>)

}

}

export default Weather;