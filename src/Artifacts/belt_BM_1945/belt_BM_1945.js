import React from "react";
import Model from "./Model/belt_BM_1945.glb";
import Icon from "./Model/belt_BM_1945_icon.webp";
import PNG from "./Model/belt_BM_1945.webp";

import BeadedBeltAudio from "./Model/content/t-rex-roar.mp3";
import BeadsAudio from "./Model/content/t-rex-roar.mp3";

import SmokedTannedHideAudio from "./Model/content/t-rex-roar.mp3";
import blackfootTerritory from "./Model/content/blackfootTerritory.png";
export var belt_BM_1945 = {
  // unique id. I dont specifically think this is neccesary at the moment, but may prove useful later in development.
  // If not, we can remove it.
  id: "belt_BM_1945",
  //Name of the Artifact.
  name: "Beaded Belt",
  translation: "Amáíipssim",
  translationAudio: BeadedBeltAudio,
  //mdl: the actual 3D object file (.glb or .gltf) is imported at the top of the
  //file, and associated to the model here.
  // mdl: Sheath,
  png: PNG,
  // rti: false,
  meta: {
    date: "around 1945",
    origin: "unknown",
    tribe: "unknown",
    location: {
      lat: 49.694168,
      lng: -112.832779,
    },
    museum: "The British Museum",
    materials: ["Leather, Beads"],
    dimensions: {
      length: "40cm",
      width: "45cm",
      height: "18cm",
    },
    type: "Clothing",
  },
  Model: {
    mdl: Model,
    icon: Icon,
    // rti: "/RTI/",
    hotspots: [
      {
        name: "Beads",
        category: "materials",
        dataPosition:
          "4.545803587279875m 3.022104207003207m 2.205524801571624m",
        dataNormal:
          "0.9494272127075329m -0.014152434214382907m 0.31366809907322835m",
        content: [
          {
            type: "text",
            title: "Beads",
            titleBlackfoot: "Ksiistsimaan",
            translationAudio: BeadsAudio,
            description: (
              <div>
                <p>
                  For thousands of years, Indigenous peoples created beads from
                  bone, claws, nuts and seeds, hoofs, horns, fish vertebrae,
                  wood and a host of other natural materials. In the early
                  1800s, glass beads, known as “seed beads”, were imported from
                  several European countries and were adapted into the existing
                  styles and patterns. Italy was one of the most prolific
                  manufacturers of these small glass beads. In the early 1900’s,
                  Czechoslovakia became the hub of seed bead manufacture. These
                  beads are fairly uniform and well suited for Native craft.
                  These beads are typically more rounded in shape. Today, bead
                  workers rely on these beads for uniformity and quality
                  (Bullock).
                </p>
                <p>
                  Beadwork is more than simply decorating material goods. It is
                  an expression of a beader’s identity. It connects to the
                  skills, sacrifices and creativity of ancestors. It carries
                  images that are ancient and reflect spiritual beliefs and can
                  be a healing art (Belcourt).
                </p>
              </div>
            ),
          },
          {
            type: "references",
            references: (
              <div>
                <p>
                  Belcourt, Christi. Beadwork: First Peoples' Beading History
                  and Techniques. Owen Sound, Ont: Ningwakwe Learning Press,
                  2010.
                </p>
                <p>
                  Bullock, Andy. “Seed Beads in North America”. The Wandering
                  Bull, LLC. 2016. Accessed June 24, 2020.
                  <a href="https://wanderingbull.com/seed-beads-north-america/#more-10045">
                    {" "}
                    https://wanderingbull.com/seed-beads-north-america/#more-10045
                  </a>
                </p>
              </div>
            ),
          },
        ],
      },
      {
        name: "Smoked Tanned Hide",
        category: "materials",
        dataPosition:
          "-2.956979398651094m 2.5714767553915836m -3.603726676847474m",
        dataNormal:
          "0.6855471091151862m 0.04352395946845239m 0.7267261011798045m",
        content: [
          {
            type: "text",
            title: "smoked tanned hide",
            titleBlackfoot: "Iitawanssa",
            translationAudio: SmokedTannedHideAudio,
            description: (
              <div>
                <p>
                  Before the arrival of Europeans, all beadwork was done on hide
                  that had been treated or tanned at home. These home-tanned
                  hides are sometimes called “brain-tanned” or “smoke-tanned,”
                  depending on the materials of the region and processed used to
                  treat the hide to make the fibres more breathable. All girls would 
                  learn how to tan hides and the best would continue with it. 
                  </p>
                  <p>Beadwork was sewn onto hides using sinew and an awl. The awl,
                  originally made of bone, would be used to pierce the hide so
                  that the end of the sinew, which was stiff enough to pick up
                  the beads like a needle, could be used to dew it through the
                  holes made by the awl.{" "}
                </p>
              </div>
            ),
          },
          {
            type: "references",
            references: (
              <div>
                <p>
                  Belcourt, Christi. Beadwork: First Peoples' Beading History
                  and Techniques. Owen Sound, Ont: Ningwakwe Learning Press,
                  2010.
                </p>
              </div>
            ),
          },
        ],
      },
      {
        name: "Morning Star",
        category: "design",
        dataPosition:
          "-4.649250638459013m 2.7120673041115544m -0.5481891034570249m",
        dataNormal:
          "-0.9780272870892827m -0.05255598512329465m -0.20174363468644585m",
        content: [
          {
            type: "text",
            description: (
              <div>
                <p>
                  Ipiso waahsa (Morning Star) is the son of Natosi(Sun) and Kokomi kisomm (Moon), the Spomi-tapi-ksi (The Sky Beings) who give Blackfoot people important ceremonies and guidance.
                </p>
              </div>
            ),
          },
        ],
      },
      {
        name: "Mistaken Morning Star",
        category: "design",
        dataPosition:
          "2.3414910253947103m 2.936006881201013m 4.4784122215051685m",
        dataNormal:
          "0.07714752535823456m -0.011038581010287226m 0.9969585794105891m",
        content: [
          {
            type: "text",
            description: (
              <div>
                <p>When there are two crosses, one is the morning star and the other is the Mistaken Morning Star. </p>
              </div>
            ),
          },
        ],
      },
      {
        name: "Whirlpool",
        category: "design",
        dataPosition:
          "-3.1083052373626505m 3.1523990555760557m 3.6846378085403924m",
        dataNormal:
          "-0.5538168643276893m -0.14318968555777356m 0.820233865879794m",
        content: [
          {
            type: "text",
            description: (
              <div>
                <p>A whirlpool is depicted with the double diamond shape.</p>
              </div>
            ),
          },
        ],
      },
    ],
  },
  //description array. An array of js objects, used to store the artifact descriptions and
  //informational 'content' in categories pertaining to the 'title'.
  //Title and content are necessary keys, but the values can be changed.
  //additional description categories can be added, but must follow this format and cannot be added to the start.
  //First element must be the initial description at description[0]
  description: [
    {
      title: "Intro",
      content: [
        {
          type: "text",
          title: "Introduction",
          description: (
            <div>
              <p>
                A leather belt decorated with seed beads tightly sewn in a
                geometric pattern. While the exact origins of the belt are
                unknown, museum documentation indicates that it was acquired
                from Calgary, Alberta and donated to the British Museum in 1945.{" "}
              </p>
              <p>
                Currently, decorated belts are worn as a part of Blackfoot
                regalia during powwows and ceremonies. Other pieces can be tied
                to the belt, like an awl case, pouch, or knife. <em>(Can we include a photo of someone wearing a similar belt?)</em>.{" "}
              </p>
            </div>
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
            <div>
              <p>
                The original owner of this belt is unknown. Only they would be
                able to explain the meaning of the belt’s beaded design, which
                is always unique to each beader.{" "}
              </p>
            </div>
          ),
        },
        {
          type: "text",
          title: "Acquisition",
          description: (
            <div>
              <p>
                In 1945 the belt was donated to the British Museum where it sat
                in a box of non-accessioned material in the student’s room until
                it was found in 1967. A label near the belt describes an "Indian
                beaded belt, sent from Calgary, Canada, bought at an Indian
                reservation" and donated by Mrs F. C. Godber.{" "}
              </p>
            </div>
          ),
        },
        {
          type: "text",
          title: "Where is it now?",
          description: (
            <div>
              <p>
                The belt is currently located in the British Museum stores on
                Orsman Road, London, UK.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      title: "Materials",
      content: [],
    },
    {
      title: "Design",
      content: [],
    },
    // {
    //   title: "Stories",
    //   content: [
    //     {
    //       type: "text",
    //       title: "The Woman who married Morning Star",
    //       description: (
    //         <div>
    //           <p>
    //             This story explains how the North Star came into existence, and
    //             also how we received one of our most important ceremonies.
    //           </p>
    //           <p>
    //             <a href="http://www.virtualmuseum.ca/edu/ViewLoitDa.do;jsessionid=EAF551A7FAFC4E248DC36B0D0072A2C7?method=preview&lang=EN&id=5220">
    //               As told by Mrs. Wolf Plume, Amsskaapipikani in 1911
    //             </a>
    //           </p>
    //         </div>
    //       ),
    //     },
    //   ],
    // },
  ],
  //mapMarker object contains information pertaining to the map view. This includes latitude, longitude, and icon (for mapMarkers)
  mapMarker: {
    lat: 49.694168,
    lng: -112.832779,
    icon: Icon,
  },
  categories: [
    {
      title: "Materials",
      options: ["Hide", "Beads"],
      // options: ["All"],
    },
    {
      title: "Blackfoot Tribe",
      // options: ["Piikani", "Amskapipiikani", "Siksika", "Kainai"],
      options: ["all"],
    },
    {
      title: "Museum Collection",
      // options: [
      //   "Museum of Archaeology and Anthropology",
      //   "The British Museum",
      //   "The Horniman Museum",
      // ],
      options: ["The British Museum"],
    },
    {
      title: "Theme",
      // options: [
      //   "Clothing",
      //   "Child Rearing",
      //   "Tools",
      //   "Pipes",
      //   "Cases",
      //   "Paint",
      // ],
      options: ["Clothing"],
    },
  ],
};
