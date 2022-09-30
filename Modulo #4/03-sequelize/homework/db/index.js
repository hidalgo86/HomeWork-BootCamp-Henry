const { Sequelize, Op, DataTypes } = require('sequelize');
const db = new Sequelize('postgres://postgres:galilea@localhost:5432/henry_sequelize', {
  logging: false,
});

const modelCharacter = require('./models/Character.js')(db, DataTypes);
const modelAbility = require('./models/Ability.js')(db, DataTypes);
const modelRole = require('./models/Role.js')(db, DataTypes);

module.exports = {
  ...db.models,
  db,
  Op
}