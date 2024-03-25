const VehicleDAO = require('../DAO/vehicle.DAO');

const VehicleController = {
  async createVehicle(req, res) {
    try {
      const vehicleData = req.body;
      const newVehicle = await VehicleDAO.createVehicle(vehicleData);
      res.status(201).json(newVehicle);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getAllVehicles(req, res) {
    try {
      const vehicles = await VehicleDAO.getAllVehicles();
      res.status(200).json(vehicles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getVehicleById(req, res) {
    try {
      const vehicleId = req.params.id;
      const vehicle = await VehicleDAO.getVehicleById(vehicleId);
      if (!vehicle) {
        return res.status(404).json({ message: 'Không tìm thấy phương tiện' });
      }
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateVehicle(req, res) {
    try {
      const vehicleId = req.params.id;
      const updateData = req.body;
      const updatedVehicle = await VehicleDAO.updateVehicle(vehicleId, updateData);
      res.status(200).json(updatedVehicle);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteVehicle(req, res) {
    try {
      const vehicleId = req.params.id;
      await VehicleDAO.deleteVehicle(vehicleId);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = VehicleController;
