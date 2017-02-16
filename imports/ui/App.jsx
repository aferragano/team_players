import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Person from './Person';
import TeamStats from './Team-stats';
import TeamList from './Team-list';

export default class App extends Component {
	constructor(props) {
		super(props);

		//setting up the state
		
	}
	getPersons() {
		return [
		{
			_id: 1,
			nickName: "Mr. Fahrenheit"
		}
		];
	}
	renderPersons() {
    return this.getPersons().map((person) => (
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