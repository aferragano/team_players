import React, {Component} from 'react';

export default class Edit extends Component {
	showTeamStats(){
		this.props.showTeamStats();
	}

	editPerson(e){
		e.preventDefault();

			let person = {
			_id: this.props.currentPerson._id,
			nickname: this.refs.nickname.value,
			team: this.refs.team.value,
			notes: this.refs.notes.value,
			communication: this.refs.communication.value,
			createdAt: new Date(),
		}
		
		Meteor.call('updatePerson', person, (error)=> {
			if(error) {
				alert("error occurred " + error.reason)
			} else {
				alert("person Updated ");
				this.showTeamStats();
			}
		});

		
	}
	render() {
		const currentPerson =this.props.currentPerson;
		return (
			<div className="row">
				<form className="col s12" onSubmit={this.editPerson.bind(this)}>
					<h3>Add Person</h3>
					<div className="row">
						<div className="input-field col s6">
							<input placeholder="Nickname" ref="nickname" type="text" className="validate" defaultValue={currentPerson.name}/>
						</div>
						<div className="input-field col s6">
							<input placeholder="Team" ref="team" type="text" className="validate" defaultValue={currentPerson.team}/>
						</div>						
					</div>

					<div className="row">
						<div className=" input-field col s6" >
						<h5>communication</h5>
							<select className="browser-default" ref="communication" defaultValue={currentPerson.communication}>
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