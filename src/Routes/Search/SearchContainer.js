import React from 'react'
import SearchPresenter from "./SearchPresenter";
import {Moviesapi, TVapi} from '../../api'
/*searchContainer*/ 
export default class SearchContainer extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: '',
        error: null,
        loading: false
    }
    handleSubmit = (event) => {
        const {searchTerm} = this.state
        event.preventDefault()
        if (searchTerm!==''){
            this.searchByTerm()
        }
    }
    searchByTerm = async () => {
        const {searchTerm} = this.state
        try{
            const {data: {results:movieResults}} = await Moviesapi.search(searchTerm)
            const {data: {results:tvResults}} = await TVapi.search(searchTerm)
            this.setState({movieResults, tvResults, loading: true})
        }catch{
            this.setState({error: 'Can not find term'})
        }finally{
            this.setState({loading: false})
        }
    }
    uploadTerm = (event) => {
        const {target:{value}} = event
        this.setState({searchTerm: value})
    }
    render(){
        const {movieResults, tvResults, searchTerm, error, loading} = this.state
        console.log(this.state)
        return(
            <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
            handleSubmit={this.handleSubmit}
            searchByTerm={this.searchByTerm}
            uploadTerm={this.uploadTerm}
            />
        )
    }
}