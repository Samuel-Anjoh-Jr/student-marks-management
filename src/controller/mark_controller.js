const dbconnection = require('../database');

exports.getMark = async(req, res) => {
    try {
        const mark = await dbconnection.query(
            'SELECT m.id,m.marks,s.name AS subject,a.name AS student FROM marks m LEFT JOIN subject s ON m.subjectid = s.id LEFT JOIN student a ON m.studentid = a.id'
        );
        console.log(mark);
        res.status(200).send({
            success: true,
            data: mark[0],
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

exports.saveMark = async(req, res) => {
    try {
        let {studentid, subjectid, marks} = req.body;
        const control_studentid = await dbconnection.query(
            'SELECT * FROM student WHERE id = ?', [studentid]
        );

        if(control_studentid[0].length===0){
            res.status(404).send({
                success: false,
                data: [],
                message: 'Student ID not found'
            });
        }else{
            const mark = await dbconnection.query(
                "INSERT INTO marks(studentid, subjectid, marks) VALUES(?, ?, ?)", [studentid, subjectid, marks]);
            res.status(201).send({
                success: true,
                data: mark,
                message: 'Successfully Saved'
            });
        }
        
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.updateMark = async(req, res) => {
    try {
        let {studentid, subjectid, marks} = req.body;
        let id = req.query.id;
        const mark = await dbconnection.query(
            "UPDATE marks SET studentid = ?, subjectid = ?, marks = ? WHERE id= ?",
             [studentid, subjectid, marks, id]
            );
        const updateMark = await dbconnection.query(
            "SELECT * FROM marks WHERE id = ?",
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateMark[0],
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

exports.deleteMark = async(req, res) => {
    try {
        let id = req.params.id;
        const mark = await dbconnection.query(
            "DELETE FROM marks WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: mark,
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