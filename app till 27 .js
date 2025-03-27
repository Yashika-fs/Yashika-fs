/*import logo from './logo.svg';
//import  './App.css';
//import React from 'react';
//import { useState } from 'react';
//const logourl="https://logowik.com/content/uploads/images/sharda-university5058.jpg";
/*function App() {
 return(
  <div>
  <h1>{`current time:${new Date().toLocaleTimeString()}`}</h1>
</div>
 )
}
function Time()
{
  return(
<h1>{`current time:${new Date().toLocaleTimeString()}`}</h1>
  )
}
/*function Greetings(prop)
{
return(
  <h1>hello,{prop.name}</h1>
)
}
function Image()
{
    return(
        <img src={logourl} alt="logo"/>
    )
}
function Mycolor(prop)
{
  return(
    <h1>My fav color is,{prop.color}</h1>
  )
}
function Color()
{
  const [count, setCounter] = useState(0);
  return(
    <div>
    <h1>{count}</h1>
    <button
    type="button"
    onClick={()=> setCounter(count+1)}
    >INCREMENT</button>
    </div>
  )
}
function App(){
  return(
    <div classname="App">
      <Color/>
      <Time/>
      </div>
  )
}
/*function Counting()
{
  const [count, setCounter] = useState(0);
  return(
    <div className='css'>
    <h1>Counting is {count}</h1>
    <button
    type="button"
    onClick={()=> setCounter(count+1)}
    >INCREMENT</button>
    <button
    type="button"
    onClick={()=> setCounter(count-1)}
    >DECREMENT</button>
    <button
    type="button"
    onClick={()=> setCounter(0)}
    >Reset</button>
    </div>
  )
}
function Like(){
  return(
  <div className='Color'>
    <button type="button"style={onclick(background-color)}>
      Like
    </button>
  </div>
  )
}
function App(){
  return(
    <div>
      <Like/>
    </div>
  )
}
function App(){

  const [name,setName]=useState("");
  const handlesubmit=(event)=>{
    alert('Name entered by you:${name}');
  }
    return(
    <div className="App">
      <form>
        <label> Enter your Name: </label>
          <input type="text"
          value={name} 
          onChange={(e)=>{setName(e.target.value)}}>
          </input>
          <input type="Onsubmit"></input>
      </form>
    </div>
  )

}
function App() {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Username: ${inputs.username}\nAge: ${inputs.age}`);
  }

  return (
   <div> <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
    </div>
  );
}

export default App;

import React from "react";

// Functional Component
const ListRenderer = () => {
  // Function inside the Functional Component
  const renderItem = (item, index) => {
    return <li key={index}>{`Item ${index + 1}: ${item}`}</li>;
  };

  // Array of items to render
  const items = ["Apple 🍎", "Banana 🍌", "Cherry 🍒", "Date 🌴"];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
    
        {items.map((item, index) => renderItem(item, index))}
      </ul>
    </div>
  );
};
export default ListRenderer;*/
import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  // State to manage form inputs and error messages
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Refs for uncontrolled components (to manage focus)
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  // Handle controlled form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation function
  const validateForm = () => {
    const errors = { name: '', email: '' };

    if (!formData.name) {
      errors.name = 'Name is required!';
    }
    if (!formData.email) {
      errors.email = 'Email is required!';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid!';
    }

    setFormErrors(errors);

    // Return true if there are no errors
    return !errors.name && !errors.email;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '' });
      setTimeout(() => {
        setFormSubmitted(false); // Hide success message after 3 seconds
      }, 3000);
    } else {
      // Focus on the first invalid field if the form is invalid
      if (formErrors.name) {
        nameInputRef.current.focus();
      } else if (formErrors.email) {
        emailInputRef.current.focus();
      }
    }
  };

  // Render the success message or error message based on form state
  const renderMessage = () => {
    if (formSubmitted) {
      return <p className="success-message">Form submitted successfully!</p>;
    }
    return (
      <>
        {formErrors.name && <p className="error-message">{formErrors.name}</p>}
        {formErrors.email && <p className="error-message">{formErrors.email}</p>}
      </>
    );
  };

  return (
    <div className="App">
      <h1>React Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            ref={nameInputRef} // Uncontrolled component demo with ref
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            ref={emailInputRef} // Uncontrolled component demo with ref
          />
        </div>
        {renderMessage()}
        <button type="submit">Submit</button>
      </form>
      <hr />
      <h2>Uncontrolled Component Example</h2>
      <UncontrolledForm />
    </div>
  );
}

// Uncontrolled components example (using refs to directly access DOM elements)
function UncontrolledForm() {
  const nameInput = useRef();
  const emailInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${nameInput.current.value}, Email: ${emailInput.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" ref={nameInput} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" ref={emailInput} />
      </div>
      <button type="submit">Submit Uncontrolled</button>
    </form>
  );
}

export default App;
 
