import user from '../models/user.js';

const getUsers = async (req, res) => {
  const users = await user.find({});
  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const newUser = new user(req.body);
  if (!newUser.name || !newUser.age || !newUser.email) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  await newUser.save();
  return res.status(201).json(newUser);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await user.findById(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await user.findByIdAndUpdate(id, req.body, { new: true });
  return res.status(200).json(updatedUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await user.findByIdAndDelete(id);
  return res.status(204).send();
};

export { getUsers, createUser, getUser, updateUser, deleteUser };
