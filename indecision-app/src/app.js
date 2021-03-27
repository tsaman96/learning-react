import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
ReactDOM.render(<IndecisionApp />, document.getElementById('App'));




















// class Oldsyntax {
//   constructor(){
//     this.name = 'Tahera'
//     this.getGreeting = this.getGreeting.bind(this); 
//   }
//   getGreeting(){
//     return `My name is ${this.name}`
//   }
// }
// const oldsyntax = new Oldsyntax();
// const getGreeting = oldsyntax.getGreeting;
// console.log(getGreeting());
// //.......................

// class NewSyntax {
//   name = 'saman';
//  getGreeting = () =>`Hi.I am ${this.name}`;
// }

// const newSyntax = new NewSyntax();
// const newgetGreeting = newSyntax.getGreeting;
// console.log(newgetGreeting());