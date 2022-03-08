<template>
  <div class="container">
    <WeatherToday />
    <section id="weather">
      
      <WeatherList :markerLat="markerLat" :markerLon="markerLon "/>
      <!-- :markerLat 은 우리가 이름을 지어준것 뒤에는 밑에있는 데이터바인딩해준것 -->
    </section>
    <section id="map"></section>
  </div>
</template>

<script>
import WeatherToday from "~/components/WeatherToday";
import WeatherList from "~/components/WeatherList";


export default {
  components: {
    WeatherToday, WeatherList
  },
  data() {
    return {
     
      
      markerLat: {},
      markerLon: {},
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=90fd152314efeb897f98170bdcd2103d";
      document.head.appendChild(script);
    }
  },
  methods: {
    activate() {
      this.days.isActive == !this.days.isActive;
    },
    initMap() {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 section
        mapOption = {
          center: new kakao.maps.LatLng(36.73035, 127.967487), // 지도의 중심좌표
          level: 13, // 지도의 확대 레벨
        };
      var map = new kakao.maps.Map(mapContainer, mapOption); // eslint-disable-line no-unused-vars

      // 마커가 표시될 위치입니다.
      var positions = [
        {
          // 서울
          lating: new kakao.maps.LatLng(37.566707, 126.978652),
        },
        {
          // 인천
          lating: new kakao.maps.LatLng(37.387069, 126.649587),
        },
        {
          // 수원
          lating: new kakao.maps.LatLng(37.262737, 127.02895),
        },
        {
          // 대전
          lating: new kakao.maps.LatLng(36.350313, 127.384933),
        },
        {
          // 태백
          lating: new kakao.maps.LatLng(37.163983, 128.985724),
        },
        {
          // 강릉
          lating: new kakao.maps.LatLng(37.750911, 128.877078),
        },
        {
          // 대구
          lating: new kakao.maps.LatLng(35.869912, 128.602121),
        },
        {
          // 울산
          lating: new kakao.maps.LatLng(35.538729, 129.311865),
        },
        {
          // 부산
          lating: new kakao.maps.LatLng(35.179338, 129.075189),
        },
        {
          // 전주
          lating: new kakao.maps.LatLng(35.824024, 127.148156),
        },
        {
          // 광주
          lating: new kakao.maps.LatLng(35.159633, 126.852102),
        },
        {
          // 제주도
          lating: new kakao.maps.LatLng(33.390138, 126.55732),
        },
      ];

      const vm = this;
      // vm 자체가 전역변수 가장 바깥에서 다른코드를 볼수있는 
      // 마커를 생성합니다.
      positions.forEach(function (pos) {
        var marker = new kakao.maps.Marker({
          position: pos.lating, // 마커의 위치
        });

        // 마커가 지도 위에 표시되도록 설정합니다.
        marker.setMap(map);

        //마커 클릭 이벤트를 등록합니다.
        kakao.maps.event.addListener(marker, "click", () => {
          //마커 position을 출력합니다.
          // getPosition 좌표를 읽는 함수 
          console.log(marker.getPosition());
          vm.markerLon = marker.getPosition().La;
          vm.markerLat = marker.getPosition().Ma;

          console.log(vm.markerLat);
          console.log(vm.markerLon);
          return marker;
        });

        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다.
        // marker.setMap(null);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container {
  /* width: 25vw; */
  /* height: 75vh; */
  width: 300px;
  height: 650px;
  padding: 30px;
  background: linear-gradient(70deg, #131743, #202352);
  border-radius: 30px;
  box-shadow: 5px 5px 5px gray;
  @include c-center();

  #weather {
    width: 100%;
    height: 27.67%;
    @include c-center();

   
  }

  #map {
    width: 100%;
    height: 39%;
    background-color: #54577556;
    border-radius: 15px;
  }
}
</style>