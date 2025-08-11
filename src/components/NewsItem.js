import React from "react";


const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card" style={{ backgroundColor: props.mode === 'dark' ? '#456882' : '#fff',width: '23rem',color: props.mode === 'dark' ? '#fff': 'black'}}>
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
            <span class="badge rounded-pill bg-danger" style={{left:"90%" , zIndex:"1"}}>{source}</span>
          </div>
           <img
            src={imgUrl && imgUrl !== "None" ? imgUrl : "https://upload.wikimedia.org/wikipedia/commons/0/07/News.png"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text font-monospace">{description}...</p>
            <p className="card-text font-sans my-2" ><small className="" style={{ color: props.mode === 'dark' ? '#F4A261' : '#e80000ff'}}>By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
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

export default NewsItem;
