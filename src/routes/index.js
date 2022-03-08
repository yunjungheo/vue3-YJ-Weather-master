// createRouter, createWebHashHistory 2가지 메서드를 가지고 있다.
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import WeatherMain from "../components/WeatherMain";

// 기본 내보내기
export default createRouter({
  // 내부에 기본 구성 옵션 작성
  // 1. Hash 모드랑 History 모드가 있다.
  // - Hash 모드 : https://google.com/#/search 처럼 특정한 주소부분에 도메인 뒤에 #을 붙여 접근하는 방법이다.
  // 특정 페이지에서 새로고침을 했을 때, 페이지를 찾을 수 없다는 메시지를 방지할 수 있다.
  // 2. History 모드 : 서버에서 작업을 해야해서 지금 당장은 알아보지 않을 것이다.

  history: createWebHashHistory(),

  // 페이지를 구분해주는 개념
  routes: [
    // 객체 리터럴 작성
    {
      // 경로
      path: "/",
      // 어떤 vue.js의 component를 연결할 것인지를 기입힌다.
      component: Home,
    },
    {
      // 경로
      path: "/WeatherMain",
      // 어떤 vue.js의 component를 연결할 것인지를 기입힌다.
      component: WeatherMain,
    },
  ],
});
