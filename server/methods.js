import { Meteor } from  'meteor/meteor';
import { Persons } from '../imports/api/persons';

Meteor.methods({
	insertPerson(person){
		Persons.insert(person)
	},

	updatePerson(person) {
		Persons.update(person._id, 
			{ $set: person});
	},

	deletePerson(persoIdn) {
		Person.remove(personId);
	}
})