const jwt = require('jsonwebtoken');
const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
    try {
        res
        .status(200)
        .json( { message:
            "Welcome to the Home Page by using Auth Controller"
    });
    } catch (error) {
        console.log (error);
        res.status(500).json({ message: "Internal Server Error !!"});
    }
}

const about = async (req, res) => {
    try {
        res
        .status(200)
        .json( { message:
            "Welcome to the About Page by using Auth Controller."
    });
    } catch (error) {
        console.log (error);
        res.status(500).json({ message: "Internal Server Error !!"});
    }
}

// const register = async (req, res) => {
//     try {
//         console.log(req.body);
//         const {username, email, phone, password} = req.body;

//         const userExist = await User.findOne({ email: email });
//         if (userExist){
//             return res.status(400).json({ message: "User Already Exist!!"});
//         }
        
//         //hash password
//         // const salt = await bcrypt.genSalt(10);
//         // const hashedPassword = await bcrypt.hash(password, salt);
//         // console.log(hashedPassword);
//         const userCreated = await User.create({ username, email, phone, password });

//         res
//         .status(201)
//         .json({ 
//             message: "Registeration Successful", 
//             token: await userCreated.generateToken(),
//             userId: userCreated._id.toString(),
//     });
//     } catch (error) {
//         console.log (error);
//         res.status(500).json({ message: "Internal Server Error!!"});
//     }
// }

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        // Check if user already exists
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ message: "User Already Exist!" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const userCreated = await User.create({ username, email, phone, password: hashedPassword });

        // Generate a token
        const token = jwt.sign({ userId: userCreated._id }, 'your-secret-key', { expiresIn: '1h' });

        res.status(201).json({
            message: "Registration Successful",
            token: token,
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error!" });
    };
};

// const login = async (req,res) => {
//   try { 
//     const {email, password} = req.body;
//     const userExist = await User.findOne({ email });
//     if (!userExist) {
//       return res.status(400).json({ message: "User Not Exist!!"});
//     }
//     // const isMatch = await bcrypt.compare(password, userExist.password);
//     const isMatch = await userExist.comparePassword(password);
//     if(isMatch){
//         res
//         .status(200)
//         .json({ 
//             message: "Login Successful", 
//             token: await userExist.generateToken(),
//             userId: userExist._id.toString(),
//     });

//     }
//     else{
//         res
//        .status(400)
//        .json({ message: "Invalid Password!!"});
//     }

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal Server Error!!"});
//   }
// }

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "User Not Exist!" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, userExist.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password!" });
        }

        // Generate a token
        const token = jwt.sign({ userId: userExist._id }, 'your-secret-key', { expiresIn: '1h' });

        res.status(200).json({
            message: "Login Successful",
            token: token,
            userId: userExist._id.toString(),
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
};

module.exports = { home, about, register, login };