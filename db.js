'use strict'

const repos = require('./data');
//console.log(repos);
const fs = require('fs');


module.exports = {
    store() {
        fs.writeFileSync(__dirname + '/data.json', JSON.stringify(repos))
    },
    get(index) {
        return repos[index];
    },
    list() {
        return repos;
    },
    add(article) {
        repos.push(article);
        this.store();
    },
    del(index) {
        repos[index] = null;
        this.store();
    },
    update(index, article) {
        repos[index] = article;
        this.store();
    }
}