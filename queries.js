'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// knex('restaurants')
//   .debug(true)
//   .then(console.log);

//  knex('restaurants')
//  .where('cuisine', 'Italian')
//  .then(console.log);

// knex('restaurants')
//   .where('cuisine', 'Italian')
//   .select('id', 'name')
//   .limit(10)
//   .then(console.log);

// knex('restaurants')
//   .count('cuisine')
//   .where('cuisine', 'Thai')
//   .then(console.log);

// knex('restaurants')
//   .count('cuisine')
//   .then(console.log);

// knex('restaurants')
// .count('cuisine')
// .where({cuisine: 'Thai', address_zipcode: '11372'})
// .then(console.log);

// knex('restaurants')
// .groupBy('name')
// .orderBy('name', 'asc')
// .select('name')
// .where({cuisine: 'Italian', address_zipcode: '10012'})
// .orWhere({cuisine: 'Italian', address_zipcode: '10013'})
// .orWhere({cuisine: 'Italian', address_zipcode: '10014'})
// .limit(5)
// .then(console.log);

// knex('restaurants').insert({name: 'Byte Cafe',
// borough: 'Brooklyn',
// cuisine: 'coffee',
// address_building_number: '123',
// address_street: 'Atlantic Avenue',
// address_zipcode: '11231'})
// .then(console.log);

// knex('restaurants').insert({name: 'Shenanigans',
// borough: 'Queens',
// cuisine: 'Breadsticks',
// address_building_number: '345',
// address_street: 'Farva Lane',
// address_zipcode: '10012'}, ['id', 'name'])
// .then(console.log);

// knex('restaurants').insert([
// {name: 'ABC',
// borough: 'Manhattan',
// cuisine: 'Coffee',
// address_building_number: '123',
// address_street: 'Farva Lane',
// address_zipcode: '10012'},
// {name: 'DEF',
// borough: 'Brooklyn',
// cuisine: 'Pizza',
// address_building_number: '345',
// address_street: 'Farva Lane',
// address_zipcode: '10013'},
// {name: 'GHI',
// borough: 'Queens',
// cuisine: 'Dessert',
// address_building_number: '456',
// address_street: 'Farva Lane',
// address_zipcode: '10014'}], ['id', 'name'])
// .then(console.log);

// knex('restaurants')
// .where({nyc_restaurant_id: '30191841'})
// .update({name: 'DJ Reynolds Pub and Restaurant'}, 'name')
// .then(console.log);

// knex('grades')
// .where({id: '10'})
// .del()
// .then(console.log);

knex('restaurants')
.where({id: '22'})
.del()
.then(console.log);
