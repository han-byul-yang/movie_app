import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loading from '../../components/Loader'
import Section from '../../components/Section'
import Poster from '../../components/Poster'

const Component = styled.div`
padding: 28px 10px 10px 10px;`

const Form = styled.form`
margin-bottom: 50px;
width: 100%;`

const Input = styled.input`
all: unset;
width: 100%;
font-size: 27px;`

const Movie = styled.div``

const TV = styled.div``

function SearchPresenter({movieResults, tvResults, searchTerm, error, loading, handleSubmit, uploadTerm}) {
    return loading ? Loading : (<Component>    
        <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Search for Movies and TV Shows" value={searchTerm} onChange={uploadTerm}></Input>
        </Form>
        {movieResults && movieResults.length>0 && <Section title="Movie Results">{movieResults.map((movie)=>
        <Poster id={movie.id} imgUrl={movie.poster_path} rating={movie.vote_average} title={movie.original_title} year={movie.release_date} isMovie={true} >

</Poster>)}</Section>}
        {tvResults && tvResults.length>0 && <Section title="Show Results">{tvResults.map((show)=>
        <Poster id={show.id} imgUrl={show.poster_path} rating={show.vote_average} title={show.name} year={show.first_air_date} isMovie={false} >

</Poster>)}</Section>}
    </Component>)       
}

SearchPresenter.propTypes= {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func,
    uploadTerm: PropTypes.func
}

export default SearchPresenter