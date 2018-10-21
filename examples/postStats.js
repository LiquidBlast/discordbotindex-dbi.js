const { Client: dbiClient } = require('../');                                               // Declaring dbi.js
const Client = new dbiClient('< Your DBI Token Here >', { id: '< Your Bot\'s ID Here >' }); // Creating your DBI client
Client.postStats(11).then(console.log('Posted bot stats to DBI!'));                         // Posting your guild count to DBI and logging all results
