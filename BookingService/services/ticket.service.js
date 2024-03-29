const VehicleDAO = require("../DAO/Vehicle.DAO");
const TicketDAO = require("../DAO/Ticket.DAO");
const ScheduleDAO = require("../DAO/schedule.DAO");
const { HOST_USER_API_SERVICE } = require("../config/API.config");
const { Schedule } = require("../models/Schedule.model");

const TicketService = {
  async createTicket(data) {
    try {
      const { scheduleId, price, customerId, phoneContact } = data;

      const schedule = await ScheduleDAO.getScheduleById(scheduleId);
      if (!schedule) {
        return new Error("Khong co schedule");
      }

      const vehicleTotalSlot = schedule.vehicleId.totalSlot;

      const unavailableSlot = schedule.ticketIds.length;

      // Kiểm tra nếu xe full ghế thì báo lỗi, nếu còn chỗ thì tạo vé, nếu còn slot cuối cùng thì báo lịch trình đó hết vé

      if (vehicleTotalSlot > unavailableSlot) {
        const ticketData = await TicketDAO.createTicket({
          scheduleId,
          price,
          customerId,
          phoneContact,
        });

        // Lấy ra schedule cần cập nhật
        const schedule = await Schedule.findById(scheduleId);

        // Thêm ticketId mới vào trường ticketIds của schedule
        schedule.ticketIds.push(ticketData._id);

        // Lưu cập nhật vào MongoDB
        await schedule.save();

        const slotCheck = unavailableSlot + 1;

        if (vehicleTotalSlot == slotCheck) {
          await ScheduleDAO.updateSchedule(scheduleId, {
            status: "2",
          });
        }
        return ticketData;
      } else return new Error("Xe hết chỗ");
    } catch (error) {
      return new Error(error);
    }
  },

  async getTicketInfo(ticketId) {
    try {
      const ticket = await TicketDAO.getTicketById(ticketId);
      const user = await fetch(
        `${HOST_USER_API_SERVICE}/api/user/$${ticket.customerId}`
      );
      return {
        ...ticket,
        userInfo: user,
      };
    } catch (error) {
      return new Error(error);
    }
  },

  async deleteTicket(ticketId) {
    try {
    } catch (error) {
      return new Error(error);
    }
  },
};

module.exports = TicketService;
