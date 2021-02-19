import React from "react";
import Model from "./Model/case_HM_1909.glb";
import Icon from "./Model/case_HM_1909_icon.webp";
import PNG from "./Model/case_HM_1909.webp";


export var case_HM_1909 = {
  id: "case_HM_1909",
  name: "Headdress Case",
  translation: "Headdress Case Translation",
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
      options: ["The Horniman Museum"],
    },
    {
      title: "Theme",
      options: [],
    },
  ],
};