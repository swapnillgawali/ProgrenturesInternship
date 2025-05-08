import course from "../model/courses.js";

export const getCourse = async(req,res)=>{
    try {
        const cour = await course.find();
        res.status(200).json(cour);

    } catch (error) {
        console.log("Error",error);
        res.status(500).json(error);
    }
};