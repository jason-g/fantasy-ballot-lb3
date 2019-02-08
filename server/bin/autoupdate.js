var server = require('../server');
var ds = server.dataSources.lbdb;
// var lbTables = ['global', Category', 'Entry', 'Selection'];
var lbTables = ['Category'];
ds.autoupdate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
  ds.disconnect();
});