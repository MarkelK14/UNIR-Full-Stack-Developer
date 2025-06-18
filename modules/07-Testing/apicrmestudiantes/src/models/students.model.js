const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
    name: String,
    email: String,
    address: String,
    phone: String
}, {
    timestamps: true, versionKey: false
});

const Student = model('student', studentSchema);
module.exports = Student;