var server = require('./server');
var ds = server.dataSources.lbdb;
//var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
var lbTables = ['Person', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log(
    'Loopback tables [' + lbTables + '] created in ', ds.adapter.name
    );
  ds.disconnect();
});