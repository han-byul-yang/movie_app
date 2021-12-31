import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import styled from 'styled-components'

const Navigate = styled.nav`
padding: 0 10px;
position: fixed;
top: 0;
left: 0;
height: 40px;
width: 100%;
display: flex;
align-items: center;
background: rgba(20,20,20,0.5);
z-index: 10;
box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`

const List = styled.ul`
display:flex;
`

const Content = styled.li`
padding: 0px;
list-style: none;
border-bottom: solid 5px
${props => (props.current ? '#3498db' : 'transparent')};
transition: border-bottom 0.5s linear;
width: 70px;
height: 50px;
text-align: center;`;

const Slink = styled(Link)`
text-decoration: none;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
`;

 function Header({location:{pathname}}) {
    return(
    <Navigate>
        <List>
            <Content current={pathname==='/'}>
                <Slink to='/'>Home</Slink>
            </Content>
            <Content current={pathname==='/tv'}>
                <Slink to='/tv'>TV</Slink>
            </Content>
            <Content current={pathname==='/search'}>
                <Slink to='/search'>Search</Slink>
            </Content>
        </List>
    </Navigate>)
 }
 
export default withRouter(Header)