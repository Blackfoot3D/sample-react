import React from "react";
import Model from "./Model/moccasins_MAA_1930.glb";
import Icon from "./Model/moccasins_MAA_1930_icon.webp";
import PNG from "./Model/moccasins_MAA_1930.webp";


export var moccasins_MAA_1930 = {
  id: "moccasins_MAA_1930",
  name: "Moccasins",
  translation: "Niitsítsikin",
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
      options: ["Museum of Archaeology and Anthropology"],
    },
    {
      title: "Theme",
      options: ["Clothing"],
    },
  ],
};