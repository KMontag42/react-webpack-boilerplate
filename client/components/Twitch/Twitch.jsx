import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import _ from 'underscore';

class TwitchComponent extends Component {
  constructor() {
    super();
    this.state = { games: [] };
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/games/top'
    }).done((data) => {
      console.log(data);
      this.setState({games: _.map(data.top, (x) => { return x; })});
    });
    setInterval(() => {
      $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/games/top'
      }).done((data) => {
        this.setState({games: _.map(data.top, (x) => { return x; })});
      });
    }, 1000);
  }

  render() {
    return (
      <Col xs={12} sm={3}>
        <h4>Twitch</h4>
        <Row>
          {this.state.games.map((x) => {
            return (
              <Col xs={6} key={x.game._id}>
                <label>{x.game.name}</label>
                <p>{x.viewers}</p>
              </Col>
            )
          })}
        </Row>
      </Col>
    );
  }
}

TwitchComponent.defaultProps = {
};

export default TwitchComponent;
