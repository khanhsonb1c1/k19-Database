const { Schedule } = require("../models/Schedule.model");

const ScheduleDAO = {
  async createSchedule(scheduleData) {
    try {
      const newSchedule = await Schedule.create(scheduleData);
      return newSchedule;
    } catch (error) {
      console.error("Lỗi khi tạo lịch trình:", error);
      throw error;
    }
  },

  async getAllSchedules() {
    try {
      const schedules = await Schedule.find();
      return schedules;
    } catch (error) {
      throw new Error("Đã xảy ra lỗi khi truy vấn tất cả lịch trình");
    }
  },

  async getScheduleById(scheduleId) {
    try {
      const schedule = await Schedule.findById(scheduleId);
      return schedule;
    } catch (error) {
      console.error("Lỗi khi lấy thông tin lịch trình theo ID:", error);
      throw error;
    }
  },

  async updateSchedule(scheduleId, updateData) {
    try {
      const updatedSchedule = await Schedule.findByIdAndUpdate(
        scheduleId,
        updateData,
        { new: true }
      );
      return updatedSchedule;
    } catch (error) {
      console.error("Lỗi khi cập nhật lịch trình:", error);
      throw error;
    }
  },

  async deleteSchedule(scheduleId) {
    try {
      await Schedule.findByIdAndDelete(scheduleId);
    } catch (error) {
      console.error("Lỗi khi xóa lịch trình:", error);
      throw error;
    }
  },

  async getSchedulesByRouteIdAndTime(routeId, from, to) {
    try {
      const schedules = await Schedule.findAll({
        where: {
          routeId: routeId,
          startTime: { [Op.gt]: from },
          endTime: { [Op.lt]: to }
        }
      });
      return schedules;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = ScheduleDAO;
