import React, { useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';
import {Route} from 'react-router-dom';

// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try{
//       const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=79f9ed56f7244ed693ca766c507f7c44',);
    
//       setData(response.data);
//     } catch (e){
//       console.log(e);
//     }
//   }
//   return (
//     <div>
//       <div>
//          <button onClick={onClick}>불러오기</button>
//       </div>
//     {data && <textarea row ={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
//     </div>
//   )
// }

// const App = () => {

//   const [category, setCategory] = useState('all');
//   const onSelect =useCallback(category => setCategory(category), []);

//   return (
//     <>
//     <Categories category={category} onSelect={onSelect}/>
//     <NewsList category={category}/>
//     </>
//   )
// }

// category? 란 값이 선택적이라는 의미. 있을 수도 있고 없을 수도 있다.
const App= () => {
  return <Route path="/:category?" component={NewsPage}/>;
}


export default App;
