import React from "react";
import Model from "./Model/buffalostone_HM_1909.glb";
import Icon from "./Model/buffalostone_HM_1909_icon.webp";
import PNG from "./Model/buffalostone_HM_1909.webp";


export var buffalostone_HM_1909 = {
  id: "buffalostone_HM_1909",
  name: "Buffalo Rock",
  translation: "Iniskim",
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
    museum: "Horniman Museum and Gardens",
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
      options: ["Stone"],
    },
    {
      title: "Blackfoot Tribe",
      options: ["All"],
    },
    {
      title: "Museum Collection",
      options: ["The Horniman Museum"],
    },
    {
      title: "Theme",
      options: [],
    },
  ],
};