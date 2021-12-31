import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from '../../components/Section'
import Loading from '../../components/Loader'
import Poster from '../../components/Poster'

const Container = styled.div`
margin-top: 20px;
margin-left: 10px;`

const Title = styled.span`
padding: 0px 10px;`

const HomePresenter = ({nowPlaying, upcoming, popular, error, loading}) => 
loading ? <Loading></Loading> : (
    <Container>
        {nowPlaying && nowPlaying.length>0 && <Section title="Now Playing">{nowPlaying.map((movie) => 
        <Poster id={movie.id} imgUrl={movie.poster_path} rating={movie.vote_average} title={movie.original_title} year={movie.release_date} isMovie={true} >

        </Poster>)}</Section>}
        {upcoming && upcoming.length>0 && <Section title="Upcoming Movie">{upcoming.map((movie) => 
        <Poster id={movie.id} imgUrl={movie.poster_path} rating={movie.vote_average} title={movie.original_title} year={movie.release_date} isMovie={true}>
            
        </Poster>)}</Section>}
        {popular && popular.length>0 && <Section title="Popular">{popular.map((movie) => 
        <Poster id={movie.id} imgUrl={movie.poster_path} rating={movie.vote_average} title={movie.original_title} year={movie.release_date} isMovie={true}>
            
            </Poster>)}</Section>}
    </Container>
)

HomePresenter.propTypes= {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default HomePresenter