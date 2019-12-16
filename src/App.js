import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    people: []
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: [event.target.value]
    })
  } 

  handleOnSubmit = (e) => {
    e.preventDefault();
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    console.log(firstName,lastName)
    if (firstName.length>0&&lastName.length>0) {
      const person = ` ${firstName} ${lastName} `;
      this.setState({
        people: [...this.state.people,person],
        firstName: '',
        lastName: ''
      })
    }
  }

  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleOnSubmit}>
            <input 
              type="text" 
              name="firstName" 
              value={this.state.firstName}
              onChange={this.handleChange}
              />
            <input 
              type="text" 
              name="lastName" 
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <button type="submit">submit</button>
          </form>
        </article>
        <article>
          <div>
            <h1>prople</h1>
            <div>{this.state.people}</div>
          </div>
        </article>
      </section>
    )
  }
}
 class App extends Component {

  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}
export default App
