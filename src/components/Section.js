import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
margin: 30px 0px;
width: 100%;
`

const Title = styled.span`
font-size: 16px;
font-weight: 600;
margin: 5px;`

const Grid = styled.div`
margin-top: 25px;
display: grid;
grid-template-columns:repeat(auto-fill, 130px);`

const Section = ({title, children}) => {
    return (<Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section