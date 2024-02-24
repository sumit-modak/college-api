const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  middleName: { type: String },
  title: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dept: { type: String, required: true },
  dob: { type: Date, required: true },
  collegeId: { type: String, required: true, unique: true },
  joinDate: { type: Date, required: true, default: Date.now },
  leaveDate: { type: Date },
  deskNo: { type: Int, unique: true },
  isHOD: { type: Bool, required: true }
})

module.exports = mongoose.model('teachers', teacherSchema)

