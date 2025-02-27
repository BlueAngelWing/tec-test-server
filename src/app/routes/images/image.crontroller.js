import { Router } from 'express';
import cors from 'cors';
import fs from'node:fs';



const router = Router();

import { createClient } from 'pexels';
const client = createClient('ITd0rqXGqGlQERv54s9QstJPCdksvVjiQd0V6jluz8JoyFnr97mSEsZ1');
const query = 'Nature';
router.use(cors())
router.get("/images", (req, res) => {

  client.photos.search({ query, per_page: 20 }).then(photos => {
    var urls = [];
    for (let i = 0; i < photos.photos.length; i++) {
      urls.push( {"id":i,
        "image":photos.photos[i].src.original,
        "completed":false})
    }
    res.set('Content-Type', ' application/json');
    res.json({ images: urls});
    });
  });

  router.get("/text", (req, res, next) => {
    
    

    const filename = req.query.filename;
    
      const data = fs.readFileSync(filename, 'utf8');
      fs.readFile('./' + filename, "utf8" ,(err, data) => {
        if (err) {
          next(err) // Pass errors to Express.
        } else {
          console.log(data)
          res.json({ 
            message:'Informacion obtenida de manera satisfactoria',
            text: data,
            show: true
          });
        }
      })

    });
    

  export default router;