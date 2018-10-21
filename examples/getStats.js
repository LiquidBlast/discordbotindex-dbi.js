const { getStats } = require('../');                              // Declaring dbi.js
getStats('477942073073336320').then(stats => console.log(stats)); // Get a bot's stats and log them
