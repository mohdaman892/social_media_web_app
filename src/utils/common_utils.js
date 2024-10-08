const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const secretKey = process.env.JWT_SECRET;

async function generateToken(user) {
  // Payload could be user ID or other identifying information
  const payload = { id: user._id, email: user.email };

  // Options (optional) could include token expiration
  const options = { expiresIn: "1h" };

  // Generate the token
  const token = jwt.sign(payload, secretKey, options);

  return token;
}

async function authenticateJWT(req, res, next) {
  const authHeader = req.cookies.token;

  if (authHeader) {
    const token = authHeader;

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user; // Save user info in request object
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
}

async function decodeToken(req) {
  const token = req.cookies.token;
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded["id"];
  } catch (err) {
    console.error("Invalid token", err);
  }
}

module.exports = { generateToken, authenticateJWT, decodeToken };
