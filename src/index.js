import express from "express";
import router from "./routes/routes.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



app.set('port', process.env.PORT || port);


app.use('/', router);


app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});