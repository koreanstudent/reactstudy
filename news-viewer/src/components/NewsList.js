import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {   title: '제목',   description: '내용',   url: 'https://google.com',   urlToImage: 'https://via.placeholder.com/160', };   
// const NewsList = () => {  
//      return (     
//      <NewsListBlock>      
//         <NewsItem article={sampleArticle} />      
//         <NewsItem article={sampleArticle} />       
//         <NewsItem article={sampleArticle} />       
//         <NewsItem article={sampleArticle} />       
//         <NewsItem article={sampleArticle} />       
//         <NewsItem article={sampleArticle} />     
//     </NewsListBlock>   
//     ); 
// };

const NewsList = ({category}) => {

    const [loading, response, error] = usePromise(() => {
        const query =category ==='all' ? '' : `&category=${category}`;

        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=79f9ed56f7244ed693ca766c507f7c44`,);
    },[category]);


    // const [ articles, setArticles] = useState(null);
    // const [ loading, setLoading] = useState(false);

    // 두 번째 배열이 비어있으면 시작할때만 렌더링 된다.
    // useEffect(() => {
    //     // async를 사용하는 함수 따로 선언
    //     const fetchData =async () => {
    //         setLoading(true);
    //         try{
    //             // category 값이 무엇인지에 따라 요청할 주소가 동적으로 바뀐다.
    //             const query =category ==='all' ? '' : `&category=${category}`;
    //             const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=79f9ed56f7244ed693ca766c507f7c44`,);
    //             setArticles(response.data.articles);
    //         }catch (e){
    //             console.log(e);
    //         }
    //         setLoading(false);
    //     } 
    //     fetchData();
    // }, [category]);
    
    // 대기 중일 때
    if(loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }
    // 아직 articles 값이 설정되지 않았을 때
    // articles를 조회하여 해당 값이 현재 null이 아닌지 검사해야한다. 이 작업을 하지 않으면, 아직 데이터가 없을 때 null에는 map 함수가 없기 때문에 렌더링 과정에서 오류 발생
    if(!response){
        return null;
    }

    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    const { articles } =response.data;
    

    // articles 값이 유효할 때
    return(
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    )
}

export default NewsList;