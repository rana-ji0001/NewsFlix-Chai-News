import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps = {
    country: 'us',
    category: 'general',
    pageSize: 8,
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }
  captialize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page : 1,
      loading: false,
      totalResults: 0,
    };
    document.title = `NewsFlix-${this.captialize(this.props.category)}`
  }
  async updatefunc(){
        let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ed7ecf785d7f47d69edd9cf9b44c92b5&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({ articles:  Array.isArray(parseData.articles) ? parseData.articles : [], totalResults: parseData.totalResults,loading: false });


  }

  async componentDidMount() {
    this.updatefunc();
  }
  handleNext = async() => {
    console.log("Next");
      let newPage = this.state.page + 1;

      this.setState({
         page: newPage,
      });
      this.updatefunc();
  };
  handlePrev = async() => {
    console.log("prev");
    let newPage = this.state.page - 1;
    this.setState({
         page: newPage,
      });
    this.updatefunc();
  };
  //infinite scroll fetch data and concat it in new results
   fetchMoreData = async() => {
    const nextPage = this.state.page + 1;
         let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ed7ecf785d7f47d69edd9cf9b44c92b5&category=${this.props.category}&page=${nextPage}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults,loading: false,page: nextPage });




  };
  render() {
    return (
      <>
        <h1 className={`text-center text-${this.props.mode === 'light' ? 'dark' : 'light'}`} style={{margin: '35px 0px'}}>NewsFlix - TOP {this.captialize(this.props.category)} HEADLINES</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={this.state.loading && <Spinner/>}
        >
        <div className="container">
        <div className="row">

          {this.state.articles.map((element,index) => {
            return (
              <div className="col-md-4" key={`${element.url}-${index}`}>
                <NewsItem
                 mode = {this.props.mode}
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
        {/* <div className="container d-flex justify-content-evenly my-4">
          <button
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.handlePrev}
          >
            &larr; Prev
          </button>
          <button
            className="btn btn-dark"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
    
  }
}
