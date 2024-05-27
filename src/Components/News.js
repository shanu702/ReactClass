import React, { useEffect, useState } from 'react'
import NewsItem from  './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
const  News =(props) =>{

  let[articles,setArticle] =useState([]);
  let[loading,setLoading] =useState(true);
  let[page,setPage] =useState(1);
  let[totalResults,setTotalResults] =useState(0);
  let apiKey = process.env.REACT_APP_NEWS_API_KEY;
  
//document.title = `New App - ${ this.CaptializeFirstLetter(this.props.category)}`;
  
  
 const updateData =async () =>
  {
    console.log(process.env.NODE_ENV);
    console.log(process.env.REACT_APP_NEWS_API_KEY);
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&page=${page}&pageSize=${props.pageSize}&apiKey=${apiKey}`;
    var data = await fetch(url);
    props.setProgress(20);
    var parseData = await data.json();
    props.setProgress(60);
    setArticle(parseData.articles);
    setLoading(false);
    setTotalResults(parseData.totalResults);
   
    props.setProgress(100);
  }

 const fetchData = async() =>
  {
    
    const url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&page=${page+1}&pageSize=${props.pageSize}&apiKey=${apiKey}`;
    setPage( page +1)
    var data = await fetch(url);
    var parseData = await data.json();
    setArticle(articles.concat(parseData.articles));
    setLoading(false);
    setTotalResults(parseData.totalResults);

  }
  const CaptializeFirstLetter = (word) =>
    {
     return  word.charAt(0).toUpperCase() + word.slice(1)
    }
    useEffect(() => {
      updateData();
    })
    return (
      <>
        <h1 className='text-center'>News App -  {CaptializeFirstLetter(props.category)}</h1>
      {loading && <Spinner />}
       <InfiniteScroll 
       dataLength={articles.length} //This is important field to render the next data
       next={ fetchData}
       className='clearfix'
       style={{ height: 'auto', overflow: 'hidden' }}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
  > 
        <div className="row">
          {
          
            articles.map( (element) =>
              {
                return(
                <div className="col-md-4" >
                  <NewsItem title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage ? element.urlToImage:"https://www.peacestationery.com/public/no-image.jpg"} newsUrl={element.url} />
                </div>)
              })
          }
        </div>
        </ InfiniteScroll> 
      </>
    )
  
 

  
}

News.defaultProps={
  pageSize:10,
  country :'In',
  category:'general'
}
News.propTypes=
{
pageSize: PropTypes.number,
country :PropTypes.string,
category :PropTypes.string
}
export default News