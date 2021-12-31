
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from '../../components/Section'
import Loading from '../../components/Loader'
import Poster from '../../components/Poster'

const Container = styled.div`
padding: 0px 10px;`

function HomePresenter({topRated, popular, airingToday, loading, error}) {return loading ? <Loading></Loading> :
    (<Container>
        {topRated && topRated.length>0 && <Section title="Top Rated Shows">{topRated.map((show)=>
        <Poster id={show.id} imgUrl={show.poster_path} rating={show.vote_average} title={show.name} year={show.first_air_date} isMovie={false} >

</Poster>)}</Section>}
        {popular && popular.length>0 && <Section title="Popular Shows">{popular.map((show)=>
        <Poster id={show.id} imgUrl={show.poster_path} rating={show.vote_average} title={show.name} year={show.first_air_date} isMovie={false} >

</Poster>)}</Section>}
        {airingToday && airingToday.length>0 && <Section title="Airing Today Shows">{airingToday.map((show)=>
        <Poster id={show.id} imgUrl={show.poster_path} rating={show.vote_average} title={show.name} year={show.first_air_date} isMovie={false} >

</Poster>)}</Section>}
    </Container>) 
}

HomePresenter.propTypes= {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default HomePresenter