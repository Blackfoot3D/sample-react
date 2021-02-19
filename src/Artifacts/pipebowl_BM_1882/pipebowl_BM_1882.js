import React from "react";
import Model from "./Model/pipebowl_BM_1882.glb";
import Icon from "./Model/pipebowl_BM_1882_icon.webp";
import PNG from "./Model/pipebowl_BM_1882.webp";


export var pipebowl_BM_1882 = {
  id: "pipebowl_BM_1882",
  name: "Pipe Bowl",
  translation: "Pipe Bowl Translation",
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