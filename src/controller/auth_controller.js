const dbconnection = require('../database');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    try {
        let {name, email, password} = req.body;
        let hashPassword = await bcrypt.hash(password, 10);
        await dbconnection.query(
            'INSERT INTO user(name,email,password) VALUES (?,?,?)', [name, email, hashPassword]
        );
        const user_inserted = await dbconnection.query(
            'SELECT * FROM user WHERE id IN(SELECT MAX(id) FROM user)'
        );
        res.status(201).send({
            success: true,
            data: user_inserted[0],
            message: 'Saved Successfully'
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: "Error on server: "+error.stack
        })
    }
}

exports.signin = async (req, res) => {
    try {
        let {email, password} = req.body;
        const user_found = await dbconnection.query(
            'SELECT * FROM user WHERE email = ?', [email]
        );
        let user = user_found[0];
        let verifyPassword = await bcrypt.compare(password, user[0].password, (error, result) => {
            console.log(result)
        });
        console.log(verifyPassword);
        if(user_found[0].length===0){
            res.status(401).send({
                success: false,
                data: [],
                message: "Wrong email"
            })
        }else if(verifyPassword && user_found[0].length!=0){
                res.status(201).send({
                    success: true,
                    data: user_found[0],
                    message: 'Saved Successfully'
                });
        }else{
                res.status(401).send({
                    success: false,
                    data: [],
                    message: 'Wrong Password'
                });
            }
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: "Error on server: "+error.stack
        })
    }
}

exports.updateUser = async (req, res) =>{
    try {
        let {name, email, password} = req.body;
        let hashPassword = await bcrypt.hash(password, 10);
        let id = req.query.id;
        await dbconnection.query(
            "UPDATE user SET name = ?, email = ?, password = ? WHERE id= ?",
             [name, email, hashPassword, id]
            );
        const updateStudent = await dbconnection.query(
            "SELECT * FROM user WHERE id = ?",
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateStudent[0],
            message: 'Successfully Updated'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}