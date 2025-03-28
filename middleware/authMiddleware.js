const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Not authorized to access this route",
        success: false,
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = userModel.findById(decoded.id);
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Not authorized to access this route",
        success: false,
      });
    }
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized to access this route", success: false });
  }
};
