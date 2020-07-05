import mongoose from "mongoose";

export interface IVehicle extends mongoose.Document {
  name: string;
  somethingElse?: number;
}

export const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  somethingElse: Number,
});

const Vehicle = mongoose.model<IVehicle>("Vehicle", vehicleSchema);
export default Vehicle;
