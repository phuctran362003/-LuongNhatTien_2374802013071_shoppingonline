// npm install jsonwebtoken
const jwt = require('jsonwebtoken');
const MyConstants = require('./MyConstants');

const JwtUtil = {

  // Generate token
  genToken(payload) {
    return jwt.sign(
      payload, // ví dụ { username: 'admin' }
      MyConstants.JWT_SECRET,
      { expiresIn: MyConstants.JWT_EXPIRES }
    );
  },

  // Middleware check token
  checkToken(req, res, next) {
    let token =
      req.headers['x-access-token'] ||
      req.headers['authorization'];

    if (!token) {
      return res.json({
        success: false,
        message: 'Auth token is not supplied'
      });
    }

    // remove "Bearer "
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    jwt.verify(token, MyConstants.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      }
      req.decoded = decoded;
      next();
    });
  }
};

module.exports = JwtUtil;
