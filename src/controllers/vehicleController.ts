import { Request, Response } from "express";
import Vehicle from "./../schemas/vehicle";
import app from "../app";

// - GET - /vehicles # returns all vehicles
export function getAllVehicles(req: Request, res: Response) {
  Vehicle.find()
    .then((vehicles) => {
      res.send(vehicles);
    })
    .catch((err) => {
      res.send(err.err);

      console.log(err.message);
    });
}

// - GET - /vehicle/{1} # returns all vehicles
export function getVehicle(req: Request, res: Response) {
  Vehicle.findById(req.params.id)
    .then((vehicle) => {
      res.send(vehicle);
    })
    .catch((err) => {
      res.send(err.err);

      console.log(err.message);
    });
}

// - POST - /vehicle # creates a new vehicle
export function createVehicle(req: Request, res: Response) {
  let vehicle = new Vehicle(req.body);

  vehicle
    .save()
    .then((vehicle) => {
      res.send(vehicle);
    })
    .catch((err) => {
      res.send(err.err);

      console.log(err.message);
    });
}

// - DELETE - /vehicle/{1} # deletes vehicle with id 1
export function deleteVehicle(req: Request, res: Response) {
  Vehicle.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("Delete successful");
    })
    .catch((err) => {
      res.send(err.err);

      console.log(err.message);
    });
}

// - PUT - /vehicle/{1} # updates vehicle with id 1
export function updateVehicle(req: Request, res: Response) {
  Vehicle.findByIdAndUpdate(req.params.id, req.body)
    .then((vehicle) => {
      res.send(vehicle);
    })
    .catch((err) => {
      res.send(err.err);

      console.log(err.message);
    });
}


