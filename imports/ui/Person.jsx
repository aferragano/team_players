import React, {Component} from 'react';
import {Card, CardMedia, CardText, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

export default class Person extends Component {
	render() {
    const person = this.props.person;
			return (
			<Card>
        <CardMedia
          overlay={<CardTitle title={ person.nickname } subtitle="Communication: 12 - fun: 8" />}
        >
          <img src="city.jpg" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                { person.communication }
              </Avatar>
              Communication
            </Chip>
            <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Kicking abilities
          </Chip>
       
       
         
          </div>
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
			)
	}
}