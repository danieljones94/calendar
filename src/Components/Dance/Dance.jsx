import React, { Component } from "react";
import styles from "./Dance.module.scss";
import bigNapDance from "../../images/napoleon-dynamite-dance.jpg";

class Dance extends Component {
  state = {};

  render() {
    return (
      <section className={styles.danceContainer}>
        <div>
          <img src={bigNapDance} alt="napoleon" className={styles.napoleon} />
        </div>
        <section className={styles.danceEvent}>
          <p className={styles.ticketContent}>{this.props.dance.date}</p>
          <p className={styles.ticketContent}>
            From {this.props.dance.start.date} to {this.props.dance.end.date}
          </p>
          <p className={styles.ticketContent}>{this.props.dance.summary}</p>
          <p className={styles.ticketContent}>
            Created by {this.props.dance.creator.email}
          </p>
        </section>
        <div>
          <img src={bigNapDance} alt="napoleon" className={styles.napoleon} />
        </div>
      </section>
    );
  }
}

export default Dance;
