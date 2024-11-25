import studentModel from "../models/studentSchema.js";

class StudentController {
  static createStudentDoc = async (req, res) => {
    try {
      const { name, age, fee } = req.body;
      const studentDoc = new studentModel({
        name: name,
        age: age,
        fee: fee,
      });
      const saveDoc = await studentDoc.save();
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };

  static getAllDocument = async (req, res) => {
    try {
      const getStudentData = await studentModel.find();
      res.render("index", { getStudentData });
    } catch (error) {
      console.log(error);
    }
  };

  static editStudent = async (req, res) => {
    console.log(req.params.id);
    res.render("edit");
  };

  static updateStudentById = (req, res) => {
    res.redirect("/student");
  };

  static deleteStudentById = (req, res) => {
    res.redirect("/student");
  };
}

export default StudentController;
