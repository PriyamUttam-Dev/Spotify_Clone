import { Router } from "express";

const router = Router();

router.get("/", (req,res)=>{
    res.send("Admin Routes")
})

export default router;