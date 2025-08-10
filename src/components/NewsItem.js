import React, { Component } from "react";


export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card" style={{ backgroundColor: this.props.mode === 'dark' ? '#456882' : '#fff',width: '23rem',color: this.props.mode === 'dark' ? '#fff': 'black'}}>
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%" , zIndex:"1"}}>{source}</span>
          <img
            src={imgUrl && imgUrl !== "None" ? imgUrl : "https://upload.wikimedia.org/wikipedia/commons/0/07/News.png"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text font-monospace">{description}...</p>
            <p className="card-text font-sans my-2" ><small className="" style={{ color: this.props.mode === 'dark' ? '#F4A261' : '#e80000ff'}}>By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
