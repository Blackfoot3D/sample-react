import React from "react";
import Model from "./Model/bag_HM_1909.glb";
import Icon from "./Model/bag_HM_1909_icon.webp";
import PNG from "./Model/bag_HM_1909.webp";


export var bag_HM_1909 = {
  id: "bag_HM_1909",
  name: "Bison Foetus Bag",
  translation: "Bison Foetus Bag Translation",
  png: PNG,
  meta: {
    date: "1909",
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
        {
          type: "text",
        },
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