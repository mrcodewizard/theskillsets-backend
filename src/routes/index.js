const express = require('express');
const router = express.Router();
const ValidationSchemas = require('../schemas/schemas');
const userCntrl = require('../controllers/userCntrl');
const studentsCntrl = require('../controllers/studentsCntrl');
const Authorize = require('../_middleware/authorize');
const scheduleCntrl = require('../controllers/scheduleCntrl');
// User Routes
router.post('/register', ValidationSchemas.registerSchema, userCntrl.register);
router.post("/login", ValidationSchemas.loginSchema, userCntrl.login)
router.route("/user/:id").get(userCntrl.getUserById).patch(Authorize, userCntrl.updateUser).delete(Authorize, userCntrl.deleteUser)
// =========================== Student Routes
router.post("/enrollstudent", Authorize, ValidationSchemas.studentSchema, studentsCntrl.enrollStudents)
router.get("/getallstudents", Authorize, studentsCntrl.getAllStudents)
router.route("/student/:id").patch(Authorize, studentsCntrl.updateStudent).get(Authorize, studentsCntrl.getStudentById).delete(Authorize, studentsCntrl.deleteStudentById)

// =========================== Schedule Routes
router.post("/addschedule", Authorize, scheduleCntrl.addSchedule)

module.exports = router;