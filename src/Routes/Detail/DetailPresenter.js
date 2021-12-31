import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loading from '../../components/Loader'

const Contatiner = styled.div`
position: relative;
width: 100%;
height: calc(100vh - 50px);
`
const Backdrop = styled.div`
width: 100%;
height: 100%;
background-image: url(${props => props.bgimg});
background-position: center center;
background-size: cover;
filter: blur(4px);
opacity: 0.5;
`
const Content = styled.div``

const FrontPic = styled.div`
position: absolute;
top: 50px;
left: 50px;
background-image: url(${props => props.frontimg});
width: 450px;
height: 670px;
background-position: center center;
background-size: cover;`

const About = styled.div`
position: absolute;
top: 90px;
left: 580px;

`

const Title = styled.span`
font-size: 29px;
font-weight:800;`

const Year = styled.span`
font-size: 29px;
font-weight:800;`

const Genre = styled.span`
font-size: 16px;
`
const Runtime = styled.span``

const Overview = styled.div`
padding-top: 25px;
width: 550px;
line-height: 20px;`

const DetailPresenter = ({result, error, loading}) => (
    loading ? <Loading></Loading> :
    <Contatiner>
        <Backdrop bgimg={result ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : require('../../noimg.jpg')}></Backdrop>
        <Content>
        <FrontPic frontimg={result ? `https://image.tmdb.org/t/p/w300${result.poster_path}` : require('../../noimg.jpg')}></FrontPic>
        <About>
        <Title>{result.title}</Title>
        <Year>{`(${result.release_date.substring(0,4)})`}</Year>
        <Genre>{result.genres.map((genre)=> `|${genre.name}|`)}</Genre>
        <Runtime>{`${result.runtime}m`}</Runtime>
        <Overview>{result.overview}</Overview>
        </About>
        </Content>
    </Contatiner>)

DetailPresenter.propTypes= {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default DetailPresenter