import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { red500 } from 'material-ui/styles/colors';

export default class TeamList extends Component {
	updateCurrentPerson(person){
		this.props.updateCurrentPerson(person);
	}

	deletePerson(personId) {
		Meteor.call('deletePerson', personId, (error) => {
			if(error) {
        alert("Oups something went wrong: " + error.reason);
      } else {
        console.log("deleted.....")
      }
    });
	}
	render() {
		return (
			<ListItem
				primaryText={this.props.person.nickname}
				leftAvatar={<Avatar src="city.jpg"/>}
				rightIcon={<ActionDeleteForever hoverColor={red500} 
					onClick={this.deletePerson.bind(this, this.props.person._id)}/>}
				onClick={this.updateCurrentPerson.bind(this, this.props.person)}
				/>
			)
	}
}