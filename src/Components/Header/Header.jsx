import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className={styles.header}>
        <h1>Do you love to dance?!</h1>
        <textarea
          name="search"
          id="search"
          className={styles.searchBar}
          placeholder="Search for an event"
          onChange={this.props.search}
          value={this.props.setSearch}
        ></textarea>
        <button onClick={this.props.filter} className={styles.filterButton}>
          Show me the dance
        </button>
      </header>
    );
  }
}

export default Header;
