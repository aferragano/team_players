import React, {Component, PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

//database collection 
import { Persons } from '../api/persons';

import Person from './Person';
import TeamStats from './Team-stats';
import TeamList from './Team-list';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		//setting up the state
		this.state = { persons: []};
	}
	renderPersons() {
    return this.props.persons.map((person) => (
      <TeamList key={person._id} person={person} />
    ));
  }
	render() {
		return (
			<MuiThemeProvider>
				<div className="container">
				<AppBar 
					title=" Team Application"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					showMenuIconButton={false}/ 
					>
					<div className="row">

						<div className="col s12 m7"> <Person/> </div>
						<div className="col s12 m5"> 
						<h2>Team List</h2> 
						<Link to='/new' className="waves-effect wave-light btn">Add</Link>
							<Divider/> 
								<List>
									{this.renderPersons()}
								</List>
						</div>
						<Divider/>
						<div className="col s12 m5"> <TeamStats/>  </div>
					</div>
				</div>
			</MuiThemeProvider>
			)
	}
}

App.propTypes = {
	persons: PropTypes.array.isRequired,
};

// export default createContainer(() => {
// 	Meteor.subscribe('persons');
// 	return {
// 		persons: Persons.find({}, {sort:{ name: 1}}).fetch(),
// 	};
// }, App)