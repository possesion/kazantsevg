import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import axios from 'axios';
// import Contact from './Components/Contact';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
      isLoaded: false,
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getData = () => {
    axios.get('./resumeData.json')
      .then(response => this.setState({ resumeData: response.data, isLoaded: true }))
      // .then(response => console.log(response))
      .catch((e) => console.error(e))
  }

  async componentDidMount() {
    this.getData();
  }

  render() {
    const { resumeData: { main, resume, portfolio }, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div className="App">
          <Header data={main} />
          <About data={main} />
          <Resume data={resume} />
          <Portfolio data={portfolio} />
          <Footer data={main} />
        </div>
      );
    }
    return null;
  }
}

export default App;
