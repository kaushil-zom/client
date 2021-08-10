import logo from './logo.svg';
import {useEffect } from 'react';
import './App.css';
import Zoauth2 from 'zoauth';


function App() {

  useEffect(() => {
    const auth = Zoauth2({
      'client_id': '77eabab1-112e-4527-8b35-b6d894a3f726',
      'scope': 'offline',
      'redirect_url': '',
      'enable_one_tap': false,
      'logout_url': '',
      'login_methods': ['google', 'email'],
      'custom': true,
    });
    if (typeof auth.login === "function") {
      // auth.login("IFRAME", "login_ui");
      // auth.logout();
      // auth.refresh();
      // auth.migrate();
      // setTimeout(function() {auth.initatePhoneLogin(1, '9811123129').then(m => {console.log(m)})}, 1000);
      // setTimeout(function() {auth.verifyPhoneLogin(1, '1123497568', 123456).then(m => {console.log(m)})}, 1000);
      // setTimeout(function() {auth.signupPhoneLogin('Suraj', 'def84@def.def').then(m => {console.log(m)})}, 2000);
    }
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <script>
          var auth = new Auth();
        </script> */}
        {/* <button onClick={Zoauth2()}>
          Zoauth2
        </button> */}
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

export default App;
