import React from "react";
import Model from "./Model/wintercount_BM_1869.glb";
import Icon from "./Model/wintercount_BM_1869_icon.webp";
import PNG from "./Model/wintercount_BM_1869.webp";

import Canvas from "./Model/content/Canvas.png"

export var wintercount_BM_1869 = {
  id: "wintercount_BM_1869",
  name: "Story Robe",
  translation: "Translation",
  png: PNG,
  meta: {
    date: "before 1860",
    origin: "unknown",
    tribe: "unknown",
    materials:["Hide, Wood"],
    location: {
      lat: null,
      lng: null,
    },
    museum: "The British Museum",
    dimensions: {
      width: "224cm",
      height: "168cm",
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
            {
        name: "Hide",
        category: "materials",
        dataPosition: "-0.24328728304277875m 4.192356273526741m -1.5517210255045375m",
        dataNormal: "-0.24328728304277875m 4.192356273526741m -1.5517210255045375m",
        content: [
        {
          type: "text",
          title: "Hide or skin",
          titleBlackfoot: "Motokis, Ohpaaninnimaa, Paanssin, Paanssin",
          description: (
            <div>
            <p>
            Oil prepared hide by hand on both sides, smoked hide, tanned hide
            </p>
            <p>
               The hides of the animals went through a lengthy process to create soft leather out of animal skins. The first step in this process is turning fresh hide into rawhide or parfleche (covering for things). The rawhide is then softened by working a greasy mixture into the pores of the hide, rinsed and stretched and softened again until the leather is soft enough to suit the individuals needs. (CITE).
            </p></div>
          ),
        },
        ],
      },
      {
        name: "Paint with a sticky substance",
        category: "materials",
        dataPosition: "0.07341153194213262m 6.0480659580607385m -2.1272386457382297m",
        dataNormal: "0.09738290501065208m 0.2918563612969824m 0.9514916889716755m",
        content: [
        {
          type: "text",
          description: (
            <div><p>
               The paint used to depict stories, events, or history were harvested from the Earth. There were many plants, fungi, and clay that were used to create dyes, which were used to add color to the items that Blackfoot people were creating. Some individuals still know how to create dyes or paint out of the items that are naturally available within and outside of the Blackfoot Confederacy. Commercial dyes and paints have made it easier to add color over time and requires less physical work and time. 
            </p></div>
          ),
        },
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
               Animal hides were often used to depict important events within a tribe or individual’s life. These hides are known as the winter counts, within the Blackfoot Confederacy. They were often recorded through placing imaging on animal hides or buffalo robes. Sometimes these recordings were also placed on the tipi coverings or linings, the shield belonging to a warrior, or within the ledger books of an Indian agent. 
            </p></div>
          ),
        },
        {
          type: "quote",
            quote: (
            <div><p>
            The winter count was passed from one person to the next to assist our people in knowing and understanding where we had been and what had occurred in the preceding years. It recorded our history, and was our method of tracking time.
            </p></div>
          ),
          person: "(Needs Citation)",
        },
        {
          type: "text",
          description: (
            <div><p>
               The Winter Counts were maintained as long as there was someone, who knew the significance of each particular symbol used, that could receive the item through a transfer. (Needs Citation)
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
          title: "Origins ",
          description: (
            <div><p>
               The author of this robe is unknown.
            </p></div>
          ),
        },
        {
          type: "text",
          title: "Acquisition",
          description: (
            <div><p>
               The robe was donated to the British Museum by Henry Christy between 1860-1869
            </p></div>
          ),
        },
        {
          type: "image",
          title: "Canvas",
          url: Canvas,
        },
        {
          type: "text",
          title: "Where is it now?",
          description: (
            <div><p>
               This robe is not currently on display and kept within the department of Africa, Oceania, and the Americas which is located in the British Museum Stores (otherwise known as storage) in London, UK.
            </p></div>
          ),
        },
        {
          type: "reference",
          references: (
              <div>
                <p>
                  
                </p>
              </div>
            ),
        },
      ],
    },
    {
      title: "Materials",
      content: [
        {
          type: "text",
          description: (
            <div><p>
               Winter counts were usually recorded on the hides of animals, particularly Bison hides. The drawings were created utilizing natural inks and colors derived from harvesting materials such as plants, rocks, animal fat, and creating a concoction of the materials which were then used to paint the images onto the hide.
            </p></div>
          ),
        },
      ],
    },
    {
      title: "Design",
      content: [
        {
          type: "text",
          description: (
            <div><p>
               This particular design may be depicting an event that occurred within the tribe or the individual’s life. Winter counts were done in circular patterns beginning at the center of robe (CITE).
            </p></div>
          ),
        },
        {
          type: "quote",
            quote: (
            <div><p>
            Winter counts are collections of pictographic signs representing the most important events of each year. Keepers of the beaver bundles kept track of the days, months, moons, stars, and so on for ceremonial purposes. This leads to the winter counts that recorded long-term history
            </p></div>
          ),
          person: "Conaty, 2014, p. 88",
        },
        
      ],
    },
  ],
  categories: [
    {
      title: "Materials",
      options: "Hide",
    },
    {
      title: "Blackfoot Tribe",
      options: ["All"],
    },
    {
      title: "Museum Collection",
      options: "The British Museum",
    },
    {
      title: "Theme",
      options: ["Paint"],
    },
  ],
};