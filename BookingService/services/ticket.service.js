const VehicleDAO = require("../DAO/Vehicle.DAO");

const ScheduleService = {
  async checkVehicleSlot(vehicalId) {
    try {
      const vehicalData = await VehicleDAO.getVehicleById(vehicalId);

      if (!vehicalData) {
        return new Error("Khong tim thay Id xe");
      }

      
    } catch (error) {
      return error;
    }
  },
  createSchedule(data) {
    try {
      const { routeId, vehicleId, startTime, endTime } = data;
      // Kiểm tra nếu xe full ghế thì báo lỗi
    } catch (error) {
      return error;
    }
  },
};

module.exports = ScheduleService;
