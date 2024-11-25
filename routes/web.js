import { Router } from "express";
import StudentController from "../controllers/homePage.js";

const router = Router();

router.get("/", StudentController.getAllDocument);
router.post("/", StudentController.createStudentDoc);
router.get("/edit/:id", StudentController.editStudent);
router.post("/update/:id", StudentController.updateStudentById);
router.post("/delete/:id", StudentController.deleteStudentById);

export default router;
