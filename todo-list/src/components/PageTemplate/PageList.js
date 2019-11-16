import React, {Component} from 'react';
import PageItem from './PageItem';

class PageList extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }
    
    render(){
        const {todos,onToggle, onRemove} = this.props;
        const todoList = todos.map(
            todo => (
                <PageItem
                    key ={todo.id}
                    done ={todo.done}
                    onToggle = {() => onToggle(todo.id)}
                    onRemove = {() => onRemove(todo.id)}>
                  {todo.text}
                </PageItem>
            )
        );
        
        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default PageList;