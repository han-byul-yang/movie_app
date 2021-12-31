import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
font-size: 12px;
margin: 10px;
position: relative;
`
const Rating = styled.span`
position: absolute;
bottom: 35px;
right: 5px;
opacity: 0;
`
const Img = styled.div`
background-image: url(${props => props.bgUrl});
width: 100%;
height: 170px;
background-size: cover;
background-position: center center;
border-radius: 4px;

transition: opacity 0.1s linear;`
const ImgContainer = styled.div`
margin-bottom: 5px;
&:hover{
    ${Img}{opacity: 0.6};
    ${Rating}{opacity: 1};
};`

const Title = styled.div`
font-size: 12px;
margin-bottom:3px;`

const Year = styled.span`
font-size: 10px;
color: rgba(255,255,255,0.5);`

const Poster = ({id, imgUrl, rating, title, year, isMovie = false}) => (
    <Link to= { isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>    
        <ImgContainer>
            <Img bgUrl={imgUrl ? `https://image.tmdb.org/t/p/w300${imgUrl}` : './noimg.jpg'}></Img>
            <Rating><span>★</span>{rating}/10</Rating>
        </ImgContainer>  
            <Title>{title.length>11 ? `${title.substring(0,11)}...` : title}</Title>
            <Year>{year}</Year>
    </Container>
    </Link>
)

Poster.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number,
    title: PropTypes.string.isRequired,
    year: PropTypes.string
}

export default Poster
