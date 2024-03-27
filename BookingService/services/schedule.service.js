const ScheduleDAO = require('../DAO/schedule.DAO');
const VehicleDAO = require("../DAO/Vehicle.DAO");

const ScheduleService = {
  async checkVehicleIsReady(vehicalId, startTime) {
    try {
      const vehicalData = await VehicleDAO.getVehicleById(vehicalId);

      if (!vehicalData) {
        return new Error("Khong tim thay Id xe");
      }

      const scheduleDupplicate = vehicalData.schedules.find((e) => {
        e.endTime >= startTime;
      });

      if (scheduleDupplicate) {
        return new Error("Xe đã có lịch trình, vui lòng chọn thời gian khác");
      }

      return true;

    } catch (error) {
      return error;
    }
  },
  async createSchedule(data) {
    try {
      const { routeId, vehicleId, startTime, endTime } = data;
      // Kiểm tra nếu xe full ghế thì báo lỗi
      if (checkVehicleIsReady(vehicleId)) {
        const newSchedule = await ScheduleDAO.createSchedule(data);
        return newSchedule
      }
      return "Có gì đó sai sai"
      
    } catch (error) {
      return error;
    }
  },
};

module.exports = ScheduleService;
