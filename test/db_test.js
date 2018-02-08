'use strict'

let db = require('../db');
db.add({ name: 'leo' });
console.log(db.list());