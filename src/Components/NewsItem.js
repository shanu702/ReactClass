import React from 'react'

const NewsItem =(props)=> {
  
    return(
<>
      <img src={props.imageUrl} className="card-img-top" alt="..." /> 
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text"> {props.description}</p>
        <a href={props.newsUrl} className="btn btn-primary">Read More</a>
      </div>    
      </>
    )
  
}

export default NewsItem