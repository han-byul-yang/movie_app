import React from 'react';
import axios from 'axios';
import Movielist from '../component/movieList'

class Home extends React.Component {
  state = {
    mood: true,
    movies: []
  }
  
  getMovies = async ()=>{
    const {data: {data: {movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json')
    this.setState({mood: false})
    console.log(movies)
    this.setState({movies:movies})
  }

  componentDidMount(){
    this.getMovies()
  }

  render (){

      const {movies} = this.state
      return (<div>{this.state.mood ? 'Wait a minute...' : movies.map((movie)=>{return (<Movielist 
      id={movie.id}
      title={movie.title}
      image={movie.medium_cover_image} 
      rating={movie.rating} 
      summary={movie.summary} />)})}
    </div>)
  }
}



export default Home;
