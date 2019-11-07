const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep
}

function find() {
  return db('schemes')
}

function findById(id) {
  return db('schemes').where({ id }).first();
}

function findSteps(id) {
  return db('schemes')
    .where('schemes.id', id)
    .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')    
    .join('steps', 'schemes.id', 'steps.scheme_id')
}

function add(scheme) {
  return db('schemes').insert(scheme)
}

function update(changes, id) {
  return db('schemes').where({ id }).update(changes, id)
}

function remove(id) {
  return db('schemes').where({ id }).del()
}

function addStep(step, scheme_id) {
  newStep = {...step, scheme_id: scheme_id}
  return db('steps').insert(newStep)
}