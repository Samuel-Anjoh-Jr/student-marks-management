const dbconnection = require('../database');

exports.getStudent = async(req, res) => {
    try {
        const student = await dbconnection.query('SELECT * FROM student');
        res.status(200).send({
            success: true,
            data: student[0],
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

exports.saveStudent = async(req, res) => {
    try {
        let {name, sex} = req.body;
        const student = await dbconnection.query(
            "INSERT INTO student(name, sex) VALUES(?, ?)", [name, sex]);
        res.status(201).send({
            success: true,
            data: student,
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

exports.updateStudent = async(req, res) => {
    try {
        let {name, sex} = req.body;
        let id = req.query.id;
        const student = await dbconnection.query(
            "UPDATE student SET name = ?, sex = ? WHERE id= ?",
             [name, sex, id]
            );
        const updateStudent = await dbconnection.query(
            "SELECT * FROM student WHERE id = ?",
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

exports.deleteStudent = async(req, res) => {
    try {
        let id = req.params.id;
        const student = await dbconnection.query(
            "DELETE FROM student WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: student,
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