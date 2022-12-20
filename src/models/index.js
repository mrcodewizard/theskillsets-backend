const addToCartModel = require("./addToCartModel");
const authorsModel = require("./authorsModel");
const banksModel = require("./banksModel");
const blogCommentsModel = require("./blogCommentsModel");
const blogPostModel = require("./blogPostModel.");
const categoriesModel = require("./categoriesModel");
const ciSessionModel = require("./ciSessionModel");
const ciSessionsModel = require("./ciSessionsModel");
const contactUsFormModel = require("./contactUsFormModel");
const couponModel = require("./couponModel");
const coursesModel = require("./coursesModel");
const coursesSectionsModel = require("./coursesSectionsModel");
const courseTableModel = require("./courseTableModel");
const courseTagsModel = require("./courseTagsModel");
const courseViewsModel = require("./courseViewsModel");
const emailTemplatesModel = require("./emailTemplatesModel");
const fbUsersModel = require("./fbUsersModel");
const freeCoursesModel = require("./freeCoursesModel");
const googleUsersModel = require("./googleUsersModel");
const mediaModel = require("./mediaModel");
const orderFormModel = require("./orderFormModel");
const ordersDetailModel = require("./ordersDetailModel");
const ordersModel = require("./ordersModel");
const pagesModel = require("./pagesModel");
const paymentsModel = require("./paymentsModel");
const postCategoriesModel = require("./postCategoriesModel");
const postTagsModel = require("./postTagsModel");
const quizesModel = require("./quizesModel");
const quizOptionsModel = require("./quizOptionsModel");
const quizQuestionsModel = require("./quizQuestionsModel");
const quizTakenModel = require("./quizTakenModel");
const ratingsModel = require("./ratingsModel");
const repliesModel = require("./repliesModel");
const reportOptionsModel = require("./reportOptionsModel");
const reportsModel = require("./reportsModel");
const rtgItemsModels = require("./rtgItemsModels");
const rtgUsersModel = require("./rtgUsersModel");
const s3MediaModel = require("./s3MediaModel");
const schedulesModel = require("./schedulesModel");
const sendEmailsModel = require("./sendEmailsModel");
const sendsmsModel = require("./sendsmsModel");
const settingsModel = require("./settingsModel");
const slidesModel = require("./slidesModel");
const smsLogsModel = require("./smsLogsModel");
const smsTemplatesModel = require("./smsTemplatesModel");
const statusMetersModel = require("./statusMetersModel");
const studentProfileModel = require("./studentProfileModel");
const studentSettingsModel = require("./studentSettingsModel");
const studentsModel = require("./studentsModel");
const tagModel = require("./tagModel");
const takeQuizModel = require("./takeQuizModel");
const takeThisCourseModel = require("./takeThisCourseModel");
const testimonialsModel = require("./testimonialsModel");
const twUsersModel = require("./twUsersModel");
const usersModel = require("./usersModel");
const wishlistModel = require("./wishlistModel");
const db = {}
const DataBaseSchemas = (sequelize) => {

    db.addToCart = addToCartModel(sequelize)
    db.authors = authorsModel(sequelize)
    db.banks = banksModel(sequelize)
    db.blogComments = blogCommentsModel(sequelize)
    db.blogPost = blogPostModel(sequelize)
    db.categories = categoriesModel(sequelize)
    db.ciSession = ciSessionModel(sequelize)
    db.ciSessions = ciSessionsModel(sequelize)
    db.contactUsForm = contactUsFormModel(sequelize)
    db.coupon = couponModel(sequelize)
    db.courses = coursesModel(sequelize)
    db.coursesSections = coursesSectionsModel(sequelize)
    db.courseTable = courseTableModel(sequelize)
    db.courseTags = courseTagsModel(sequelize)
    db.courseViews = courseViewsModel(sequelize)
    db.emailTemplates = emailTemplatesModel(sequelize)
    db.fbUsers = fbUsersModel(sequelize)
    db.freeCourses = freeCoursesModel(sequelize)
    db.googleUsers = googleUsersModel(sequelize)
    db.media = mediaModel(sequelize)
    db.orderForm = orderFormModel(sequelize)
    db.ordersDetail = ordersDetailModel(sequelize)
    db.orders = ordersModel(sequelize)
    db.pages = pagesModel(sequelize)
    db.payments = paymentsModel(sequelize)
    db.postCategories = postCategoriesModel(sequelize)
    db.postTags = postTagsModel(sequelize)
    db.quizes = quizesModel(sequelize)
    db.quizOptions = quizOptionsModel(sequelize)
    db.quizQuestions = quizQuestionsModel(sequelize)
    db.quizTaken = quizTakenModel(sequelize)
    db.ratings = ratingsModel(sequelize)
    db.replies = repliesModel(sequelize)
    db.reportOptions = reportOptionsModel(sequelize)
    db.reports = reportsModel(sequelize)
    db.rtgItemsModels = rtgItemsModels(sequelize)
    db.rtgUsers = rtgUsersModel(sequelize)
    db.s3Media = s3MediaModel(sequelize)
    db.schedules = schedulesModel(sequelize)
    db.sendEmails = sendEmailsModel(sequelize)
    db.sendsms = sendsmsModel(sequelize)
    db.settings = settingsModel(sequelize)
    db.slides = slidesModel(sequelize)
    db.smsLogs = smsLogsModel(sequelize)
    db.smsTemplates = smsTemplatesModel(sequelize)
    db.statusMeters = statusMetersModel(sequelize)
    db.studentProfile = studentProfileModel(sequelize)
    db.studentSettings = studentSettingsModel(sequelize)
    db.students = studentsModel(sequelize)
    db.tag = tagModel(sequelize)
    db.takeQuiz = takeQuizModel(sequelize)
    db.takeThisCourse = takeThisCourseModel(sequelize)
    db.testimonials = testimonialsModel(sequelize)
    db.twUsers = twUsersModel(sequelize)
    db.users = usersModel(sequelize)
    db.wishlist = wishlistModel(sequelize)
    // addToCart Relations
    db.students.hasMany(db.addToCart, { foreignKey: 'userid' })
    db.addToCart.belongsTo(db.students, { foreignKey: 'userid' })
    db.courses.hasMany(db.addToCart, { foreignKey: 'courseid' })
    db.addToCart.belongsTo(db.courses, { foreignKey: 'courseid' })
    // authors Relations
    db.users.hasMany(db.authors, { foreignKey: 'by' })
    db.authors.belongsTo(db.users, { foreignKey: 'by' })
    // banks Relations
    db.users.hasMany(db.banks, { foreignKey: 'added_by_id' })
    db.banks.belongsTo(db.users, { foreignKey: 'added_by_id' })
    // blogComments Relations
    db.users.hasMany(db.blogComments, { foreignKey: 'user_id' })
    db.blogComments.belongsTo(db.users, { foreignKey: 'user_id' })
    db.blogPost.hasMany(db.blogComments, { foreignKey: 'blog_id' })
    db.blogComments.belongsTo(db.blogPost, { foreignKey: 'blog_id' })
    // blogPost Relations
    db.users.hasMany(db.blogPost, { foreignKey: 'addby' })
    db.blogPost.belongsTo(db.users, { foreignKey: 'addby' })
    // categories Relations
    db.users.hasMany(db.categories, { foreignKey: 'by' })
    db.categories.belongsTo(db.users, { foreignKey: 'by' })
    // courses Relations
    db.categories.hasMany(db.courses, { foreignKey: 'catid' })
    db.courses.belongsTo(db.categories, { foreignKey: 'catid' })
    db.tag.hasMany(db.courses, { foreignKey: 'tagid' })
    db.courses.belongsTo(db.tag, { foreignKey: 'tagid' })
    db.users.hasMany(db.courses, { foreignKey: 'authid' })
    db.courses.belongsTo(db.users, { foreignKey: 'authid' })
    db.users.hasMany(db.courses, { foreignKey: 'by' })
    db.courses.belongsTo(db.users, { foreignKey: 'by' })
    // coursesSections Relations
    db.courses.hasMany(db.coursesSections, { foreignKey: 'courseid' })
    db.coursesSections.belongsTo(db.courses, { foreignKey: 'courseid' })
    db.users.hasMany(db.coursesSections, { foreignKey: 'by' })
    db.coursesSections.belongsTo(db.users, { foreignKey: 'by' })
    // courseTable Relations
    db.courses.hasMany(db.courseTable, { foreignKey: 'courseid' })
    db.courseTable.belongsTo(db.courses, { foreignKey: 'courseid' })
    db.users.hasMany(db.courseTable, { foreignKey: 'by' })
    db.courseTable.belongsTo(db.users, { foreignKey: 'by' })
    db.users.hasMany(db.coursesSections, { foreignKey: 'sectionid' })
    db.courseTable.belongsTo(db.coursesSections, { foreignKey: 'sectionid' })
    // courseTags Relations
    db.courses.hasMany(db.courseTags, { foreignKey: 'course_id' })
    db.courseTags.belongsTo(db.courses, { foreignKey: 'course_id' })
    db.tag.hasMany(db.courseTags, { foreignKey: 'tag_id' })
    db.courseTags.belongsTo(db.tag, { foreignKey: 'tag_id' })
    // courseViews Relations
    db.courses.hasMany(db.courseViews, { foreignKey: 'course_id' })
    db.courseViews.belongsTo(db.courses, { foreignKey: 'course_id' })

    db.users.hasMany(db.courseViews, { foreignKey: 'user_id' })
    db.courseViews.belongsTo(db.users, { foreignKey: 'user_id' })
    // freeCourses Relations
    db.courses.hasMany(db.freeCourses, { foreignKey: 'courseid' })
    db.freeCourses.belongsTo(db.courses, { foreignKey: 'courseid' })
    db.users.hasMany(db.freeCourses, { foreignKey: 'by' })
    db.freeCourses.belongsTo(db.users, { foreignKey: 'by' })
    db.coursesSections.hasMany(db.freeCourses, { foreignKey: 'sectionid' })
    db.freeCourses.belongsTo(db.coursesSections, { foreignKey: 'sectionid' })
    // orderForm Relations
    db.courses.hasMany(db.orderForm, { foreignKey: 'sectionid' })
    db.orderForm.belongsTo(db.courses, { foreignKey: 'sectionid' })
    // ordersDetail Relations
    db.orders.hasOne(db.ordersDetail, { sourceKey: 'orderno', foreignKey: 'orderid' })
    db.ordersDetail.belongsTo(db.orders, { foreignKey: 'orderid', targetKey: 'orderno' })
    db.courses.hasOne(db.ordersDetail, { foreignKey: 'courseid' })
    db.ordersDetail.belongsTo(db.courses, { foreignKey: 'courseid' })
    // orders Relations
    db.courses.hasMany(db.orders, { foreignKey: 'courseid' })
    db.orders.belongsTo(db.courses, { foreignKey: 'courseid' })
    db.students.hasMany(db.orders, { foreignKey: 'studentid' })
    db.orders.belongsTo(db.students, { foreignKey: 'studentid' })
    // payments Relations
    db.users.hasMany(db.payments, { foreignKey: 'added_by' })
    db.payments.belongsTo(db.users, { foreignKey: 'added_by' })
    db.students.hasMany(db.payments, { foreignKey: 'sid' })
    db.payments.belongsTo(db.students, { foreignKey: 'sid' })
    // postCategories Relations
    db.blogPost.hasMany(db.postCategories, { foreignKey: 'postid' })
    db.postCategories.belongsTo(db.blogPost, { foreignKey: 'postid' })
    db.categories.hasMany(db.postCategories, { foreignKey: 'categoryid' })
    db.postCategories.belongsTo(db.categories, { foreignKey: 'categoryid' })
    // postTags Relations
    db.blogPost.hasMany(db.postTags, { foreignKey: 'postid' })
    db.postTags.belongsTo(db.blogPost, { foreignKey: 'postid' })
    db.tag.hasMany(db.postTags, { foreignKey: 'tagid' })
    db.postTags.belongsTo(db.tag, { foreignKey: 'tagid' })
    // quizes Relations
    db.courses.hasMany(db.quizes, { foreignKey: 'course_id' })
    db.quizes.belongsTo(db.courses, { foreignKey: 'course_id' })
    // quizOptions Relations
    db.quizes.hasMany(db.quizOptions, { foreignKey: 'quiz_id' })
    db.quizOptions.belongsTo(db.quizes, { foreignKey: 'quiz_id' })
    db.quizQuestions.hasMany(db.quizOptions, { foreignKey: 'question_id' })
    db.quizOptions.belongsTo(db.quizQuestions, { foreignKey: 'question_id' })
    // quizQuestions Relations
    db.quizes.hasMany(db.quizQuestions, { foreignKey: 'quiz_id' })
    db.quizQuestions.belongsTo(db.quizes, { foreignKey: 'quiz_id' })
    // quizTaken Relations
    db.quizes.hasMany(db.quizTaken, { foreignKey: 'take_quiz_id' })
    db.quizTaken.belongsTo(db.quizes, { foreignKey: 'take_quiz_id' })
    // ratings Relations
    db.students.hasMany(db.ratings, { foreignKey: 'user_id' })
    db.ratings.belongsTo(db.students, { foreignKey: 'user_id' })
    db.courses.hasMany(db.ratings, { foreignKey: 'course_id' })
    db.ratings.belongsTo(db.courses, { foreignKey: 'course_id' })
    // replies Relations
    db.blogComments.hasMany(db.replies, { foreignKey: 'comment_id' })
    db.replies.belongsTo(db.blogComments, { foreignKey: 'comment_id' })
    db.blogPost.hasMany(db.replies, { foreignKey: 'blog_id' })
    db.replies.belongsTo(db.blogPost, { foreignKey: 'blog_id' })
    db.users.hasMany(db.replies, { foreignKey: 'user_id' })
    db.replies.belongsTo(db.users, { foreignKey: 'user_id' })
    // reports Relations
    db.reportOptions.hasMany(db.reports, { foreignKey: 'report_id' })
    db.reports.belongsTo(db.reportOptions, { foreignKey: 'report_id' })
    db.courses.hasMany(db.reports, { foreignKey: 'course_id' })
    db.reports.belongsTo(db.courses, { foreignKey: 'course_id' })
    db.students.hasMany(db.reports, { foreignKey: 'user_id' })
    db.reports.belongsTo(db.students, { foreignKey: 'user_id' })
    db.statusMeters.hasMany(db.reports, { foreignKey: 'report_status' })
    db.reports.belongsTo(db.statusMeters, { foreignKey: 'report_status' })

    // schedules Relations
    db.students.hasMany(db.schedules, { foreignKey: 'student_id' })
    db.schedules.belongsTo(db.students, { foreignKey: 'student_id' })
    db.users.hasMany(db.schedules, { foreignKey: 'scheduled_by' })
    db.schedules.belongsTo(db.users, { foreignKey: 'scheduled_by' })
    // smsLogs Relations
    db.smsTemplates.hasMany(db.smsLogs, { foreignKey: 'templateid' })
    db.smsLogs.belongsTo(db.smsTemplates, { foreignKey: 'templateid' })
    // // studentProfile Relations
    // db.users.hasMany(db.smsLogs, { foreignKey: 'templateid' })
    // db.studentProfile.belongsTo(db.users, { foreignKey: 'scheduled_by' })
    // tag Relations
    db.users.hasMany(db.tag, { foreignKey: 'by' })
    db.tag.belongsTo(db.users, { foreignKey: 'by' })
    // takeQuiz Relations
    db.users.hasMany(db.takeQuiz, { foreignKey: 'by' })
    db.takeQuiz.belongsTo(db.users, { foreignKey: 'by' })
    db.quizes.hasMany(db.takeQuiz, { foreignKey: 'quiz_id' })
    db.takeQuiz.belongsTo(db.quizes, { foreignKey: 'quiz_id' })
    db.quizQuestions.hasMany(db.takeQuiz, { foreignKey: 'question_no' })
    db.takeQuiz.belongsTo(db.quizQuestions, { foreignKey: 'question_no' })
    // takeThisCourse Relations
    db.courses.hasMany(db.takeThisCourse, { foreignKey: 'courseid' })
    db.takeThisCourse.belongsTo(db.courses, { foreignKey: 'courseid' })
    // testimonials Relations
    db.courses.hasMany(db.testimonials, { foreignKey: 'courseid' })
    db.testimonials.belongsTo(db.courses, { foreignKey: 'courseid' })
    // wishlist Relations
    db.courses.hasMany(db.wishlist, { foreignKey: 'courseid' })
    db.wishlist.belongsTo(db.courses, { foreignKey: 'courseid' })
    db.users.hasMany(db.wishlist, { foreignKey: 'uid' })
    db.wishlist.belongsTo(db.users, { foreignKey: 'uid' })
}

module.exports = { DataBaseSchemas, db }
