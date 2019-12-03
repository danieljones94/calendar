import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className={styles.header}>
        <h1>
          <img
            src="https://fontmeme.com/permalink/191202/4a83c2e5c41edb85629df11555283f81.png"
            alt="disco-night-font"
            border="0"
          />
        </h1>
        <textarea
          name="search"
          id="search"
          className={styles.searchBar}
          placeholder="Search for an event"
          onChange={this.props.search}
          value={this.props.setSearch}
        ></textarea>
        <button onClick={this.props.filter} className={styles.filterButton}>
          <img
            src="https://fontmeme.com/permalink/191202/17fcf227432bc2623f26e7080d898d8b.png"
            alt="disco-night-font"
            border="0"
          />
        </button>
      </header>
    );
  }
}

export default Header;
