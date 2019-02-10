var path = require('path');

var app = require(path.resolve(__dirname, '../server'));
var ds = app.datasources.lbdb;
ds.automigrate('Account', function(err) {
  if (err) throw err;

  var accounts = [
    {
      email: 'noreply@email.com',
      createdAt: new Date(),
      lastModifiedAt: new Date()
    },
    {
      email: 'noreply1@email.com',
      createdAt: new Date(),
      lastModifiedAt: new Date()
    }
  ];
  var count = accounts.length;
  accounts.forEach(function(account) {
    app.models.Account.create(account, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});