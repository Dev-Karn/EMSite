package com.example.springapp.service;

import com.example.springapp.model.Ticket;
import com.example.springapp.repository.TicketRepository;
import com.example.springapp.service.AttendeeService;
import com.example.springapp.model.Attendee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TicketService {
    @Autowired
    private final TicketRepository ticketRepository;

    private final AttendeeService attendeeService;

    public TicketService(TicketRepository ticketRepository,AttendeeService attendeeService) {
        this.ticketRepository = ticketRepository;
        this.attendeeService = attendeeService;
    }

    public Ticket createTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public Ticket getTicketById(Long id) {
        return ticketRepository.findById(id).orElse(null);
    }

    public List<Ticket> getTicketByEventId(Long eventId) {
        return ticketRepository.findByEventId(eventId);
    }

    
    public List<Ticket> getTicketByAttendeeId(Long attendeeId) {
        return ticketRepository.findByAttendeeId(attendeeId);
    }

    // Future Rememberence to delete
    // public List<Ticket> getTicketByUserId(Long userId) {
    //     // Get Attendee Data

    //     List<Attendee> attendeeList = attendeeService.getAttendeeByUserId(userId);
    //     List<Ticket> ticketlist = new ArrayList<Ticket>();

    //     // Get All tickets
    //     List<Ticket> existingTickets = this.getAllTicket();

    //     // Get Ticket by passing each Attendee
    //     for (Attendee attendee : attendeeList) {
    //         for (Ticket ticket : existingTickets) {
    //             if(ticket.getAttendee().getId() == attendee.getId()) {
    //                 System.out.println("yes");
    //                 ticketlist.add(ticket);
    //             }
    //         }
    //     }
        
    //     return ticketlist;
    // }

    public List<Ticket> getAllTicket() {
        return ticketRepository.findAll();
    }

    public Ticket updateTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public boolean deleteTicket(Long id) {
        if (ticketRepository.existsById(id)) {
            ticketRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Additional methods based on your requirements
}
