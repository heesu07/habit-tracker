import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';



export default class Habits extends Component {
 
 
  handleIncrement = habit => {    
    this.props.onIncrement(habit);
  };
  handleDecrement = habit =>{    
    this.props.onDecrement(habit);
  };
  handleDelete = habit =>{
    this.props.onDelete(habit);
  }
  handleAdd = name => {    
    this.props.onAdd(name);
  }
  
  // handleDelete = habit => {    
  //   const habits = [...this.state.habits];
  //   const index = habits.indexOf(habit);
  //   if(index > -1){
  //     habits.splice(index, 1);
  //   }    
  //   this.setState({habits});
  // };
  render() {
    console.log("habits");
    return (
      <>
      <HabitAddForm 
        onAdd={this.handleAdd} />
      <ul>
        {
          this.props.habits.map(habit => 
            <Habit 
              key={habit.id} 
              habit={habit} 
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              />
          )
        }
      </ul>
      <button className="habit-reset" onClick={this.props.onReset}>Reset All</button>
      </>
      
    )
  }
}
