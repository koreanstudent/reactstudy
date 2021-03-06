## 작업 환경

koa - 서버

koa -router - koa를 사용할 때 다른 주소로 요청이 들어올 경우 다른 작업을 처리할 수 있도록 라우터를 사용

koa-bodyparser - API 기능을 구현, POST/PUT/PATCH 가은 메서드의 Request Body에 json형식으로 데이터를 넣어 주면, 파싱하여 서버에서 사용할 수 있게 한다.

nodemon - 코드를 변경할때 마다 서버를 자동으로 재시작해 준다. (package.json에 scripts 추가) 
        - yarn start 재시작이 필요 없을 때
        - yarn start:dev 재시작이 필요할 때

ESLint, Prettier - 자바스크립트 문법을 검사하고 깔끔한 코드 

mongoose - Node.js 환경에서 사용하는 MongoDB 기반 ODM 라이브러리. 데이터베이스 문서들을 자바스크립트 객체처럼 사용할 수 있게 해준다.

dotenv - 환경변수들을 파일에 넣고 사용할 수 있게 하는 개발 도구

esm - es 모듈 import/export 문법 사용

joi - request body 검증


npm install node-pre-gyp
npm install node-pre-gyp install --fallback-to-build

npm install bcrypt@3.0.6
node 버전과 상이해야한다.

npm i -g windows-build-tools - bcrypt 설치시 에러나면 윈도우에서 필수인 c, c++ 관련된 것들과 파이썬같은 것을 설치해서 다른 언어를 사용하는 라이브러리르 지원할 수 있게 해줍니다. bcrypt는 속도 때문에 c++인가 내부적으로 사용

bcrypt - 해시를 만드는 함수와 해시를 검증하는 함수 만들기 

JWT 토큰을 만들기 위해서는 jsonwebtoken 이라는 모듈을 설치해야한다. yarn add jsonwebtoken

## koa

koa 애플리케이션은 미들웨어의 배열로 구성되어 있다. app.use 함수는 미들웨어 함수를 애플리케이션에 등록한다.

koa의 미들웨어 함수는 두 개의 파라미터를 받는다. 첫 번째 파라미터는 조금 전에도 사용한 ctx라는 값이고, 두 번째 파라미터는 next입니다.

ctx는 Context의 줄임말로 웹 요청과 응답에 관한 정보를 지니고 있다.

next는 현재 처리 중인 미들웨어의 다음 미들웨어를 호출하는 함수.

미들웨어을 등록하고 next함수를 호출하지 않으면, 다음 미들웨어를 처리하지 않는다.

Koa와 EXPRESS와 차별화되는 부분은 next 함수를 호출하면 Promise를 반환한다.

## dotenv

사용법
require('dotenv').config(); 힘수 호출
const { PORT } = process.env; 값을 통해 환경변수 조회할수 있다. 

##  mongoose

스키마와 모델이라는 개념이 있다.

스키마 - 컬렉션에 들어가는 문서 내부의 각 필드가 어떤 형식으로 되어 있는지 정의하는 객체

모델 - 스키마를 사용하여 만드는 인스턴스로, 데이터베이스에서 실제 작업을 처리할 수 있는 함수들을 지니고 있는 객체 
ex) 모델을 만들 때 mongoose.model('Post', PostSchema)
    첫 번째 파리미터는 스키마 이름, 두 번째 파라미터는 스키마 객체

    데이터 조회 -모델 인스턴스 find() 함수 사용. 호출한 후에는 exec()를 붙여야 서버에 쿼리를 요청

    findById() - 특정 id를 가진 데이터를 조회

    remove() - 특정 조건을 만족하는 데이터를 모두 지운다

    findByIdAndRemove() - id를 찾아서 지운다

    findOneAndRemove() - 특정 조건을 만족하는 데이터를 하나를 찾아서 제거한다.

## ObjectId 검증 
    const {ObjectId} = mongoose.Types;

    export const checkObjectId = (ctx, next) => {
    const { id } = ctx.params;
    if (!ObjectId.isValid(id)) {
        ctx.status = 400; // Bad Request
        return;
    }
    return next();
    };

## Request Body 검증

    joy 사용 -객체를 검증한다.

## JWT

JSON WEB TOKEN 약자, 데이터가 JSON으로 이루어져 있는 토큰을 의미
두 객첵 서로 안전하게 정보를 주고받을 수 있도록 웹 표준으로 정의된 기술





