import React from "react";
import Model from "./Model/knife_BM_1860.glb";
import Icon from "./Model/knife_BM_1860_icon.webp";
import PNG from "./Model/knife_BM_1860.webp";


export var knife_BM_1860 = {
  id: "knife_BM_1860",
  name: "Knife",
  translation: "Isttoán",
  png: PNG,
  meta: {
    date: "",
    origin: "",
    tribe: "",
    materials:[],
    location: {
      lat: 50.4452,
      lng: -104.6189,
    },
    museum: "The British Museum",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
  },
  mapMarker: {
    lat:50.4452,
    lng:-104.6189,
    icon: Icon,
  },
  Model: {
    mdl: Model,
    icon: Icon,
    hotspots: [
            {
        name: "Etching",
        category: "materials",
        dataPosition: "0.06126697186877861m 0.0822681398334375m -12.306137904686747m",
        dataNormal: "-0.03368562801649507 0.6616175805192483 0.7490844115405086",
        content: [
        ],
      },
      {
        name: "Brand",
        category: "design",
        dataPosition: "0.2237008777765317m -2.3207273316997945m -10.480742993255461m",
        dataNormal: "0.07324723596857143 -0.6745561257533281 -0.7345807482037796",
        content: [
        ],
      },
      {
        name: "Blade",
        category: "design",
        dataPosition: "0.06126697186877861m 0.0822681398334375m -12.306137904686747m",
        dataNormal: "-0.03368562801649507 0.6616175805192483 0.7490844115405086",
        content: [
        ],
      },
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
               A leather belt decorated with seed beads tightly sewn in a geometric pattern. While the exact origins of the belt are unknown, museum documentation indicates that it was acquired from Calgary, Alberta and donated to the British Museum in 1945.
            </p></div>
          ),
        },
        {
          type: "text",
          description: (
            <div><p>
               Currently, decorated belts are worn as a part of Blackfoot regalia during powwows and ceremonies. Other pieces can be tied to the belt, like an awl case, pouch, or knife.
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
          title: "Origins",
          description: (
            <div><p>
               The original owner of this belt is unknown. Only they would be able to   explain the meaning of the belt’s beaded design, which is always unique to each beader.
            </p></div>
          ),
        },
        {
          type: "text",
          title: "Acquisition",
          description: (
            <div><p>
               In 1945 the belt was donated to the British Museum where it sat in a box of non-accessioned material in the student’s room until it was found in 1967. A label near the belt describes an "Indian beaded belt, sent from Calgary, Canada, bought at an Indian reservation" and donated by Mrs F. C. Godber.
            </p></div>
          ),
        },
        {
          type: "text",
          translation: "Where is it now?",
          description: (
            <div><p>
               The belt is currently located in the British Museum stores on Orsman Road, London, UK.
            </p></div>
          ),
        },
      ],
    },
    {
      title: "Materials",
      content: [
        {
          type: "text",
        },
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
      options: ["Bone"],
    },
    {
      title: "Blackfoot Tribe",
      options: [],
    },
    {
      title: "Museum Collection",
      options: "The British Museum",
    },
    {
      title: "Theme",
      options: [],
    },
  ],
};