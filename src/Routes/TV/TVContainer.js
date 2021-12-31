import React from "react";
import TVPresenter from './TVPresenter'
import { TVapi } from "../../api";

export default class TVContainer extends React.Component{
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null 
    }
    async componentDidMount(){
        try{
            const {data:{results:topRated}} = await TVapi.topRated()
            const {data:{results:popular}} = await TVapi.popular()
            const {data:{results:airingToday}} = await TVapi.airingToday()
            this.setState({topRated, popular, airingToday})
        }catch{
            this.setState({error: 'Can not find movies information'})
        }finally{
            this.setState({loading: false})
        }
        
    }
    render(){
        console.log(this.state)
        const {topRated, popular, airingToday, loading, error} = this.state
        return <TVPresenter
        topRated = {topRated}
        popular = {popular}
        airingToday = {airingToday}
        loading = {loading}
        error = {error} />
    }
}