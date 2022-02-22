const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    console.log(token);
    const decoded = jwt.verify(token, "secret");
    req.userData = decoded;
    // console.log(req.userData);
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Authentification Failed"
    });
  }
};



// module.exports = (req,res,next)=>{
//         const token = req.body.token || req.query.token || req.headers["x-access-token"];
      
//         if (!token) {
//           return res.status(403).send("A token is required for authentication");
//         }
//         try {
//           const decoded = jwt.verify(token,"secret");
//           req.user = decoded;
//         } catch (err) {
//           return res.status(401).send("Invalid Token");
//         }
//         return next();
//       };
