import React from "react";
import Model from "./Model/sheath_BM_1887.glb";
import Icon from "./Model/sheath_BM_1887_icon.webp";
import PNG from "./Model/sheath_BM_1887.webp";


export var sheath_BM_1887 = {
  id: "sheath_BM_1887",
  name: "Knife Sheath",
  translation: "Sottoan",
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