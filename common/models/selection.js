'use strict';

module.exports = function(Selection) {
 // on read force user
  Selection.observe('access', function limitToUser(ctx, next) {
    var accessToken = ctx.options && ctx.options.accessToken;
    var userId = accessToken && accessToken.userId;

    if (!userId) {
      // without connected user. proceed without hook
      return next();
    }
    if (!ctx.query.where) {
      ctx.query.where = {};
    }
    ctx.query.where.user_id = userId;
    next();
  });
  // on write inject user
  Selection.observe('before save', function limitToUser(ctx, next) {
    var accessToken = ctx.options && ctx.options.accessToken;
    var userId = accessToken && accessToken.userId;
    const globals = ctx.Model.app.models.global;
    globals.findOne({where: {setting: 'isLocked'}}, function(err, isLocked) {
      if (err) return next(err);
      let username = 'anonymous';
      if (isLocked.value == true) {
        err = new Error("Submissions are locked by the administrator");
        err.statusCode = 400;
        next(err);
      } else {
        const User = ctx.Model.app.models.User;
        // ToDo: This should be moved to a better location
        User.findById(accessToken.userId, function(err, user) {
          if (err) return next(err);
          username = user.username;
          if (!userId) {
            // without connected user. proceed without hook        
            err = new Error("Submissions require a valid user account");
            err.statusCode = 400;
            next(err);
            return next();
          } else {
            ctx.instance.user_id = userId;
            ctx.instance.username = username;
            next();
          }
        });
      }
    });
  });
};
