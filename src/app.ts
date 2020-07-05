import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import * as vehicleController from "./controllers/vehicleController";

const uri: string = "mongodb://127.0.0.1:27017/local";

mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true  
}, (err: any) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(`Successfully connected to MongoDB at ${uri}`);
  }
});

let app = express();

app.set("port", 3000);
app.use(cors());
app.use(bodyParser.json());

app.get("/health", (req: Request, res: Response) => res.send("up"));
app.get("/vehicles", vehicleController.getAllVehicles);
app.get("/vehicle/:id", vehicleController.getVehicle);
app.put("/vehicle/:id", vehicleController.updateVehicle);
app.delete("/vehicle/:id", vehicleController.deleteVehicle);
app.post("/vehicle", vehicleController.createVehicle);

app.get("/", (req: any, res: any) => {
    res.send("Hello world!");
});

app.listen(app.get("port"), () => {
    console.log("App is running! http://localhost:%d", app.get("port"));
});

export default app;