import React from 'react'

class Detail extends React.Component{
    componentDidMount(props){
        console.log(props)
    }
    render(){
        const {location} = this.props
        return <h1>this movie's title is {location.state.title}</h1>
    }
}

export default Detail