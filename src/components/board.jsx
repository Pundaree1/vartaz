import { useEffect } from "react";
import { useState } from "react";
import Stock from "./Stock";
import Newsitem from "./newsitem";


const apiKey =import.meta.env.VITE_API_KEY;

const Board = ({category}) => {
        const[articles,setArticles]=useState([]);
        useEffect(()=>{
            let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
            fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

        },[category]);
        window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
   window.weatherWidgetConfig.push({
       selector:".weatherWidget",
       apiKey:"", //Sign up for your personal key
       location:"Chennai, IN", //Enter an address
       unitGroup:"metric", //"us" or "metric"
       forecastDays:7, //how many days forecast to show
       title:"London,UK", //optional title to show in the 
       showTitle:true, 
       showConditions:true
   });
  
   (function() {
   var d = document, s = d.createElement('script');
   s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
   s.setAttribute('data-timestamp', +new Date());
   (d.head || d.body).appendChild(s);
   })();


       




    return (
        <>
        <div class="weatherWidget" ></div>
        {/* <div>
            <Stock/>
        </div> */}
        <Stock/>
        <div>
            <h2 className="text-center text-light">Hot <span className="badge bg-danger">News</span></h2>
            {articles.map((news,index)=>{
                return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>
        
        </>
    );
}

export default Board;
