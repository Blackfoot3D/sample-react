import React from "react";
import Model from "./Model/rattle_MAA_1929.glb";
import Icon from "./Model/rattle_MAA_1929_icon.webp";
import PNG from "./Model/rattle_MAA_1929.webp";


export var rattle_MAA_1929 = {
  id: "rattle_MAA_1929",
  name: "Rattle",
  translation: "Awanáán",
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