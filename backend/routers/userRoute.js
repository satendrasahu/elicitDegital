import express from 'express'
const router = express.Router();
import {addUser, findSingleUser, findUser,deleteAllUser, deleteUser, updateUser} from '../controllers/index.js'
router.get("/",findUser);
router.get("/:id",findSingleUser);
router.post("/add",addUser);
router.delete("/remove/:id",deleteUser);
router.delete("/removeall",deleteAllUser);
router.patch("/update/:id",updateUser);

export default router