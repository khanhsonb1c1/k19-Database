const VehicleDAO = require("../DAO/Vehicle.DAO");
const TicketDAO = require("../DAO/Ticket.DAO");
const ScheduleDAO = require("../DAO/schedule.DAO");
const { HOST_USER_API_SERVICE } = require("../config/API.config");

const TicketService = {

  async createTicket(data) {
    try {
      const { scheduleId, price, customerId, phoneContact } = data;


      const schedule = await ScheduleDAO.getScheduleById(scheduleId);
      const vehicleTotalSlot = schedule.vehicle.totalSlot;

      const unavailableSlot = schedule.vehicle.length;
      
      // Kiểm tra nếu xe full ghế thì báo lỗi, nếu còn chỗ thì tạo vé, nếu còn slot cuối cùng thì báo lịch trình đó hết vé

      if (vehicleTotalSlot > unavailableSlot) {
        const ticketData = await TicketDAO.createTicket(data)
        if (vehicleTotalSlot = unavailableSlot +1) {
         await ScheduleDAO.updateSchedule({
          status: "2"
         })
        }
        return ticketData
      } else return new Error("Xe hết chỗ")

    } catch (error) {
      return error;
    }
  },

  async getTicketInfo(ticketId) {
    try {

      const ticket = await TicketDAO.getTicketById(ticketId)
      const user = await fetch(`${HOST_USER_API_SERVICE}/api/user/$${ticket.customerId}`)
      return {
        ...ticket,
        userInfo: user
      }
    } catch (error) {
      return error;
      
    }
  },


  async deleteTicket(ticketId) {
    try {


      
    } catch (error) {
      return error;
      
    }
  }
};

module.exports = TicketService;
