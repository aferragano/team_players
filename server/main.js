import { Meteor } from 'meteor/meteor';
import { Persons } from '../imports/api/persons';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('persons', function(){
  	return Persons.find({});
  })
});
