const Joi = require('joi');
const ValidationSchemas = {
    registerSchema: (req, res, next) => {
        // console.log(req.body)
        const schema = Joi.object({
            password: Joi.string().min(6).required(),
            fname: Joi.string().required(),
            lname: Joi.string().required(),
            username: Joi.string().required(),
            designation: Joi.string().required(),
            role: Joi.string().required(),
            active: Joi.number(),
            course: Joi.number(),
            category: Joi.number(),
            tag: Joi.number(),
            author: Joi.number(),
            blog: Joi.number(),
            staff: Joi.number(),
            member: Joi.number(),
            slider: Joi.number(),
            reports: Joi.number(),
            testimonials: Joi.number(),
        });
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };
        const { error, value } = schema.validate(req.body, options);
        if (error) {
            // next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
            console.log(error)
            return res.status(400).json({
                message: "Validation Failed",
                errors: error.details.map(x => x.message)
            })
        } else {
            req.body = value;
            next();
        }
    },
    loginSchema: (req, res, next) => {
        // console.log(req.body)
        const schema = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().min(6).required(),
        });
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };
        const { error, value } = schema.validate(req.body, options);
        if (error) {
            // next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
            console.log(error)
            return res.status(400).json({
                message: "Validation Failed",
                errors: error.details.map(x => x.message)
            })
        } else {
            req.body = value;
            next();
        }
    },
    studentSchema: (req, res, next) => {
        // console.log(req.body)
        const schema = Joi.object({
            cellno: Joi.number().min(6).required(),
            whatsapp: Joi.string(),
            fullname: Joi.string().required(),
            username: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
            city: Joi.string(),
            address: Joi.string(),
            note: Joi.string(),
        });
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };
        const { error, value } = schema.validate(req.body, options);
        if (error) {
            // next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
            console.log(error)
            return res.status(400).json({
                message: "Validation Failed",
                errors: error.details.map(x => x.message)
            })
        } else {
            const stdData = { ...value }
            stdData.active = 1
            stdData.isvalidcellno = 1
            if (stdData.whatsapp.toLowerCase() === "yes") {
                stdData.whatsapp = stdData.cellno
            }
            req.body = stdData;
            next();
        }
    },
}

module.exports = ValidationSchemas