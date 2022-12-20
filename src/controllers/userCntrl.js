const { generateJwtToken } = require('../utils');
const { db } = require('../models');
const userCntrl = {
    register: async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            const user = await db.users.findOne({ where: { username: body.username } })
            if (user) {
                return res.status(400).json({
                    success: false,
                    message: 'User Already registered',
                });
            }
            const account = new db.users(body);
            await account.save();
            return res.status(200).json({
                success: true,
                result: account,
                message: 'Successfully Registered User',
            });

        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    login: async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            const user = await db.users.scope('withHash').findOne({ where: { username: body.username } })

            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: 'User not found',
                });
            } else if (user.password !== body.password) {
                return res.status(400).json({
                    success: false,
                    message: 'Incorrect Username or pasword',
                });
            }

            const token = generateJwtToken(user)
            res.json({
                success: true,
                result: {
                    token,
                    user: {
                        id: user.id,
                        fname: user.fname,
                        lname: user.lname,
                        username: user.username,
                        designation: user.designation,
                        role: user.role,
                        date: user.date,
                        active: user.active,
                        course: user.course,
                        category: user.category,
                        tag: user.tag,
                        author: user.author,
                        blog: user.blog,
                        staff: user.staff,
                        member: user.member,
                        slider: user.slider,
                        reports: user.reports,
                        testimonials: user.testimonials
                    }
                },
                message: 'Successfully login user',
            });

        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    getUserById: async (req, res) => {
        try {

            const user = await db.users.findOne({ where: { id: Number(req.params.id) } })
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: 'User not found',
                });
            }
            return res.status(200).json({
                success: true,
                result: user,
                message: 'Successfully Found User',
            });

        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    updateUser: async (req, res) => {
        try {
            const body = req.body
            const update = await db.users.update(body, {
                where: {
                    id: req.params.id
                }

            })
            if (update[0] !== 1) {
                return res.status(400).json({
                    success: false,
                    message: 'User not updated',
                });
            }
            const user = await db.users.findByPk(Number(req.params.id))
            console.log(user)
            const token = generateJwtToken(user)
            res.json({
                success: true,
                result: {
                    token,
                    user: {
                        id: user.id,
                        fname: user.fname,
                        lname: user.lname,
                        username: user.username,
                        designation: user.designation,
                        role: user.role,
                        date: user.date,
                        active: user.active,
                        course: user.course,
                        category: user.category,
                        tag: user.tag,
                        author: user.author,
                        blog: user.blog,
                        staff: user.staff,
                        member: user.member,
                        slider: user.slider,
                        reports: user.reports,
                        testimonials: user.testimonials
                    }
                },
                message: 'Successfully updated user',
            });

        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await db.users.findByPk(Number(req.params.id))
            const deleted = await db.users.destroy({
                where: {
                    id: req.params.id
                }
            })
            if (deleted === 1) {
                return res.json({
                    success: true,
                    message: 'Successfully deleted user',
                });
            } else {
                return res.status(400).json({
                    success: true,
                    message: 'User not found',
                });
            }



        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
};


module.exports = userCntrl;