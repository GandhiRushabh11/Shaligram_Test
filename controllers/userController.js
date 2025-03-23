const userModel = require("../model/userModel");

exports.handleUserRegister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields", success: false });
    }

    const createdUser = await userModel.create({ name, email, password });
    res.status(201).json({
      message: "User registered successfully",
      success: true,
      data: createdUser,
    });
  } catch (error) {
    res.status(500).json({
      error,
      success: false,
    });
  }
};

exports.handleUserLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields", success: false });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials", success: false });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials", success: false });
    }

    //Generating jwt token
    const token = user.getJWTToken();

    res.status(200).json({
      message: "User login successfully",
      success: true,
      token: token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error,
      success: false,
    });
  }
};

exports.handleGetAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}, { password: 0 });

    if (users.length == 0) {
      return res
        .status(200)
        .json({ message: "No Results Found", success: true });
    }

    res.status(200).json({
      message: "User fetched successfully",
      success: true,
      data: users,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error,
      success: false,
    });
  }
};

exports.handleUpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(
      { _id: id },
      { name },
      { new: true, runValidators: true, projection: { password: 0 } }
    );
    res.status(200).json({
      message: "User updated successfully",
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      error,
      success: false,
    });
  }
};
