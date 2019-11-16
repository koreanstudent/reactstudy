import React, {Component} from 'react';
import './PageItem.scss';
import cn from 'classnames';  //여러개의 클래스 네임 사용 라이브러리


class PageItem extends Component {
    render(){
        const { done, children, onToggle, onRemove} = this.props;

    return (
        <div className = "TodoListItem" onClick={onToggle}>
           <input className="checkbox" type ="checkbox" checked={done} readOnly/>
           <div className={cn("text",{done})}>{children}</div>
           <div className="remove" onClick ={(e) =>{
               onRemove();
               e.stopPropagation(); // 자식 -> 부모순으로 메서드 실행 방지
           }}>[삭제]</div>
        </div>
    );
  }
}

export default PageItem;