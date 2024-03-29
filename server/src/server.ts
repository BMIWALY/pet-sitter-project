import express from "express";
// import cors from 'cors';
// import dotenv from "dotenv";


async function init() {
    // dotenv.config();

    const app = express();
    const port = 4000;
    // app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    
  
    
    app.get("*", (req, res) => {
      res.status(404).send("Not found");
    });
  
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
}
  
init();
  