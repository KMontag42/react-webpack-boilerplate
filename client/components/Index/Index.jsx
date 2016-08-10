import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap-15';
import { Hashtag } from 'react-twitter-widgets';
import Twitch from '../Twitch/Twitch';

class IndexComponent extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={3}>
            <h4>Twitter</h4>
            <Row>
              <Col xs={6}>
                <Hashtag hashtag="dota2"/>
              </Col>
              <Col xs={6}>
                <Hashtag hashtag="ti6"/>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={3}>
            <h4>Instagram</h4>
            <Row>
              <Col xs={6}>
                <p>#topic</p>
              </Col>
              <Col xs={6}>
                <p>#topic</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={3}>
            <h4>Facebook</h4>
            <Row>
              <Col xs={6}>
                <p>#topic</p>
              </Col>
              <Col xs={6}>
                <p>#topic</p>
              </Col>
            </Row>
          </Col>
          <Twitch/>
        </Row>
      </Grid>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
