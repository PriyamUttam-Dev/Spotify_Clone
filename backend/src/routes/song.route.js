import { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.send("Song routes")
})

export default router;