import React from 'react';
import {NavLink,Route} from 'react-router-dom';

const Aboutmelist = ({match}) => (
    <div>
        <ul className = 'about-topics'>
            <li><NavLink exact activeClassName = 'active' to = '/content/single_page/index.html/aboutme/newsaboutme'>动态</NavLink></li>
            <li><NavLink activeClassName = 'active' to = '/content/single_page/index.html/aboutme/followaboutme'>关注</NavLink></li>
            <li><NavLink activeClassName = 'active' to = '/content/single_page/index.html/aboutme/settingme'>设置</NavLink></li>
        </ul>

        <Route path='/content/single_page/index.html/aboutme/:id' component={AboutmelistItem}/>  
    </div>
)

const AboutmelistItem = ({match}) => (
    <div className = 'mess-tab'>{match.params.id}</div>
)


export default class Aboutme extends React.Component{
    render(){
        return (
            <div className = 'about-me'><Aboutmelist/></div>
        )
    }
}