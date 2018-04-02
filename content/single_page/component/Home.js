import React from 'react'

const news = [
    {
        topic:'weiwei',
        content:'welcome to my first news'
    },
    {
        topic:'haha',
        content:'be a happy day'
    },
    {
        topic:'yaya',
        content:'you are cool'
    }
]

class Weiweinews extends React.Component{
    render(){
        return(
            <div>
                <div className = 'single-tab'>
                    <h4>{this.props.news.topic}</h4>
                    <div>{this.props.news.content}</div>
                </div>
            </div>
        
        )
    }
}
class Makenews extends React.Component{
    render(){
        var newsItem;
        newsItem = news.map((news) =>{
              return <Weiweinews news = {news} key = {news.content}/>
            }
        )
        return(
            <div className = 'single-tab-banner'>
                <div>{newsItem}</div>
            </div>
        )
    }
}

export default class Home extends React.Component{
    render(){
        return(
            <div className = 'home-page'>
                <Makenews/>
            </div>
        )
    }
}