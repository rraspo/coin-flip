import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, Container } from './Components';
import { randomNumber } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>
            Random number generator using flip function
          </h1>
        </header>
        <Container>
          <Card title='Refresh'>
            <Button buttonLabel='Generate new values' onClick={this.refresh} />
          </Card>
        </Container>
        <Container>
          <Card title='n = 1' body={randomNumber(1)} />
          <Card title='n = 2' body={randomNumber(2)} />
          <Card title='n = 3' body={randomNumber(3)} />
          <Card title='n = 4' body={randomNumber(4)} />
          <Card title='n = 5' body={randomNumber(5)} />
        </Container>
        <Container>
          <Card title='n = 10' body={randomNumber(10)} />
          <Card title='n = 350' body={randomNumber(350)} />
          <Card title='n = 400' body={randomNumber(400)} />
          <Card title='n = 5693' body={randomNumber(5693)} />
          <Card title='n = 49850' body={randomNumber(49850)} />
        </Container>
        <Container>
          <Card title='n = 999999' body={randomNumber(999999)} />
          <Card title='n = 1000000' body={randomNumber(1000000)} />
          <Card title='n = 1000001' body={randomNumber(1000001)} />
        </Container>
      </div>
    );
  }
}

export default App;
