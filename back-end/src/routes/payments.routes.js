import { Router } from "express";
import { createSession } from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-checkout-session", createSession);
router.get("/success",(req, res)=> res.send("exito") );


export default router;
