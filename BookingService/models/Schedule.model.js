const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
  routeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Route",
    required: true,
  },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
  ticketIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],
  status: {
    type: String,
    default: "1"
    // 1: còn chỗ
    // 2: hết chỗ  
  }
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = { Schedule };
