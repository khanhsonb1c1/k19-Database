const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  scheduleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Schedule",
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  customerId: {
    type: String,
    required: true,
  },
  phoneContact: {
    type: String,
    required: true,
  },
  // vehicleId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Vehicle",
  //   required: true,
  // },
  // seatName: {
  //   type: String,
  //   required: false,
  // },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = { Ticket };
