import React, { Component } from 'react'
import Message from '../message/message'
import News from '../news/news'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <ul className="nav nav-tabs">
                <li>
                    <NavLink className="list-group-item" activeClassName='active0' to="/home/news">News</NavLink>
                </li>
                <li>
                    <NavLink className="list-group-item" activeClassName='active0' to="/home/message">Message</NavLink>
                </li>
                </ul>
                <Switch>
                    <Route path='/home/news' component={News}/>
                    <Route path='/home/message' component={Message}/>
                    <Redirect to='/home/news'/>
                </Switch>
                <hr/>
            </div>
        )
    }
}
