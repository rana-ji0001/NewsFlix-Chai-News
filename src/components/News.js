import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)
  // document.title = `NewsFlix-${captialize(props.category)}`



  
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updatefunc = async() => {
    if (loading) return; // prevent multiple calls
    setLoading(true);
    setPage(1); 
    props.setProgress(10);
        let url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=ed7ecf785d7f47d69edd9cf9b44c92b5&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
      try{
      let data = await fetch(url);
      props.setProgress(30);
      let parseData = await data.json();
      props.setProgress(70);
      setArticles(Array.isArray(parseData.articles) ? parseData.articles : []);
      setTotalResults(parseData.totalResults)
      console.log(parseData);
      }finally {
        setLoading(false);
        props.setProgress(100);
      }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    document.title = `NewsFlix - ${capitalize(props.category)}`;
    updatefunc();


  },[props.category]);

  // const handleNext = async() => {
  //   console.log("Next");
  //     setPage(page+1)
  //     updatefunc();
  // };
  // const handlePrev = async() => {
  //   console.log("prev");
  //   setPage(page-1)
  //   updatefunc();
  // };
  //infinite scroll fetch data and concat it in new results
  const fetchMoreData = async() => {
    // const nextPage = page + 1;
    if (loading) return; // stop if already fetching
    setLoading(true);
    await new Promise(res => setTimeout(res, 1200));
    const nextPage = page + 1;    
         let url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=ed7ecf785d7f47d69edd9cf9b44c92b5&category=${props.category}&page=${nextPage}&pageSize=${props.pageSize}`;
      try{
      let data = await fetch(url);
      let parseData = await data.json();
      setArticles(Array.isArray(parseData.articles)? articles.concat(parseData.articles): articles);
      setTotalResults(parseData.totalResults)
      setPage(nextPage)
      console.log(parseData);

      }finally {
        setLoading(false);
      }
          
      
      




  };
    return (
      <>
        <h1 className={`text-center text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{margin: '35px 0px',marginTop:'90px'}}>NewsFlix - TOP {capitalize(props.category)} HEADLINES</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={loading && <Spinner/>}
        >
        <div className="container">
        <div className="row">

          {articles.map((element,index) => {
            return (
              <div className="col-md-4" key={`${element.url}-${index}`}>
                <NewsItem
                 mode = {props.mode}
                  title={element.title}
                  description={
                    element.description?.slice(0, 85) || "no description"
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  
                  source = {element.source.name}
                  date={element.publishedAt}
                 
                />
              </div>
            )})}
        </div>
        </div>
      </InfiniteScroll>
      </>
    );
}

News.defaultProps = {
    country: 'us',
    category: 'general',
    pageSize: 8,
  }
  News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }

  export default News;
