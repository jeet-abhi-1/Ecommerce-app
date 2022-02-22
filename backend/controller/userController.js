const User = require("../model/User");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


// registering user
exports.registerNewUser = async (req, res) => {
  try {
    let isUser = await User.find({ email: req.body.email , name: req.body.name });
    console.log(isUser);
    if (isUser.length >= 1) {
      return res.status(409).json({
        message: "email already in use"
      });
      
    }
    
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    let data = await user.save();
    res.status(201).json({ data });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

// login user 
exports.loginUser = async(req,res)=>{
    try {
      let findUser = await User.find({ email: req.body.email });
        if (findUser.length < 1) {
          res.json({ message: "Auth is failed" });
        }
        else {
          await bcrypt.compare(req.body.password, findUser[0].password,(err, result) => {
            if (err) {
              res.json({ message: "Auth is failed" });
            }  
            if (result) {
              const token = jwt.sign({ _id: findUser[0]._id, name: findUser[0].name, email: findUser[0].email},
                            "secret", { expiresIn: 60*60});
                            res.json({
                              message: "Auth successfull",
                              token: token,
                            });
                  }
                  else {
                    res.json({ message: "Auth is failed" });
                  }
            })
        }
    } catch (err) {
        res.json({error: err});
    }
  }


