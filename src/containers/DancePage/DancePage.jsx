import React, { Component } from "react";
import Dance from "../../Components/Dance";
import Header from "../../Components/Header";
import { styles } from "ansi-colors";

class DancePage extends Component {
  state = { events: [], eventType: "", filteredEvents: [], searchValue: "" };

  componentDidMount = () => {
    const fetchPromise = fetch(
      "https://www.googleapis.com/calendar/v3/calendars/nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com/events?key=AIzaSyAfRKHl1zzNeD-D89vcVf7n1Nt3PvB31Ao"
    );
    fetchPromise
      .then(response => {
        return response.json();
      })
      .then(events => {
        this.setState({ events: events.items, filteredEvents: events.items });
      });
  };

  checkitem = () => {
    return console.log(this.state.events);
  };

  searchType = event => {
    const searchValue = event.target.value;
    this.setState({ searchValue }, this.filterEvents);
  };

  filterEvents = () => {
    const filteredEvents = this.state.events.filter(event => {
      return event.summary.toLowerCase().includes(this.state.searchValue);
    });
    this.setState({ filteredEvents });
  };

  render() {
    return (
      <section className={styles.dancePageContainer}>
        <Header
          className={styles.header}
          search={this.searchType}
          setSearch={this.state.searchValue}
          filter={this.filterEvents}
        />
        {this.state.filteredEvents.map((item, id) => (
          <Dance dance={item} key={id} />
        ))}
      </section>
    );
  }
}

export default DancePage;
