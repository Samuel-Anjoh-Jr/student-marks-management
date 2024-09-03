const dbconnection = require('../database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const passwordSalt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, passwordSalt); // Use async version
    await dbconnection.query(
      'INSERT INTO user(name, email, password) VALUES (?, ?, ?)',
      [name, email, hashPassword]
    );
    const [user_inserted] = await dbconnection.query(
      'SELECT * FROM user WHERE id = LAST_INSERT_ID()'
    );
    res.status(201).send({
      success: true,
      data: user_inserted,
      message: 'Saved Successfully',
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      data: [],
      message: 'Error on server: ' + error.stack,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [found] = await dbconnection.query(
      'SELECT * FROM user WHERE email = ?',
      [email]
    );

    if (found.length === 0) {
      return res.status(401).send({
        success: false,
        data: [],
        message: 'Wrong email',
      });
    }

    const user = found[0];
    const verifyPassword = await bcrypt.compare(password, user.password); // Use async version

    if (!verifyPassword) {
      return res.status(401).send({
        success: false,
        data: [],
        message: 'Wrong Password',
      });
    }

    res.status(200).send({
      success: true,
      data: found[0],
      message: 'Successfully Logged In',
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      data: [],
      message: 'Error on server: ' + error.stack,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const { id } = req.query;
    await dbconnection.query(
      'UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?',
      [name, email, hashPassword, id]
    );
    const [updateStudent] = await dbconnection.query(
      'SELECT * FROM user WHERE id = ?',
      [id]
    );
    res.status(200).send({
      success: true,
      data: updateStudent,
      message: 'Successfully Updated',
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      data: [],
      message: 'Error on server: ' + error.stack,
    });
  }
};