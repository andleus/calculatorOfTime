import express, { Router } from "express";

const router = express.Router();

router.get('/', (req, res) => {
    try{

        console.log('Hola');
        res.send('Ah');

    }catch(error){
        console.log(`Error!!! ${error}`);
    }
})


export default router;