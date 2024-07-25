const dbconnection = require('../database');

exports.signup = async (req, res) => {
    try {
        let {name, email, password} = req.body;
    await dbconnection.query(
        'INSERT INTO user(name,email,password) VALUES (?,?,?)', [name, email, password]
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
        'SELECT * FROM user WHERE email = ? AND password = ?', [email, password]
    );
    if(user_found[0].length===0){
        res.status(401).send({
            success: false,
            data: [],
            message: "Wrong email or password"
        })
    }else{
        res.status(201).send({
            success: true,
            data: user_found[0],
            message: 'Saved Successfully'
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