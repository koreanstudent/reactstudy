## 작업 환경

koa - 서버

koa -router - koa를 사용할 때 다른 주소로 요청이 들어올 경우 다른 작업을 처리할 수 있도록 라우터를 사용

koa-bodyparser - API 기능을 구현, POST/PUT/PATCH 가은 메서드의 Request Body에 json형식으로 데이터를 넣어 주면, 파싱하여 서버에서 사용할 수 있게 한다.

nodemon - 코드를 변경할때 마다 서버를 자동으로 재시작해 준다. (package.json에 scripts 추가) 
        - yarn start 재시작이 필요 없을 때
        - yarn start:dev 재시작이 필요할 때

ESLint, Prettier - 자바스크립트 문법을 검사하고 깔끔한 코드 


## koa

koa 애플리케이션은 미들웨어의 배열로 구성되어 있다. app.use 함수는 미들웨어 함수를 애플리케이션에 등록한다.

koa의 미들웨어 함수는 두 개의 파라미터를 받는다. 첫 번째 파라미터는 조금 전에도 사용한 ctx라는 값이고, 두 번째 파라미터는 next입니다.

ctx는 Context의 줄임말로 웹 요청과 응답에 관한 정보를 지니고 있다.

next는 현재 처리 중인 미들웨어의 다음 미들웨어를 호출하는 함수.

미들웨어을 등록하고 next함수를 호출하지 않으면, 다음 미들웨어를 처리하지 않는다.

Koa와 EXPRESS와 차별화되는 부분은 next 함수를 호출하면 Promise를 반환한다.

