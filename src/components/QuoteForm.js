import React, { Component } from "react";
import QuoteCard from "./QuoteCard";
import "./QuoteForm.css";

const MAX_LENGTH = 30;
class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      character: "",
      image: "",
    };
    // this.handleChange = this.handleChange.bind(this);
    this.fetchSimpsonsJSON = this.fetchSimpsonsJSON.bind(this);
  }
  // handleSubmit(event) {
  //   event.preventDefault();
  // }
  // handleChange(event) {
  //   if (event.target.value.length <= MAX_LENGTH)
  //     this.setState({ character: event.target.value });
  // }
  componentDidMount() {
    this.fetchSimpsonsJSON();
  }
  fetchSimpsonsJSON() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        this.setState({
          character: response[0].character,
          quote: response[0].quote,
          image: response[0].image,
        });
        console.log(response);
      });
  }

  render() {
    // const maximumReached = this.state.character.length >= MAX_LENGTH;
    // const numRemaining = MAX_LENGTH - this.state.character.length;
    console.log(this.state);
    return (
      <div>
        <QuoteCard
          image={this.state.image}
          character={this.state.character}
          quote={this.state.quote}
        />
        {/* <form className="QuoteForm" onSubmit={this.handleSubmit}>
        <label htmlFor="character">Character:</label>
        <input
          className={maximumReached ? "length-maximum-reached" : "length-ok"}
          id="name"
          name="character"
          type="text"
          onChange={this.handleChange}
          value={this.state.character}
        />
        <small className="remaining-characters">
          {numRemaining} remaining characters
        </small>
        <p>
          You typed: <strong>{this.state.character}</strong>
        </p>
      </form>
      <button type="button" onClick={this.state.quote}>change quote</button> */}
        <button type="button" onClick={this.fetchSimpsonsJSON}>
          change quote
        </button>
      </div>
    );
  }
}

export default QuoteForm;
