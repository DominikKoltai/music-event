package com.musicevent.musicevent.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.musicevent.musicevent.model.Event;
import com.musicevent.musicevent.repository.EventRepository;

@Controller
@RequestMapping(path = "/event")
public class EventController {
  @Autowired
  private EventRepository eventRepository;

  @PostMapping(path = "/addEvent")
  public @ResponseBody String addNewEvent(@RequestParam String img, @RequestParam String name,
      @RequestParam String date, @RequestParam String description) {
    Event event = new Event();
    event.setImg(img);
    event.setName(name);
    event.setDate(date);
    event.setDescription(description);
    eventRepository.save(event);
    return "Saved";
  }

  @GetMapping(path = "/events")
  public @ResponseBody Iterable<Event> getAllEvents() {
    return eventRepository.findAll();
  }
}
