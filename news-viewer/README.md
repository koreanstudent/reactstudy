## 환경설정

yarn create react-app news-viewer

yarn add axios

Prettier로 코드 스타일을 자동 정리

VS Code에서 파일 자동 불러오기 기능 사용 jsconfig.json

yarn add styled-components

NewsItem.js - 각 뉴스 정보를 보여 주는 컴포넌트

NewsList.js - API를 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링해 주는 컴포넌트

Categories.js -상단 메뉴바

yarn add react-router-dom 리액트 라우터 적용

NewsPage.js - 라우터를 적용할 페이지

프로젝트의 다양한 곳에서 사용될 수 있는 유틸 함수들은 보통 lib 디렉터리를 만든 후 그 안에 작성

## axios

가장 많이 사용되고 있는 자바스크립트 HTTP 클라이언트입니다.

HTTP 요청을 Promise기반으로 처리한다.

## async & await

자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법

async function 함수명() {
    await 비동기_처리_메서드_명 ();
}

함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 await를 붙인다.

주의할점 - 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야한다.

await의 대상이 되는 비동기 처리 코드는 Axios 등 프로미스를 반환하는 API 호출 함수이다.

function fetchItem(){
    return new Promise(function(resolve, reject){
        var item = [1,2,3];
        resolve(items)
    })
}

async function logItems() {
    var resultItems = await fetchItems();
    
}
