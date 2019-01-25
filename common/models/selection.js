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

    if (!userId) {
      // without connected user. proceed without hook
      return next();
    }
    ctx.instance.user_id = userId;
    next();
  });
};
