import React, {Component} from 'react';
import {Card, CardMedia, CardText, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const styles = {
	chip: {
		margin: 4,

	},
	wrapper:{
		display: 'flex',
		flexWrapper: 'wrap',

	},
	button: {
		margin:12,
	}
}

export default class Person extends Component {
	render() {
			return (
			<Card>
				<CardMedia
			      overlay={<CardTitle title="Anthony " subtitle="Communication: 80 - awesomness 100 " />}
			    >
			    <img src="city.jpg" />
			   </CardMedia>
	
			    <CardText>
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
			      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
			      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
			    </CardText>
			    <CardActions>
			      
			    </CardActions>
			</Card>
			)
	}
}