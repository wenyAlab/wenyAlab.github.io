import React from 'react';
import ReactDOM from 'react-dom';
import Todolistbox from './todoListBox.js';
import Todolistinput from './todoListInput.js';

import Todolist from './todoList.js';
import Close from '../img/close.png';


export default class Todolistitem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color:'',
            decoration:'none',
            display:'',
            checked:false
        };
        this.handleCheckInput = this.handleCheckInput.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    //handle the checked box
    handleCheckInput(e){
        this.setState({checked:e.target.checked});
        e.target.checked ? this.setState({color:'gray',decoration:'line-through'}) : this.setState({color:'',decoration:'none'})
      
    }


    //delete a target task
    handleDelete(e){
        e.preventDefault();
        this.setState({display:'none'})
    }

    render(){
        return(
            <li className = 'todolist-item' style = {{display:this.state.display}}>
                <input className = 'item-check-box' type = 'checkbox' checked = {this.state.checked} onChange = {this.handleCheckInput}/>
                <span className = 'task-title' style = {{color:this.state.color,decoration:this.state.decoration}}>{this.props.list.task}</span>
                <button className = 'delete-task-btn' onClick = {this.handleDelete}><img src = {Close}/></button>
            </li>
        )
    }
}