import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Item from '../message_item/item'

export default class Message extends Component {

    state={
       messages:[]
    }

    componentDidMount(){
       setTimeout(()=>{
            this.setState({ 
                messages:[
                    {id:'01',title:'重大消息!'},
                    {id:'02',title:'特大消息!'},
                    {id:'03',title:'巨大消息!'},
                    {id:'04',title:'重磅消息!'}
                ]
            })
       },1000)
    }


    render() {
        const {messages} = this.state
        return (
           <div>
                <ul>
                    {
                        messages.map((messageObj)=>{
                            return (
                                <li key={messageObj.id}>
                                    <Link to={`/home/message/item/${messageObj.id}`}>{messageObj.title}</Link>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Route path='/home/message/item/:id' component={Item}/>
           </div>
        )
    }
}
