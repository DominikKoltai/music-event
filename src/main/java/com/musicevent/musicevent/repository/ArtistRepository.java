package com.musicevent.musicevent.repository;

import org.springframework.data.repository.CrudRepository;

import com.musicevent.musicevent.model.Artist;

public interface ArtistRepository extends CrudRepository<Artist, Integer> {

}
