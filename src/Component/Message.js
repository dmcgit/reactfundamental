import React, {Component} from 'react'

class Message extends Component{
    
    constructor(){
        super()
            this.state={
                message:'You are Welcome'            
            }
    }

    readMessage(){
        this.setState({
            message:'Thanks for subscribing'
        })
    }

    backHandle(){
        this.setState({
            message: 'You are Welcome'
        })
    }

    render(){
      return (
        <div>
          <h1>Hello, {this.state.message}</h1>
          <button onClick = {() => this.readMessage()}>Please Subscribe</button><br/>
          <button onClick = {() => this.backHandle()}>Back</button>
        </div>
      )    
    }
}

export default Message