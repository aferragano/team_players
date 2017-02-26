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
import AccountsWrapper from './AccountsWrapper';
import Edit from './EditPerson';

const tempPerson = {
	nickname: "Archer",
	team: "Archer",
	notes: "meow",
	communication: 3,
}


export class App extends Component {
	constructor(props) {
		super(props);

		//setting up the state
		this.state = {
		 	currentPerson: tempPerson,
			showEditForm: false };
		this.updateCurrentPerson = this.updateCurrentPerson.bind(this);
		this.showEditForm = this.showEditForm.bind(this);
		this.showTeamStats = this.showTeamStats.bind(this);
	}
	renderPersons() {
    return this.props.persons.map((person) => (
      <TeamList key={person._id} person={person} updateCurrentPerson={this.updateCurrentPerson} />
    ));
  }
  updateCurrentPerson(person) {
  	this.setState({
  		currentPerson: person,
  	});
  }
  showEditForm(){
  	this.setState({
  		showEditPerson: true,
  	});
  }
  showTeamStats(){
  	this.setState({
  		showEditPerson: false,
  	});
  }
  showForm(){
  	if(this.state.showEditPerson === true ){
  		return (<Edit currentPerson={this.state.currentPerson} showTeamStats={this.showTeamStats}/>);
  	} else {
  		return (<TeamStats/>)
  	}
  }
	render() {
		return (
			<MuiThemeProvider>
				<div className="container thing">
				<AppBar 
					title=" Team Application"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					showMenuIconButton={false} 
					>
					<AccountsWrapper />
					</AppBar>
					<div className="row">

						<div className="col s12 m7"> <Person person={this.state.currentPerson} showEditForm={this.showEditForm}/>  </div>
						<div className="col s12 m5"> 
						<h2>Team List</h2> 
						{this.props.children}
						<Link to='/new' className="waves-effect wave-light btn">Add</Link>
							<Divider/> 
								<List>
									{this.renderPersons()}
								</List>
						</div>
						<Divider/>
						<div className="col s12 m5"> {this.showForm()} </div>
					</div>
				</div>
			</MuiThemeProvider>
			)
	}
	getPeople
}

App.propTypes = {
	persons: PropTypes.array.isRequired,
};

export default createContainer(() => {
	Meteor.subscribe('persons');
	return {
		persons: Persons.find({}, {sort:{ nickname: 1}}).fetch(),
	};
}, App);

