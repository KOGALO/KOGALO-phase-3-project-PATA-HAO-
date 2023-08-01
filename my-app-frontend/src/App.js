import SignupForm from './Components/SignupForm';
import ContactForm from './Components/ContactForm';
import LoginForm from './Components/LoginForm';

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

