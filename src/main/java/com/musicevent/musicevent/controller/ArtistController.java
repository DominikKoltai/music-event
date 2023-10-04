package com.musicevent.musicevent.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.musicevent.musicevent.model.Artist;
import com.musicevent.musicevent.repository.ArtistRepository;

@Controller
@RequestMapping(path = "/artist")
public class ArtistController {
  @Autowired
  private ArtistRepository artistRepository;

  @PostMapping(path = "/addArtist")
  public @ResponseBody String addNewArtist(@RequestParam String img, @RequestParam String name,
      @RequestParam String genre) {
    Artist artist = new Artist();
    artist.setImg(img);
    artist.setName(name);
    artist.setGenre(genre);
    artistRepository.save(artist);
    return "Saved";
  }

  @GetMapping(path = "/artists")
  public @ResponseBody Iterable<Artist> getAllArtist() {
    return artistRepository.findAll();
  }
}
