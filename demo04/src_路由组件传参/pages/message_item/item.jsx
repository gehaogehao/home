import React, { Component } from 'react'


export default class Item extends Component {

    state={
        data:[
            {id:'01',title:'一个好消息!',content:'加油尚硅谷!'},
            {id:'02',title:'两个好消息!',content:'加油武汉!'},
            {id:'03',title:'三个好消息!',content:'加油中国!'},
            {id:'04',title:'四个好消息!',content:'加油最好的自己!'}
        ]
    }


    render() {
        const {id} = this.props.match.params
        const result = this.state.data.find((dataObj)=>{
            return dataObj.id === id
        })
        return (
           <ul>
               <li>ID:{result.id}</li>
               <li>TITLE:{result.title}</li>
               <li>CONTENT:{result.content}</li>
           </ul>
        )
    }
}
