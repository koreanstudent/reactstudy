## 일정 관리 애플리케이션 예제

CSS Module과 Sass를 프로젝트에 적용

프로젝트 환경설정 eject (yarn eject)

Sass 관련 모듈과 classnames 설치 (yarn add sass-loader node-sass classnames)

open-color 적용 (yarn add open-color)

## classnames

여러개의 클래스를 적용할 수 있다.

## map()

const numbers = [1, 2, 3 4, 5];

const result = numbers.map((num) = > num *2);

result = [2, 4, 6 ,7 ,10]

## 리렌더링

부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링되는 속성이 있다.
App 컴포넌트가 리렌더링되면서 그 하위 컴포넌트들도 모두 리렌더링 되었다.

불필요한 리렌더링은 막아야함.  shouldComponentUpdate로 방지

## shouldComponentUpdate

1. 컴포넌트 배열이 레런딩되는 리스트 컴포넌트
2. 리스트 컴포넌트 내부에 있는 아이템 컴포넌트
3. 하위 컴포넌트 개수가 많으며, 리렌더링되지 말아야 할 상황에서도 리렌더링이          진행될때
