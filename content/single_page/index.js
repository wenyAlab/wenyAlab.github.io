import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter,NavLink} from 'react-router-dom';

import Message from './component/Message'
import Aboutme from './component/Aboutme'
import Home from './component/Home'

class Index extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div className = 'single-page'>
                    <h2>Single Page</h2>
                    <ul className = 'nav-list'>
                        <li><NavLink exact activeClassName = 'active' to = '/'>首页</NavLink></li>
                        <li><NavLink activeClassName = 'active' to = '/message'>消息</NavLink></li>
                        <li><NavLink activeClassName = 'active' to = '/aboutme'>我</NavLink></li>
                    </ul>
                   
                    <Route exact path = '/' component = {Home}/>
                    <Route path = '/message' component = {Message}/>
                    <Route path = '/aboutme' component = {Aboutme}/>
                    
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('root'))