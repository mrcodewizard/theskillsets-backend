const { db } = require('../models');
const scheduleCntrl = {
    addSchedule: async (req, res) => {
        try {
            const { studentid, schedule_date, note } = req.body
            const schedules = new db.schedules({ student_id: studentid, note, schedule_date });
            await schedules.save();
            return res.status(200).json({
                success: true,
                result: schedules,
                message: 'scheduled Successfully',
            });

        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
};


module.exports = scheduleCntrl;