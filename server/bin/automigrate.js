var server = require('../server');
var ds = server.dataSources.lbdb;
// var lbTables = ['Category', 'Entry', 'Selection'];
// var lbTables = ['global', 'Selection'];
var lbTables = ['Entry'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log(
    'Loopback tables [' + lbTables + '] created in ', ds.adapter.name
    );
  ds.disconnect();
});