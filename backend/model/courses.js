import mongoose from 'mongoose';

const courses = mongoose.Schema({
    course_name:String,
    internship_mode:String,
    internship_description:String,
    plan:String,
    status:String,
    stipend:String,
    image:String
})

const course = mongoose.model("course",courses);

export default course;