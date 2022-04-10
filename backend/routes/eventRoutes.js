import express from "express";
import { getEventById, getEvents, reserveEventById } from "../controllers/eventController.js";

const router = express.Router()

//@desc Fetch all events
//@route GET /api/events
// @access Public
router.get('/', getEvents)

//@desc Fetch single event by id
//@route GET /api/events/:id
// @access Public
router.get('/:id', getEventById)

//@desc Fetch single event by id to select the events to book
//@route GET /api/events/reserve/:id
// @access Public
router.get('/reserve/:id', reserveEventById)

export default router