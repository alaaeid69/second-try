import { Router } from "express";
import department from "../models/department.js";
import subject from "../models/subject.js";
const router =new Router();
router.get('/',(req,res) =>{
    res.render('subjects/all');


    
});
router.get('/create_department', async(req,res) =>{
    await department.create({
       name:'computer science',
       code:'cs', 
    });
    await department.create({
        name:'information teq',
        code:'it', 
     });
     await department.create({
        name:'information system',
        code:'is', 
     });
res.send('add');

});



export default router;