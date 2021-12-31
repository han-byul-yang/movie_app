import React from 'react'
import DetailPresenter from "./DetailPresenter";
import {Moviesapi, TVapi} from '../../api'

export default class DetailContainer extends React.Component{
    state = {
        result: null,
        error: null,
        loading: true
    }
    async componentDidMount(){
        const {match:{params:{id}}, history: {push}} = this.props
        const parsedID = parseInt(id)
        if (isNaN(parsedID)){
            push('/')
        }
        const {location:{pathname}} = this.props
        try{
        if (pathname.includes('/movie/')){
            const detail = await Moviesapi.details(id)
            const result = detail.data
            this.setState({result: result})
        } else {
            const detail = await TVapi.details(id)
            const result = detail.data
            this.setState({result: result})
        }} catch {
            this.setState({error: 'Can not find results'})
        } finally{
            this.setState({loading: false})
        }
    }
    render(){
        const {result, error, loading} = this.state
        console.log(this.state.result)
        return(
            <DetailPresenter
            result = {result}
            error={error}
            loading={loading}
            />
        )
    }}