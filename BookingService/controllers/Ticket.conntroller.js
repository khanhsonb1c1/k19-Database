const TicketDAO = require('../DAO/ticket.DAO');

const TicketController = {
  async createTicket(req, res) {
    try {
      const ticketData = req.body;
      const newTicket = await TicketDAO.createTicket(ticketData);
      res.status(201).json(newTicket);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getAllTickets(req, res) {
    try {
      const tickets = await TicketDAO.getAllTickets();
      res.status(200).json(tickets);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getTicketById(req, res) {
    try {
      const ticketId = req.params.id;
      const ticket = await TicketDAO.getTicketById(ticketId);
      if (!ticket) {
        return res.status(404).json({ message: 'Không tìm thấy vé xe' });
      }
      res.status(200).json(ticket);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateTicket(req, res) {
    try {
      const ticketId = req.params.id;
      const updateData = req.body;
      const updatedTicket = await TicketDAO.updateTicket(ticketId, updateData);
      res.status(200).json(updatedTicket);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteTicket(req, res) {
    try {
      const ticketId = req.params.id;
      await TicketDAO.deleteTicket(ticketId);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = TicketController;
