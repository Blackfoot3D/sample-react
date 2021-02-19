import React from "react";
import Model from "./Model/stirrups_BM_1958.glb";
import Icon from "./Model/stirrups_BM_1958_icon.webp";
import PNG from "./Model/stirrups_BM_1958.webp";


export var stirrups_BM_1958 = {
  id: "stirrups_BM_1958",
  name: "Stirrups",
  translation: "Translation",
  png: PNG,
  meta: {
    date: "before 1958",
    origin: "unknown",
    tribe: ["unknown"],
    materials:["Hide, Wood"],
    location: {
      lat: null,
      lng: null,
    },
    museum: ["The British Museum"],
    dimensions: {
      length: "13.5cm",
      width: "16.5cm",
      height: "7.5cm",
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
        dataPosition: "0.30882571391042335m -1.4853513889681347m -11.719254187990172m",
        dataNormal: "-0.3775379238975921m 0.8356264050098464m 0.39899076088227403m",
        content: [
        {
          type: "text",
          description: (
            <div><p>
               The hides of the animals went through a lengthy process to create soft leather out of animal skins. The first step in this process is turning fresh hide into rawhide or parfleche (covering for things). The rawhide is then softened by working a greasy mixture into the pores of the hide, rinsed and stretched and softened again until the leather is soft enough to suit the individuals needs. (Hungry Wolf, 1982, pp. 231-235).
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
        name: "NeckSinew",
        category: "materials",
        dataPosition: "0.38832172545415616m 4.3631571548127575m -12.244352723718498m",
        dataNormal: "-0.0852056824041282m 0.6009058429770717m 0.7947654745659637m",
        content: [
        {
          type: "text",
          title: "Neck sinew",
          translation: "Paakahtaan",
          description: (
            <div><p>
               Sinew is the tough fibrous tissues that unite muscle to bone or bone to bone on the animal. It lies along the backbone of the animal, once the meat is scraped off you plaster the strip onto a flat service to create sinew (Hungrywolf, 1982, p. 240). This was often harvested from animals that existed within the region such as deer and buffalo and used to create items used for both ceremony and everyday use. Sinew had to be stored properly to prevent rotting. It is important to note that although commercial thread has been introduced to Indigenous populations, there are still individuals who harvest material and create sinew using traditional methods that have been transferred to them from their family members or kin. 
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
        name: "Wood",
        category: "materials",
        dataPosition: "-0.405565610878007m 3.418351421989806m -14.207922080241875m",
        dataNormal: "0.2709329601468589m 0.5410741637346638m -0.7961369734190813m",
        content: [
        {
          type: "text",
          title: "Wood (wood shaving or piece of wood)",
          translation: "Piiksska",
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
               When translating stirrup to English it means that which is used to place one’s foot. The horse was introduced to the Blackfoot in the mid to late 1700’s (Pard 2014 as cited in Bethke 2019). This brought on the production of new technology needed to incorporate the horse successfully into the every day-to-day activities of the Blackfoot people. Stirrups were one of those items made to ensure safety and made transportation an individual on the horse easier. These stirrups are dated to have been manufactured during the period of 1950-1958 and were acquired in 1982. Stirrups are now made of aluminum, stainless steel, plastic or a mix of some of these three. 
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
               The arrival of the Europeans brought new knowledge that would prove to be beneficial for everyday use.
            </p></div>
          ),
        },
        {
          type: "text",
          title: "Acquisition ",
          description: (
            <div><p>
               These stirrups are dated to have been manufactured during the period of 1950-1958 and were acquired in 1982. The British Museum purchased it from the Warwickshire Museum.
            </p></div>
          ),
        },
        {
          type: "text",
          title: "Where is it now?",
          description: (
            <div><p>
               The stirrups are currently stored at the British Museum Store House in the Africa, Oceania & the Americas department. 
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
      options: ["Hide", "Wood"],
    },
    {
      title: "Blackfoot Tribe",
      options: ["All"],
    },
    {
      title: "Museum Collection",
      options: ["The British Museum"],
    },
    {
      title: "Theme",
      options: [],
    },
  ],
};