package com.musicevent.musicevent.repository;

import org.springframework.data.repository.CrudRepository;

import com.musicevent.musicevent.model.Event;

public interface EventRepository extends CrudRepository<Event, Integer> {

}