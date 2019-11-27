## 프로젝트 구조 잡기

이 프로젝트에서는 Sass와 CSS 모듈을 결합하여 컴포넌트를 스타일링하고, 리덕스로 상태를 관리하며, 리액트 라우터로는 여러 페이지를 관리

create-react-app blog-frontend

components : 리덕스 상태에 연결되지 않은 프리젠테이셔널 컴포넌트들이 들어 있다. 각 컴포넌트의 스타일도 이 디렉터리에 넣는다.

containers : 리덕스 상태와 연결된 컨테이너 컴포넌트들이 들어 있다.

lib : 백엔드 API 함수들과 코드 스플리팅할 때 사용하는 asyncRoute가 들어 있다.

pages : 라우터에서 사용할 각 페이지 컴포넌트들이 들어 있다.

store : Ducks 구조를 적용시킨 리덕스 모듈들과 스토어 생성 함수가 들어 있다.

styles : 폰트, 색상, 반응형 디자인 도구, 그림자 생성 함수 등 프로젝트 관련 스타일 요소

yarn add open-color include-media  - 색상을 쉽게 선택할 수 있는 open-color와 반응형 디자인을 쉽게 적용할 수 있는 include-media, 그림자를 간편하게 설정 할 수 있는 material-shadow 믹스인

## webpack

 모듈 번들러란 여러개의 나누어져 있는 파일들을 하나의 파일로 만들어주는 라이브러리

 모듈 번들러 라이브러리는 웝팩, parcel 등 


 ## dotEnv 

 config/env.js 제공

 일반적으로 포트 번호, secret code, database 주소 등 json에 보관하여 사용한다. 정보 노출을 막기 위해  .env라는 파일에 숨겨주는 기능을 한다.

 ## 리덕스 설정

 base.js : 로그인 상태, 삭제 및 로그인할 때 보이는 모달 상태를 다룬다.

 editor : 마크다운 에디터 상태를 다룬다.

 list : 포스트 목록 상태를 다룬다.

 post : 단일 포스트 상태를 다룬다.

## 기본 유저 인터페이스 생성

PageTemplate, Header, Footer 컴포넌트 생성

common 디렉터리에는 페이지 두 개 이상에서 사용하는 컴포넌트들을 넣는다.

vs code의 generate-react-component 사용 - > scss, js, index.js 자동으로 생성해줌


## 이해하기

header.js -> pagetemplate.js -> listpage.js
 
