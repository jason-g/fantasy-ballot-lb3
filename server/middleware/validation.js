// Input validation and sanitization middleware
module.exports = function() {
  return function validateInput(req, res, next) {
    // Basic input sanitization
    if (req.body) {
      // Remove potentially dangerous characters
      Object.keys(req.body).forEach(key => {
        if (typeof req.body[key] === 'string') {
          // Remove common injection patterns
          req.body[key] = req.body[key]
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+\s*=/gi, '');
        }
      });
    }

    // Sanitize query parameters
    if (req.query) {
      Object.keys(req.query).forEach(key => {
        if (typeof req.query[key] === 'string') {
          req.query[key] = req.query[key]
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+\s*=/gi, '');
        }
      });
    }

    next();
  };
};