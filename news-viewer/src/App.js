import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

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

const App = () => {
  return <NewsList/>
}


export default App;
