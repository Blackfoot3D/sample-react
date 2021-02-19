import React from "react";
import Model from "./Model/awlcase_MAA_1909.glb";
import Icon from "./Model/awlcase_MAA_1909_icon.webp";
import PNG from "./Model/awlcase_MAA_1909.webp";


export var awlcase_MAA_1909 = {
  id: "awlcase_MAA_1909",
  name: "Awl Case",
  translation: "Awl Case Translation",
  png: PNG,
  meta: {
    date: "1909",
    origin: "",
    tribe: "",
    materials:[],
    location: {
      lat: 54.0447,
      lng: -117.0719,
    },
    museum: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
  },
  mapMarker: {
    lat:54.0447,
    lng:-117.0719,
    icon: Icon,
  },
  Model: {
    rti: "C:/Users/legom/Documents/GitHub/BlackfootCreator/z15_4272.ptm",
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
          translation: "Beaded Object initial description",
          description: (
            <div><p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quo quam enim nihil obcaecati modi sed dignissimos accusamus vero. Expedita culpa possimus deleniti dolorem quibusdam. Sed, libero quo illo asperiores amet consequatur eum error repudiandae est perspiciatis quidem veniam quasi tenetur sunt harum odit tempore voluptatibus nihil aliquam reiciendis. Temporibus?
            </p></div>
          ),
        },
      ],
    },
    {
      title: "History",
      content: [
        {
          type: "text",
          title: "Beaded Object Provenance",
          description: (
            <div><p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!
            </p></div>
          ),
        },
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
      options: ["Beads", "Hide"],
    },
    {
      title: "Blackfoot Tribe",
      options: ["Amskapipiikani"],
    },
    {
      title: "Museum Collection",
      options: ["Museum of Archaeology and Anthropology"],
    },
    {
      title: "Theme",
      options: [],
    },
  ],
};