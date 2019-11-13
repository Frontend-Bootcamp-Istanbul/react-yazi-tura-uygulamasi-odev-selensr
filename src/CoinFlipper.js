import React, { Component } from "react";
import Coin from "./Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "",
      donuyor: false,
      flip: []
    };
  }

  handleClick = () => {
    let turn = Math.floor(Math.random() * 2);
    const finalSide = turn === 0 ? "tura" : "yazi";
    this.setState({ donuyor: true }, () => {
      setTimeout(() => {
        this.setState({
          donuyor: false,
          side: finalSide,
          flip: [...this.state.flip, finalSide]
        });
        console.log(this.state.flip);
      }, 1000);
    });
  };

  tura = () => {
    let tura = this.state.flip.filter(value => value === "tura");
    return tura.length;
  };

  yazi = () => {
    let yazi = this.state.flip.filter(value => value === "yazi");
    return yazi.length;
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.flip.length} </strong>
          atıştan
          <strong> {this.tura()} </strong>ü tura
          <strong> {this.yazi()} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
