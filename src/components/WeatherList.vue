<template>
  <ul class="date-box">
    <li
      v-for="day in days"
      :key="day"
      @click="activate"
      :class="{ active: day.isActive }">
      {{ day.name }}
    </li>
    <p>
      <span>"{{cityName}}"</span> 시 오늘 날씨 입니다.
    </p>
  </ul>
  <div class="weather-box">
    <div v-for="(weather, index) in weathers" :key="index" class="weather">
      <div class="icon">
        <img :src="images[index]" alt="">
      </div>
      <div class="time">
        {{ Unix_timestamp(weathers[index].dt)}}
      </div>
      <div class="temp">
        <p>{{ Math.round(weathers[index].temp) }}</p>
        <img src="../assets/tempdegree.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    markerLat: {type:Number, 
    default: 37.5683, 
    required: true,
    },
    markerLon: {type:Number, 
    default: 126.9778, 
    required: true,
    }, 

  },
  data(){
    return{
       days: [
        {
          type: String,
          name: "Today",
          isActive: true,
        },
        {
          type: String,
          name: "Tomorrow",
          isActive: false,
        },
      ],
      cityName: "서울",
      weathers : [{}],
      images: [{}],

    };
  },
  created(){
    var api_key = "65c0b42cff7ecf92e9832ae7e8ee9669";
    var lat= "33.390138";
    var lon = "126.55732";

    axios
    .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)    
    .then(response=> {
      console.log(response)

      this.weathers = response.data.hourly;

      for(var i=0; i<48; i++){
        var img = response.data.hourly[i].weather[0].icon;
        //console.log(img);

        this.images[i] =`http://openweathermap.org/img/wn/${img}@2x.png`
        // 배열로 받아왔기때문에 images에도 [i]붙여줘야함.
      }
       
    })
    .catch(error=>{
      console.log(error)
      });
  },
  updated(){
    const vm = this;
    this.$nextTick(function () {
      // 전체 화면내용이 다시 렌더링된 후에 아래의 코드가 실행됩니다.
      var api_key = "65c0b42cff7ecf92e9832ae7e8ee9669";
      // var lat = 33.390138;
      // var lon = 126.55732;
      var lat = vm.markerLat;
      var lon = vm.markerLon;
      axios
        .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
        .then((response) => {
          // console.log(response);
          vm.weathers = response.data.hourly;
          for (var i = 0; i < 24; i++) {
            var img = response.data.hourly[i].weather[0].icon;
            vm.images[i] = `http://openweathermap.org/img/wn/${img}@2x.png`;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      if (lat == 37.566706999999994 && lon == 126.978652) {
        // vm.cityName = "Seoul";
        vm.cityName = "서울";
      }
      if (lat == 37.387069 && lon == 126.649587) {
        vm.cityName = "인천";
      }
      if (lat == 37.262737 && lon == 127.02895000000001) {
        vm.cityName = "수원";
      }
      if (lat == 37.750911 && lon == 128.87707800000067) {
        vm.cityName = "강릉";
      }
      if (lat == 37.16398300000001 && lon == 128.98572400000097) {
        vm.cityName = "태백";
      }
      if (lat == 36.350313000000014 && lon == 127.384933) {
        vm.cityName = "대전";
      }
      if (lat == 35.824024 && lon == 127.14815599999999) {
        vm.cityName = "전주";
      }
      if (lat == 35.159633 && lon == 126.85210200000002) {
        vm.cityName = "광주";
      }
      if (lat == 35.869911999999985 && lon == 128.60212100000024) {
        vm.cityName = "대구";
      }
      if (lat == 35.538729000000004 && lon == 129.311865000003) {
        vm.cityName = "울산";
      }
      if (lat == 35.179338000000016 && lon == 129.07518900000144) {
        vm.cityName = "부산";
      }
      if (lat == 33.390138 && lon == 126.55732) {
        vm.cityName = "제주";
      }
    });

  },
  methods:{
    Unix_timestamp(t){
    var date = new Date(t*1000);
    var hour = "0" + date.getHours();
    return hour.substr(-2) +"시";
      }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";
 .date-box {
      width: 100%;
      height: 10%;
      border-radius: 15px 15px 0 0;
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      li {
        @include center();
        height: 20px;
        padding: 0 5px;
        margin-right: 15px;

        color: #fff;
        font-family: "Comfortaa", cursive;
        font-size: 0.85rem;
        text-align: start;
        cursor: pointer;
        transition: all 0.5s ease;

        &:hover {
          color: rgb(156, 253, 232);
        }
        &.active {
          color: rgb(248, 191, 85);
        }
      }
      p{color:#fff; 
      font-family:"BMJUA";
      font-size: 0.85rem;

      span{ color: mediumaquamarine

      }
     }
    }
.weather-box {
  width: 100%;
  height: 70%;
  display: flex;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  .weather {
    width: 40%;
    min-width: 90px;
    max-height: 90px;
    height: 100%;

    padding: 15px;
    background-color: #54577556;
    border-radius: 15px;
    margin-right: 10px;

    .icon {
      position: relative;
      width: 100%;
      height: 50%;

      img {
        position: absolute;
        right: 0;
        width: 50px;
        height: 50px;
      }
    }
    .time {
      height: 20%;
      font-family: "BMJUA";
      color: #fff;
      margin-bottom: 3px;
    }
    .temp {
      height: 30%;
      display: flex;
      margin-right: 20px;

      p {
        font-family: "BMJUA";
        color: #fff;
        font-size: 1.5rem;
      }
      img {
        height: 20px;
      }
    }
  }
}
</style>