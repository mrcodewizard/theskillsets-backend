const { db } = require('../models');
const studentsCntrl = {
    enrollStudents: async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            const Student = await db.students.findOne({ where: { email: body.email } })
            if (Student) {
                return res.status(400).json({
                    success: false,
                    message: 'Student Already registered',
                });
            }
            const students = new db.students(body);
            await students.save();
            return res.status(200).json({
                success: true,
                result: students,
                message: 'Successfully Registered Student',
            });

        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    updateStudent: async (req, res) => {
        const body = req.body
        const update = await db.students.update(body, {
            where: {
                id: req.params.id
            }

        })
        if (update[0] !== 1) {
            return res.status(400).json({
                success: false,
                message: 'Student not updated',
            });
        }
        const Student = await db.students.findByPk(Number(req.params.id))
        res.json({
            success: true,
            result: Student,
            message: 'Successfully Updated Student',
        });
    },
    getAllStudents: async (req, res) => {
        try {

            const Student = await db.students.findAll(
                {
                    include: [
                        {
                            model: db.orders,
                            include: {
                                model: db.ordersDetail,

                            }
                        },
                        {
                            model: db.schedules,
                        },
                        {
                            model: db.ratings,

                        }
                    ],
                    offset: 0, limit: 10,
                    order: [
                        ['fullname', 'DESC']]
                }
            )
            return res.status(200).json({
                success: true,
                result: Student,
                message: 'Successfully Registered Student',
            });

        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    getStudentById: async (req, res) => {
        try {
            console.log(req.params.id)
            const Student = await db.students.findOne(
                {
                    include: [
                        {
                            model: db.orders,
                            include: {
                                model: db.ordersDetail,
                                include: [{ model: db.courses, attributes: ['name', "short_name", "title", "language", "skilllevel"] }]
                            }
                        }
                        ,
                        {
                            model: db.payments,

                        },
                        {
                            model: db.schedules,
                        },
                        {
                            model: db.ratings,

                        }
                    ],

                    offset: 0, limit: 10,
                    where: { sid: req.params.id },
                    attributes: { exclude: 'password' },
                    order: [
                        ['fullname', 'DESC']]
                },

            )
            return res.status(200).json({
                success: true,
                result: [Student],
                message: 'Successfully get Student Data',
            });

        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    deleteStudentById: async (req, res) => {
        try {
            const srudent = await db.students.findByPk(Number(req.params.id))
            const deleted = await db.students.destroy({
                where: {
                    id: req.params.id
                }
            })
            if (deleted === 1) {
                return res.json({
                    success: true,
                    message: 'Successfully deleted srudent',
                });
            } else {
                return res.status(400).json({
                    success: true,
                    message: 'srudent not found',
                });
            }

        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
};


module.exports = studentsCntrl;