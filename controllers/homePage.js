import studentModel from "../models/studentSchema.js";

class StudentController {
  static createStudentDoc = async (req, res) => {
    try {
      const { name, age, fee } = req.body;
      const studentDoc = new studentModel({
        name,
        age,
        fee,
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
    try {
      const { id } = req.params;
      const editStudentDoc = await studentModel.findById({ _id: id });

      res.render("edit", { editStudentDoc });
    } catch (error) {
      console.log(error);
    }
  };

  static updateStudentById = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, age, fee } = req.body;
      const editStudentDoc = await studentModel.findByIdAndUpdate(id, {
        name,
        age,
        fee,
      });
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };

  static deleteStudentById = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);

      const data = await studentModel.deleteOne({ _id: id });
      // const saveData = await deleteStudent.save();
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };
}

export default StudentController;
