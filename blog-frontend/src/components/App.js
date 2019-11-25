import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { ListPage, PostPage, EditorPage, NotFoundPage} from 'pages';


//switch 컴포넌트는 설정된 라우트 중에서 일치하는 라우트 하나만 보여준다.
// path를 지정하지 않으면 어떤 경우에도 렌더링이 된다.

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path ="/" component ={ListPage}/>
                <Route  path ="/page/:page" component ={ListPage}/>
                <Route  path ="/tag/:tag/:page?" component ={ListPage}/>
                <Route  path ="/post/:id" component ={PostPage}/>
                <Route  path ="/editor" component ={EditorPage}/>
                <Route component ={NotFoundPage}/>

            </Switch>
        </div>
    )
}

export default App;