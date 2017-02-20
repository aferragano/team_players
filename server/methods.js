import { Meteor } from 'meteor/meteor';
import { Persons } from '../imports/api/persons';

Meteor.methods({
	insertPerson(person) {
		Persons.insert(person);
	}
})