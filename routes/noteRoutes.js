import express from "express";

import {
  createNotes,
  deleteNotes,
  editNotes,
  getAllNotes,
} from "../controllers/noteController.js";

const router = express.Router();

router.route("/").get(getAllNotes).post(createNotes);
router.route("/:id").patch(deleteNotes).delete(editNotes);

export default router;
