const dbconnection = require('../database');

exports.getSubject = async(req, res) => {
    try {
        const subject = await dbconnection.query('SELECT * FROM subject');
        res.status(200).send({
            success: true,
            data: subject[0],
            message: 'Success'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.saveSubject = async(req, res) => {
    try {
        let {name} = req.body;
        const subject = await dbconnection.query(
            "INSERT INTO subject(name) VALUES(?)", [name]);
        res.status(201).send({
            success: true,
            data: subject,
            message: 'Successfully Saved'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.updateSubject = async(req, res) => {
    try {
        let {name} = req.body;
        let id = req.query.id;
        const subject = await dbconnection.query(
            "UPDATE subject SET name = ? WHERE id= ?",
             [name,id]
            );
        const updateSubject = await dbconnection.query(
            "SELECT * FROM subject WHERE id = ?",
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateSubject[0],
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

exports.deleteSubject = async(req, res) => {
    try {
        let id = req.params.id;
        const subject = await dbconnection.query(
            "DELETE FROM subject WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: subject,
            message: 'Successfully Deleted '+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}