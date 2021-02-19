import React from "react";
import Model from "./Model/amulet_MAA_1929.glb";
import Icon from "./Model/amulet_MAA_1929_icon.webp";
import PNG from "./Model/amulet_MAA_1929.webp";


export var amulet_MAA_1929 = {
  id: "amulet_MAA_1929",
  name: "Snake Amulet",
  translation: "Snake Amulet Translation",
  png: PNG,
  meta: {
    date: "",
    origin: "",
    tribe: "",
    materials:["Hide", "Beads"],
    location: {
      lat: 49.694168,
      lng: -112.832779,
    },
    museum: "Museum of Archaeology and Anthropology",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
  },
  mapMarker: {
    lat:49.694168,
    lng:-112.832779,
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
          description: (
            <div><p>
               Template initial description Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quo quam enim nihil obcaecati modi sed dignissimos accusamus vero. Expedita culpa possimus deleniti dolorem quibusdam. Sed, libero quo illo asperiores amet consequatur eum error repudiandae est perspiciatis quidem veniam quasi tenetur sunt harum odit tempore voluptatibus nihil aliquam reiciendis. Temporibus?
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
          description: (
            <div><p>
               Template Provenance content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!
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
      options: ["Hide", "Beads"],
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
      options: "Child Rearing",
    },
  ],
};