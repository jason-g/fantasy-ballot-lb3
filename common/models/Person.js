'use strict';

const senderAddress = 'fantasy-admin@vrballot.com';
const config = require('../../server/config.json');

module.exports = function(Person) {
  Person.observe('after save', function(ctx, next) {
    // ToDo: add verification hook
    next();
  });

  Person.on('resetPasswordRequest', function(user) {
    const url = 'http://' + config.host + ':' + config.port + '/reset-password';
    const html = 'Click <a href="' + url + '?access_token=' +
        user.accessToken.id + '">here</a> to reset your password';

    let options = {
      type: 'email',
      to: user.email,
      from: senderAddress,
      subject: 'Password reset request',
      redirect: '/verified',
      html: html,
      user: user,
    };
    //    debugger;
    Person.app.models.Email.sendVerifyEmail(options, function(err) {
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', user.email);
    });
  });
};
