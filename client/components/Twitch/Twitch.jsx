import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
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
        {this.state.games.map((x) => {
          return (
            <div style={{width: '25%', display: 'inline-block', padding: '0.1em'}} key={x.game._id}>
              <Image alt={x.channels} src={x.game.box.small} />
              <p>{x.viewers}</p>
            </div>
          )
        })}
      </Col>
    );
  }
}

TwitchComponent.defaultProps = {
};

export default TwitchComponent;
