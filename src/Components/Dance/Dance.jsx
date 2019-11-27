import React, { Component } from "react";

class Dance extends Component {
  state = {};

  render() {
    return (
      <section>
        <p>{this.props.dance.date}</p>
        <p>
          From {this.props.dance.start.date} to {this.props.dance.end.date}
        </p>
        <p>{this.props.dance.summary}</p>
        <p>Created by {this.props.dance.creator.email}</p>
      </section>
    );
  }
}

export default Dance;
