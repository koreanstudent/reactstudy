import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';


// 라우트를 설정 할 때에는 Route 컴포넌트를 사용하고, 경로는 path 값으로 설정합니다.
// 첫번째 라우트 / 의 경우에는 Home 컴포넌트를 보여주게 했고, 두번째 라우트 /about 에서는 About 컴포넌트를 보여주게 했습니다.
// 첫번째 라우트의 경우엔 exact 가  붙어있으면 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를 보여줍니다.
// Switch 컴포넌트를 사용하는건데요, 라우트들을 이 컴포넌트에 감싸면 매칭되는 첫번째 라우트만 보여주고 나머지는 보여주지 않습니다.

//location.pathname 은 현재 브라우저상의 위치를 알려줍니다. 이 값은 어떤 라우트에서 렌더링하던 동일합니다.
class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                  <Route path="/about/:name" component={About}/>
                  <Route path="/about" component={About}/>
                </Switch>
                <Route path="/posts" component={Posts}/>
            </div>
        );
    }
}

export default App;