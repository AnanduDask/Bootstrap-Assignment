var React=require('react');
var WeatherForecast=require('./WeatherForecast');

var WeatherChild=React.createClass({


 render:function()
 {
     var arr=[];
     var temp='';
     var temp_min='';
     var temp_max='';
     var pressure='';
     var humidity='';
     var description='';
     var clouds='';
     var datehr='';
     var windspeed='';

     var aggregatedArray=this.props.data1;

     aggregatedArray.list.forEach(function(weather_data){

          temp=weather_data.main.temp;
          temp_min=weather_data.main.temp_min;
          temp_max=weather_data.main.temp_max;
          pressure=weather_data.main.pressure;
          humidity=weather_data.main.humidity;
          description=weather_data.weather[0].description;
          clouds=weather_data.clouds.all;
          windspeed=weather_data.wind.speed;
          datehr=weather_data.dt_txt;

          console.log("data2");
          console.log(temp);
          arr.push(<WeatherForecast datehr={datehr} clouds={clouds} windspeed={windspeed} temp={temp} temp_min={temp_min} description={description} temp_max={temp_max} pressure={pressure} humidity={humidity}/>);
     });

  return(<div className="container-fluid " id="lower1">
         
          <table className="table table-inbox table-hover border=1" >
                   <tbody>
                   {arr}
                   </tbody>
                   </table>
                   </div>
         )
 }
});
module.exports=WeatherChild;
