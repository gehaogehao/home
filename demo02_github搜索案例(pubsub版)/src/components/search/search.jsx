import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    search = ()=>{
        const {value} = this.refs.input
        if(!value){
            alert('搜索内容不能为空!')
            return
        }
        PubSub.publish('show',{isFirst:false,isLoading:true})
        axios.get('https://api.github.com/search/users',{params:{q:value}}).then(
            (response)=>{
                PubSub.publish('show',{
                    isLoading:false,
                    users:response.data.items
                })
            },
            (error)=>{
                PubSub.publish('show',{
                    isLoading:false,
                    error:error.message
                })
            }
        )
        this.refs.input.value = ''
    }


    render() {
        return (
            <div>
                <input type="text" placeholder="enter the name you search" ref='input'/>&nbsp;
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}
