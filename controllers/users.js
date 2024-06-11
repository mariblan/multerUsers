import User from '../models/usersSchema.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    if (!user.length) {
      throw { statusCode: 404, message: 'User not found' };
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      throw { statusCode: 404, message: 'User not found' };
    }
    res.json(user);
  } catch (error) {}
};

export const addNewUser = async (req, res, next) => {
  const { name, email, image } = req.body;
  console.log(name, email, image);
  try {
    const image_url = req.file.path;
    console.log(image_url);
    const newUser = await User.create({
      name,
      email,
      image_url,
    });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { name, email, image_url } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, image_url },
      { new: true }
    );

    if (!updatedUser) {
      throw { statusCode: 404, message: 'User not found' };
    }
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.json({ message: 'User was deleted' });
  } catch (error) {
    next(error);
  }
};
