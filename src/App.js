import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import greetingsData from './data/greetings.json';

function App() {

  const [name, setName] = useState('')
  const [url, setUrl] = useState('');
  const [greetings, setGreetings] = useState("")

  const generateText = () => {
    const stringsToReplace = {
      "%name%": name,
      "%invitationUrl%": url
    }
    const newGreetings = greetingsData[0].greetings.replace(/%name%|%invitationUrl%/gi, (matchedString) => {
      console.log('match', matchedString);
      return stringsToReplace[matchedString]
    });

    setGreetings(newGreetings);
  }

  const inputName = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log('value', value)
    setName(value)
  }

  const inputURL = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setUrl(value);
  }

  return (
    <div className="App" style={{ paddingLeft: 20, paddingRight: 20 }}>
      <input type="text" placeholder='nama tamu' onChange={inputName} />
      <input type="text" placeholder='URL invitation' onChange={inputURL} />
      <button onClick={generateText}>Generate Text</button>
      <p style={{ whiteSpace: 'pre', textAlign: 'start' }}>
        {greetings}
      </p>
    </div>
  );
}

export default App;
