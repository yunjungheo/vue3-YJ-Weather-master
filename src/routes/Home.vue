<template>
  <div id="wrap">
    <div class="container">
      <div class="icon-box">
        <WeatherIcon />
      </div>
      <div class="subscribe-box">
        <p class="title">
          Weather
          <span>New & Feed</span>
        </p>
        <p class="explain-ko">
          날씨 및 다양한 기상정보를 통해 오늘 하루를
          보다 편리하고, 신속정확하게 준비해보세요.
        </p>
        <p class="explain-en">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, tenetur? 
        </p>
      </div>
      <RouterLink
        to="/WeatherMain"
        class="btn">
        Get Start
      </RouterLink>
    </div>
  </div>
</template>

<script>
import WeatherIcon from "~/components/WeatherIcon.vue";


export default {
  components: { 
    WeatherIcon,

   },
};
</script>
<style lang="scss" scoped>
@import "~/scss/main.scss";

#wrap{
  @include center-se();
  margin-top: 25px;

  .container{width: 300px; height: 650px; padding: 30px; background: linear-gradient(70deg, #131743, #202352); border-radius: 30px; box-shadow: 5px 5px 5px gray;
  @include c-center-sb();
  
  .icon-box{width: 100%; height: 50%;}
  .subscribe-box{width: 100%; height: 40%; display: flex; flex-direction: column;
  p{color: #fff; margin: 7.5px 0;}
  .title{font-size: 2rem; font-weight: 600; text-align: center; line-height: 1.2; font-family: 'Comfortaa', cursive;
  span{color: rgb(248, 191, 85)};
   }
  }
  .btn{width: 75%; height: 50px; margin:auto; background-color: rgb(248, 191, 85); border-radius: 10px;
  @include center();
  text-decoration: none; color: black; font-weight: 900; font-family: 'Comfortaa', cursive; transition: all 0.5 ease-in-out;
  &:hover{background-color: black; color: rgb(248, 191, 85); border: 1px solid rgb(248, 191, 85);}
  }
  .explain-ko{ font-family: "GmarketSansLight"; font-weight: 300; font-size: 0.75rem; text-align: justify; line-height: 1.4;}
  .explain-en{
    font-family: 'Frank Ruhl Libre', serif; font-weight: 300;font-size: 00.75rem;text-align: justify; line-height: 1.4;
     }
    }
  }

</style>
