<template>
  <section id="main-forecast">
    <p class="title"> Weather forecast</p>
    <main>
      <div class="date">
        <p>Today</p>
        <p>{{currentDate()}}</p>
   
      </div>
      <div class="temp">
        <div class="today-temp">
          <p class="ctemp">현재온도 : {{ Math.round(temp.temp) }} 도</p>
          <p class="hightemp">최고온도 : {{ Math.round(temp.temp_max) }} 도</p>
          <p class="lowtemp">최저온도 : {{ Math.round(temp.temp_min) }} 도</p>
          <p class="lowtemp">습도 : {{ temp.humidity }} %</p>
        </div>
        <img :src="img_url" alt="" class="today-icon"  />
      </div>
      <div class="location">
        <i class="fas fa-map-marker-alt"></i>
        <p>{{ weather.name }}.{{ sys.country }}</p>
      </div>

    </main>
  </section>
</template>

<script>
import axios from "axios";


export default {
 
  data(){
    const api_key ="65c0b42cff7ecf92e9832ae7e8ee9669";
    const city_name = "Seoul";

    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`)
    .then(response =>{
      //console.log(response);
      this.weather = response.data;
      //console.log(this.weather);
      this.sys = response.data.sys;
      this.temp = response.data.main;
      this.icons = response.data.weather[0];
      this.img_url = `http://openweathermap.org/img/wn/${this.icons.icon}@2x.png`;

    })
    return{
      weather : {},
      sys :{},
      temp: {},
      icons: {},
      img_url: {},

    };
  },
  methods: {
    currentDate() {
      const current = new Date();
      const weekName= new Array("일","월","화","수","목","금","토");
      const week = weekName[current.getDay()];
      const date = 
     `${current.getFullYear()}. ${current.getMonth()+1}. ${current.getDate()}. ${week}`;
     
     //console.log(week);
      return date;
    }
  },
};
</script>

<style lang="scss" scoped>
 @import "~/scss/main.scss";

 #main-forecast{
   width: 100%;
   height: 33.33%;
   @include c-center-se();

   .title{
     text-align: center;
     color: #fff;
     font-family: "Comfortaa", cursive;
     display: block;
     width:100%;
     height: 15%;
     margin-bottom: 10px;
   }
   main{
     width: 100%;
     height: 980%;
     background-color: #54577556;
     border-radius: 15px;
   .date{
     @include center-sb();
     color: #fff;
     font-family: "GmarketSansLight";
     p{padding: 15px;
     font-size: 16px;
     &:nth-child(2){ 
       font-size: 12px;}
     }
    }
   }
   .temp{
     display: flex;
     width:100%;
     height: 50%;
   .today-temp{
     @include c-center-se();
     width:50%;
     height: 80%;
     padding: 15px;

     p{
       display: inline-block;
       width: 100%;
       color: #fff;
       font-family: "GmarketSansLight";
       font-size: 14px;
       margin-bottom: 5px;
     }
    }
    .today-icon{
      height: 100%;
    }
  }
  .location{
    display: flex; 
    align-items: center; 
    padding: 15px;

    i{
      color: rgb(248, 191, 85); 
      margin-right: 10px;
      }

    p{
      color: #fff; 
      font-size: 12px;
      font-family: 'Comfortaa', cursive;
      }
    }
 }
</style>