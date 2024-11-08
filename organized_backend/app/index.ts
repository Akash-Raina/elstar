import express from "express"
import cors from "cors";
import sales from "./routes//index"

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', sales)

app.listen(3000);