const userModel = require('../models/user');
const bcrypt = require('bcrypt');


async function handleSaveUser(req, res) {
    const { fname, lname, contactNo, whatsappNo, email, state, referral, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        const saltRounds = 10; 
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await userModel.create({
            fname,
            lname,
            contactNo,
            whatsappNo,
            email,
            state,
            referral,
            password: hashedPassword 
        });

        return res.status(201).json({
            message: 'User created successfully',
            user: {
                id: newUser._id,
                fname: newUser.fname,
                lname: newUser.lname,
                email: newUser.email,
                state: newUser.state,
                referral: newUser.referral
            } 
        });
    } catch (error) {
        console.error('Error saving user:', error);
        return res.status(500).json({ error: 'An error occurred while saving the user' });
    }
}

async function handleGetUsers(req, res) {
    try {

        const users = await userModel.find();
        if (users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        console.log(users)
        return res.status(200).json({ users });
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ error: 'An error occurred while fetching users' });
    }
}


module.exports = {
    handleSaveUser,
    handleGetUsers,
};
