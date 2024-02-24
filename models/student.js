const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
  // name: { type: String, required: true },
  // middleName: { type: String },
  // title: { type: String, required: true },
  // gender: { type: String, required: true },
  // email: { type: String, required: true, unique: true },
  // phno: { type: Number, required: true, unique: true },
  // dept: { type: String, required: true },
  // dob: { type: Date, required: true },
  collegeId: { type: String, required: true, unique: true },
  // collegeId will also serve as addmission year
  // section: { type: String, required: true },
  // roll: { type: Number, unique: true },
  // regNo: { type: Number, unique: true },
  password: { type: String, required: true }
})

module.exports = mongoose.model('Students', studentSchema)
