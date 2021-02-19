import React from "react";
import Model from "./Model/dress_BM_1900.glb";
import Icon from "./Model/dress_BM_1900_icon.webp";
import PNG from "./Model/dress_BM_1900.webp";


export var dress_BM_1900 = {
  id: "dress_BM_1900",
  name: "Dress",
  translation: "Dress Translation",
  png: PNG,
  meta: {
    date: "",
    origin: "",
    tribe: "",
    materials:[],
    location: {
      lat: null,
      lng: null,
    },
    museum: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
  },
  mapMarker: {
    lat:null,
    lng:null,
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