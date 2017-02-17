import { Mongo } from 'meteor/mongo'


export const Persons = new Mongo.Collection('persons');

const PersonsSchema = new SimpleSchema({
	nickname: { type: String },
	team: { type: String},
	notes: { type: String, optional: true },
	communication: { type: Number, defaultValue: 0 },
});

Persons.attachSchema(PersonsSchema);