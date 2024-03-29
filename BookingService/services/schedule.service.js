const ScheduleDAO = require('../DAO/schedule.DAO');
const VehicleDAO = require("../DAO/Vehicle.DAO");
// const { client, TIME_LIMIT } = require("../redis/init.redis");

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

 async getSchedule(filter) {
  try {
    let from = 0;
    let to = 9999999999;

    if (filter && filter.from) {
      from = filter.from;
    }

    if (filter && filter.to) {
      to = filter.to;
    }

    let schedules;
    if (filter && filter.routeId) {
      schedules = await ScheduleDAO.getSchedulesByRouteIdAndTime(filter.routeId, from, to);
    } else {
      schedules = await ScheduleDAO.getAllSchedules();
    }

    return schedules;
  } catch (error) {
    throw error;
  }
}
};

module.exports = ScheduleService;
