import React, { Component } from 'react';
import './App.css';
import Title from './title.js';
import Footer from './footer.js';
import PicsPage from './pics-page.js';
import Construction from './construction';

function PageTurner(props) {
  if (props.currPage === 'PicsPage') {
    return <PicsPage />;
  }
  return <Construction />;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currPage: 'PicsPage'};
  }

  changePage(pageName) {
    this.setState({currPage: pageName});
  }

  render() {
    return (
      <div className="app-main">
        <header className="header">
          <Title changePage={this.changePage.bind(this)} />
        </header>
        <div className="container body-content">
          <PageTurner currPage={this.state.currPage} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
