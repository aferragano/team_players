import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import { Persons } from '../api/persons'

export default class New extends Component {
	submitPerson(e){
		e.preventDefault();
		let person ={
			nickname: this.refs.nickname.value,
			team: this.refs.team.value,
			notes: this.refs.notes.value,
			communication: this.refs.communication.value,
			createdAt: new Date(),
			owner: Meteor.userId(),
		}

		Meteor.call('insertPerson',  person, (e) => {
			if(e) {
				alert("oops something went wrong here": e.reason);
			} else {
				alert("player added");
				browserHistory.push('/');
			} 
			})
	}

	
	render() {;
		return (
			<div className="row">
				<form className="col s12" onSubmit={this.submitPerson.bind(this)}>
					<h3>Add Person</h3>
					<div className="row">
						<div className="input-field col s6">
							<input placeholder="Nickname" ref="nickname" type="text" className="validate" />
						</div>
						<div className="input-field col s6">
							<input placeholder="Team" ref="team" type="text" className="validate" />
						</div>						
					</div>

					<div className="row">
						<div className=" input-field col s6" >
						<h5>communication</h5>
							<select className="browser-default" ref="communication">
								<option value="0"> 0 - sucks at it </option>
								<option value="1"> 1 - eh at it </option>
								<option value="2"> 2 - eh at it </option>
							</select>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<textarea placeholder="notes" ref="notes" type="text" className="materialize-textarea" />
						</div>
						<div className="input-field col s6">
							<button className="btn waves-effect waves-light" type="submit" name="action"> Submit
							<i className="material-icons right"> send</i></button>
							
						</div>						
					
					</div>

				</form>
			</div>
			)
	}
}