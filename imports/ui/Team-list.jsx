import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class TeamList extends Component {
	render() {
		return (
			<ListItem
				primaryText={this.props.person.nickName}
				leftAvatar={<Avatar src="city.jpg"/>}
				/>
			)
	}
}