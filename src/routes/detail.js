import React from 'react'

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props
        if (location.state===undefined){
            history.push('/')
            console.log(location.state)
        }
    }
    render(){
        const {location} = this.props
        if (location.state){
            return <h1>my favorite movie is {location.state.title} </h1>
        }else{
            return null
        }
    }
}

export default Detail