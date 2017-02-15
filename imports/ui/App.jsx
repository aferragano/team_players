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
	getPersons() {
		return [
		{
			_id: 1,
			nickName: "Mr. Fahrenheit"
		}
		];
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
						<div className="col s12 m5"> <TeamStats/>  </div>
						<div className="col s12 m5"> <TeamList/> </div>
					</div>
				</div>
			</MuiThemeProvider>
			)
	}
}