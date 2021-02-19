import React from "react";
import Model from "./Model/pipe_BM_1850.glb";
import Icon from "./Model/pipe_BM_1850_icon.webp";
import PNG from "./Model/pipe_BM_1850.webp";


export var pipe_BM_1850 = {
  id: "pipe_BM_1850",
  name: "Beaded Pipe",
  translation: "Aahkóinnimaan",
  png: PNG,
  meta: {
    date: "",
    origin: "",
    tribe: "",
    materials:[],
    location: {
      lat: 49.6786,
      lng: -112.8601,
    },
    museum: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
  },
  mapMarker: {
    lat:49.6786,
    lng:-112.8601,
    icon: Icon,
  },
  Model: {
    mdl: Model,
    icon: Icon,
    hotspots: [
          ],
  },
  description: [
    {
      title: "Intro",
      content: [
      ],
    },
    {
      title: "History",
      content: [
      ],
    },
    {
      title: "Materials",
      content: [
      ],
    },
    {
      title: "Design",
      content: [
      ],
    },
  ],
  categories: [
    {
      title: "Materials",
      options: [],
    },
    {
      title: "Blackfoot Tribe",
      options: [],
    },
    {
      title: "Museum Collection",
      options: [],
    },
    {
      title: "Theme",
      options: [],
    },
  ],
};