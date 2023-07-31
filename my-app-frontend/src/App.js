import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <div>
      <header>
        <h1>KEPLYN HOMES FOR SHORT & LONG STAY</h1>
      </header>

      <main>
        <section>
          <h2>Login</h2>
          <LoginForm />
        </section>

        <section>
          <h2>Sign Up</h2>
          <SignupForm />
        </section>

        <section>
          <h2>Contact Us</h2>
          <ContactForm />
        </section>
      </main>

      <footer>
        <p>© 2023 House Rental Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

