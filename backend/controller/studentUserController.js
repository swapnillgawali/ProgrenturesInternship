import User from '../model/studentUser.js';

export const registerStudentUser = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, password } = req.body;

    const existingStudentUser = await User.findOne({ email });
    if (existingStudentUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const user = new User({ firstName, lastName, email, mobileNumber, password });
    await user.save();

    res.status(200).json({ message: "Registration successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const loginStudentUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
