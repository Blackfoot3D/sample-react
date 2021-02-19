import React from "react";
import Model from "./Model/dauber_MAA_1999.glb";
import Icon from "./Model/dauber_MAA_1999_icon.webp";
import PNG from "./Model/dauber_MAA_1999.webp";


export var dauber_MAA_1999 = {
  id: "dauber_MAA_1999",
  name: "Bingo Dauber",
  translation: "Bingo Dauber Translation",
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