const senderAddress = 'fantasy-admin@vrballot.com';

module.exports = function(Email) {
  // send an email
  Email.sendVerifyEmail = function(options, cb) {
    Email.app.models.Email.send({
      to: options.to,
      from: options.from,
      subject: options.subject,
      html: options.html,
    },
    function(err) {
      if (err) {
        return console.log('> error sending password reset email');
      }
      console.log('> sending password reset email to:', options.to);
    });
  };
};
