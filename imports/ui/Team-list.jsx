import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';

export default class TeamList extends Component {
	render() {
		return (
			<ListItem
				primaryText={this.props.person.nickname}
				leftAvatar={<Avatar src="city.jpg"/>}
				/>
			)
	}
}