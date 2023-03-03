
import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: aquamarine;
`;
const ButtonsBox = styled.div`
  width: 40vw;
  height: 25vh;
  border: solid;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
  button {
    width: 15vw;
    height: 4vh;
    font-weight: bold;
    color: black;
    background-color: orange;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      background-color: tomato;
    }
  }
`;

export default class App extends Component {
  state = {
    number: 0
  };
  Soma = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  Diminui = () => {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1
      });
    }
  };
  Play = () => {
    const Stop = setInterval(() => {
      if (this.state.number < 1000) {
        this.setState({ number: this.state.number + 1 });
      }
    }, 1000);
    this.Stop = () => {
      clearInterval(Stop);
    };
  };

  Reset = () => {
    this.setState({
      number: 0
    });
  };

  render() {
    return (
      <>
        <Container>
          <h1>{this.state.number}</h1>
          <ButtonsBox>
            <button onClick={this.Soma}>+</button>
            <button onClick={this.Diminui}>-</button>
            <button onClick={this.Stop}>Stop</button>
            <button onClick={this.Play}>Play</button>
            <button onClick={this.Reset}>Reset</button>
          </ButtonsBox>
        </Container>
      </>
    );
  }
}
