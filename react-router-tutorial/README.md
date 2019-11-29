## react-router로 SPA 개발환경

create react-app react-router-tutorial

yarn add react-router-dom

yarn add cross-env (package.json 절대경로 설정 start,build - cross-env NODE_PATH=src )

yarn add query-string     (url 쿼리 해석해주는 라이브러리)

## SPA란?

싱글 페이지 애플리케이션은 서버에서 제공하는 페이지가 하나이지만, 로딩을 한 번 하고 나면 웹 브라우저에서 나머지 페이지들을 정의

페이지에서 들어온 후 다른 페이지로 이동할 때는 서버에 새로운 페이지를 요청하는 것이 아니라, 새 페이지에서 필요한 데이터만 받아와 그에 따라 웹 브라우저가 다른 종류의 뷰를 만들어 주는 것

주소에 따라 다른 뷰를 보여주는 것을 라우팅

여러 화면으로 구성된 웹 어플리케이션을 만들게 된다면, react-router 는 필수 라이브러리

## BrowserRouter

다른 라우팅 컴포넌트를 사용하기 위해 기본적으로 감싸주어야 한다.
오직 하나의 자식만을 가질 수 있다.
비슷한 HashRoter 는 Hash(#/)로 동작하는 Router dlqslek.

## Route

path 속성으로 경로를 지정한다.
render, component, children 으로 렌더링을 한다.
정확히 매칭될때만 렌더링 하고 싶다면 exact 속성을 사용
컴포넌트에 match, history, location 이라는 객체를 넘겨준다.

## Link

a 태그는 페이지 전체를 리로드 하여 렌더링 하는 반면에, Link는 페이지 전체를 리로드 하지 않고 필요한 부분만 리로드하게 된다.

## 라우트 파라미터 읽기

방법은 두가지가 있는데요, params 를 사용하는 것 과, query 를 사용하는 것 입니다.
라우트로 설정한 컴포넌트는, 3가지의 props 를 전달받게 됩니다
history 이 객체를 통해 push, replace 를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환 할 수 있습니다.
location 이 객체는 현재 경로에 대한 정보를 지니고 있고 URL 쿼리 (/about?foo=bar 형식) 정보도 가지고있습니다.
match 이 객체에는 어떤 라우트에 매칭이 되었는지에 대한 정보가 있고 params (/about/:name 형식) 정보를 가지고있습니다.

## 라우트 이동하기

Link 컴포넌트  - 이 컴포넌트를 사용하면 페이지를 새로 불러오는걸 막고, 원하는 라우트로 화면 전환을 해줍니다.

