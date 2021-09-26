import React from 'react'
import '../routes/home.css'
import {Link} from 'react-router-dom'

function Movielist ({title, image, rating, summary}){
    return (
      <Link to={{
        pathname:'/moviedetails',
        state: {
          title,
          image,
          rating,
          summary
        }
      }}>
    <div className='movie'>
      <div className='title'>{title}</div>
      <img src={image} className="img"></img>
      <div className="rate">{rating}</div>
      <div className="summary">{summary}</div>
    </div>
    </Link>)
  }

  export default Movielist