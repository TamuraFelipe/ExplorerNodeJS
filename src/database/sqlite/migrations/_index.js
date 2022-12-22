const sqliteConnection = require('..');

const createUsers = require('./_createUsers');

async function migrationRun(){
    const schemas = [
        createUsers
    ].join('');

    sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error));
}

module.exports = migrationRun;