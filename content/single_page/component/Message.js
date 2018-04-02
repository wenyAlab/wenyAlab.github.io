import React from 'react'

const tabs = [
    'hello',
    'hi,let`s go hiking',
    'well'
]
class Messtab extends React.Component{
    render(){
        let tabsItem;
        tabsItem = tabs.map((tab) => <div key = {tab} className = 'mess-tab'><p>{tab}</p></div>);
        
        return(
            <div>{tabsItem}</div>
        )
    }
}

export default class Message extends React.Component{
    render(){
        return(
            <div className = 'message'>
                <Messtab/>
            </div>
        )
    }
}