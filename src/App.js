import React, {Component} from 'react';

// components.
import Login from "./Login/Login.js";
import Navbar from './Navbar/Navbar.js';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

// configuration.
import {sections, langs} from "./config.js";

// data.
import DB from './database.js';

// styling.
import {SBody} from './style.js';

const Index = () =>
      <div>
        <h1 style={{margin: 0}}>Welcome to fadExchange</h1>
        <p>The Internet's finest stock exchange experience™</p>
      </div>;

const About = ({table}) =>
      <div>
        <h1 style={{margin: 0}}>About</h1>
        <p>
          This website aims to provide a stock exchange experience involving
          the rise and fall of internet fads. To this end, users are
          challenged to bet on the templates they expect to blow up and watch
          the Internet do its magic!
        </p>
        {table.map(x => <div>{x}</div>)}
      </div>;

const Users = () =>
      <div>
        <h1 style={{margin: 0}}>Users</h1>
        <p>Find more about any specific users on this page.</p>
      </div>;



class App extends Component {
  constructor() {
    super();
    this.handleLang = this.handleLang.bind(this);
    this.state = {
      language: "english",
      users: [],
      cheeses: [
        "cheddar",
        "mozzarella",
        "swiss",
      ]
    };
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    const {language, users, cheeses} = this.state;
    return (
      <Router>
        <div>
          <Navbar items={sections} langs={langs}
                  text={DB[language].navbar}
                  handleLang={(lang) => this.handleLang(lang)}/>

          <SBody>
            <Route path="/" exact component={Index}/>
            <Route path="/About" render={routeProps => (
              <About table={cheeses} {...routeProps}/>
            )}/>
            <Route path="/Users" component={Users}/>
            <Route path="/login" component={Login}/>
            {users.map(usr =>
                       <div key={usr.id}>{usr.username}</div>)}
          </SBody>
        </div>
      </Router>
    );
  }

  handleLang(lang) {
    this.setState({
      language: lang,
    });
  }

}

export default App;

/* <nav> */
/*   <ul> */
/*     <li> */
/*       <Link to="/">Home</Link> */
/*     </li> */
/*     <li> */
/*       <Link to="/About">About</Link> */
/*     </li> */
/*     <li> */
/*       <Link to="/Users">Users</Link> */
/*     </li> */
/*     <li> */
/*       <Link to="/login">Log in</Link> */
/*     </li> */
/*   </ul> */
/* </nav> */
