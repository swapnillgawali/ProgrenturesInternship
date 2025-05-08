import express from 'express';
import { getCourse } from '../controller/courses.controller.js';

const courseRoute = express.Router()

courseRoute.get("/",getCourse);

export default courseRoute;