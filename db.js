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
        repos.splice(index, 1);
        this.store();
    },
    update(index, article) {
        repos[index] = article;
        repos.splice(index, 1, article);
        this.store();
    }
}