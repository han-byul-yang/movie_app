import React from 'react'
import HomePresenter from "./HomePresenter";
import {Moviesapi} from '../../api'

export default class HomeContainer extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    }
    async componentDidMount(){
        try{
            const {data:{results:nowPlaying}} = await Moviesapi.nowPlaying()
            const {data:{results:upcoming}} = await Moviesapi.upcoming()
            const {data:{results:popular}} = await Moviesapi.popular()
            this.setState({nowPlaying, upcoming, popular})
        }catch{
            this.setState({error: 'Can not find movies information'})
        }finally{
            this.setState({loading: false})
        }
        
    }
    render(){
        const {nowPlaying, upcoming, popular, error, loading} = this.state
        console.log(this.state)
        return(
            <HomePresenter
            nowPlaying={nowPlaying}
            upcoming={upcoming}
            popular={popular}
            error={error}
            loading={loading}
            />
        )
    }
}