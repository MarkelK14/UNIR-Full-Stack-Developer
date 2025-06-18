const Student = require('../models/students.model');

const getAll = async (req, res) => {
    const students = await Student.find();
    res.json(students);
}

const create = async (req, res) => {
    const newStudent = await Student.create(req.body);
    res.json(newStudent);
}

const edit = async (req, res) => {
    const { studentId } = req.params;
    const updatedStudent = await Student.findByIdAndUpdate(
        studentId, req.body, { new: true }
    );
    res.json(updatedStudent);
}

const remove = async (req, res) => {
    const { studentId } = req.params;
    const student = await Student.findByIdAndDelete(studentId);
    res.json(student);
}

module.exports = { getAll, create, edit, remove }