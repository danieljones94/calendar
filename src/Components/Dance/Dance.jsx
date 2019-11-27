import React, { Component } from "react";
import styles from "./Dance.module.scss";

class Dance extends Component {
  state = {};

  render() {
    return (
      <section className={styles.danceEvent}>
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
