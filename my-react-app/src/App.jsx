import React, { Component } from 'react';
import BasicInfo from './BasicInfo';

class App extends Component {

  constructor(props){
    super(props);
    this.state =  {
       persons: [
        
        {
        name: "Makayla",
        address: "Charlotte, Nc",
        dob: '09/19/2002'
       },

      { name: "Tyra",
       address: "Charlotte, Nc",
       dob: '09/27/1992'
      },

     { name: "Mark",
      address: "Charlotte, Nc",
      dob: '10/19/1990'
     } 
      
      ]
    }
   }


  render() {
    return (
      <div>
      {this.state.persons.map(person => (
        <BasicInfo person={person} />
      ))}
    </div>
    )
  }

}

export default App;
