'use strict';

module.exports = function(Category) {
  Category.observe('access', function includeWinners(ctx, next) {
    /*
    console.log('Getting Categories');
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
        */
    next();
  });
  Category.afterRemote('**', function(ctx, user, next) {
    next();
  });
};
