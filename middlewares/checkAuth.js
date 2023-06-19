const CustomError = require("../models/customError");
const { verifyToken } = require("../utils/verifyToken");

const checkAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    //console.log({ authorization });
    //'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODRiZWJmM2NlODk5ZmU4OTQzOTI3ZSIsImlhdCI6MTY4NjQyNzczMCwiZXhwIjoxNjg2NTE0MTMwfQ.3-OYMn7lqG_YqBhv3eVip1zqYy_d4c6hgkHFTPAwlBg'

    const token = authorization && authorization.split(" ").pop(); // se queda con el token sin bearer

    if (!token) {
      throw new CustomError("Not authenticated", 401);
      // If token is not present, return a 401 (Unauthorized) response
      //return res.status(401).json({ message: "Unauthorized" });
    }
    const tokenData = await verifyToken(token);
    // Assuming verifyToken is a function that verifies the token

    if (!tokenData) {
      console.log("el token no es valido");
      throw new CustomError("Not authenticated", 401);
      // If token is not valid, return a 401 (Unauthorized) response
      //return res.status(401).json({ message: "Unauthorized" });
    }

    req.token = tokenData;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkAuth,
};
