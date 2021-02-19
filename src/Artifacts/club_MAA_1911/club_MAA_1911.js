import React from "react";
import Model from "./Model/club_MAA_1911.glb";
import Icon from "./Model/club_MAA_1911_icon.webp";
import PNG from "./Model/club_MAA_1911.webp";

import littlePlumeYellowKidney from "./Model/content/LittlePlume-YellowKidney.jpg";
import ACHaddonCambridgeU from "./Model/content/A.C.Haddon-CambridgeU.png";
import ElkAntlerAudio from "./Model/content/t-rex-roar.mp3";
import PaintAudio from "./Model/content/t-rex-roar.mp3";
import BigWhipAudio from "./Model/content/t-rex-roar.mp3";

export var club_MAA_1911 = {
  // unique id. I dont specifically think this is neccesary at the moment, but may prove useful later in development.
  // If not, we can remove it.
  id: "club_MAA_1911",
  //Name of the Artifact.
  name: "Big Whip",
  translation: "Umakshapisthima",
  translationAudio: BigWhipAudio,
  //mdl: the actual 3D object file (.glb or .gltf) is imported at the top of the
  //file, and associated to the model here.
  // mdl: Sheath,
  /*<button class="Hotspot" slot="hotspot-2" data-position="2.0256143595520166m 8.487512932713177m -8.192746933368085m" data-normal="-0.05959852537108738m 0.5707992079371752m -0.8189238548191677m" data-visibility-attribute="visible">
  </button><button class="Hotspot" slot="hotspot-3" data-position="2.778802731596354m 7.946290952872641m -7.962352493598493m" data-normal="0.822487305638788m -0.5353799122181668m -0.19204942503510605m" data-visibility-attribute="visible"></button>
  <button class="Hotspot" slot="hotspot-4" data-position="2.3707198909515848m 9.13835853455672m -7.281532910834866m" data-normal="0.4608608214664926m 0.8141798761670053m 0.35315496949909914m" data-visibility-attribute="visible"></button>
  <button class="Hotspot" slot="hotspot-5" data-position="1.079777376123345m 7.394414982666378m -8.106467027134656m" data-normal="-0.5325863094619012m -0.05049964476585609m 0.8448678055484624m" data-visibility-attribute="visible"></button>
  <button class="Hotspot" slot="hotspot-6" data-position="1.5473163073873728m 9.01245741825183m -7.859654676595451m" data-normal="-0.18516663152292648m 0.2380197825032357m -0.9534463286979322m" data-visibility-attribute="visible"></button>*/
  png: PNG,
  meta: {
    date: "Early 20th Century",
    origin: "Chief Little Plume, Amskapipiikani",
    tribe: "Amskapipiikani",
    location: {
      lat: 48.437377,
      lng: -112.87107,
    },
    museum: "Museum of Archaeology and Anthropology",
    materials: ["Antler", "Paint", "Hide"],
    dimensions: {
      length: "35.5cm",
      width: "7cm",
      height: "11cm",
    },
    type: "Weapon",
  },
  Model: {
    mdl: Model,
    rti: "",
    icon: Icon,
    hotspots: [
      {
        name: "Elk Antler",
        category: "materials",
        dataPosition:
          "0.4587623838006372m 3.816518869037896m -1.141596621611916m",
        dataNormal:
          "0.8167499945267493m -0.18166171065650386m 0.547648125461877m",
        content: [
          {
            type: "text",
            title: "Elk Antler",
            titleBlackfoot: "Translation?",
            translationAudio: ElkAntlerAudio,
            description: (
              <div>
                <p>
                  Elk was commonly hunted by Blackfeet, who make a point of
                  using all parts of the animal for food and materials.
                </p>
              </div>
            ),
          },
        ],
      },
      {
        name: "Paint",
        category: "materials",
        dataPosition:
          "0.4760822238874327m 3.253668118731711m -2.5089056997124466m",
        dataNormal:
          "0.4154197634934967m -0.4273356353984617m -0.8030010428496346m",
        content: [
          {
            type: "text",
            title: "Paint",
            titleBlackfoot: "translation?",
            translationAudio: PaintAudio,
            description: (
              <div>
                <p>
                  Paint pigments are traditionally sourced and made using
                  materials found in Blackfoot Territory. The ability to make
                  paint is gained through a ceremonial knowledge transfer.
                </p>
              </div>
            ),
          },
        ],
      },
      {
        name: "3 Men",
        category: "design",
        dataPosition:
          "0.597588823511595m 4.343840888760235m -2.5199061417771365m",
        dataNormal:
          "0.35892724997244013m 0.5177517190889118m -0.7765979568655187m",
        content: [
          {
            type: "text",
            description: (
              <div>
                <p>
                  The symbols represent three Assiniboine men that Little Plume
                  fought with, killing one of them. 
                </p>
              </div>
            ),
          },
        ],
      },
      {
        name: "Double Zigzags",
        category: "design",
        dataPosition:
          "0.1220824261069226m 2.6063386570632643m 0.4779070849544258m",
        dataNormal:
          "0.8565071191644078m 0.42232336448900715m 0.29671287573573946m",
        content: [
          {
            type: "text",
            description: (
              <div>
                <p>Signify looking for the enemy.</p>
              </div>
            ),
          },
        ],
      },
      {
        name: "Circles",
        category: "design",
        dataPosition:
          "0.9129555289756115m 4.397826759974208m -1.5931911328228816m",
        dataNormal:
          "0.9895153828894444m 0.0030174900673622974m 0.14439598948326104m",
        content: [
          {
            type: "text",
            description: (
              <div>
                <p>
                  The circles around the head of the club signify the inner and
                  outer circle lodges during Sun Dance.
                </p>
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
                This war club belonged to Little Plume, an Amskapipiikani Chief
                known for being a great warrior, advocate for Blackfeet rights,
                and healer. Blackfoot war clubs were used for warfare or
                ceremonial purposes (Native Languages of the Americas). It is
                believed that Little Plume used this club to fight three
                Assiniboine men based on the painted symbols (Museum of
                Anthropology and Archeology).
              </p>
            </div>
          ),
        },
        {
          type: "references",
          references: (
            <div>
              <p>
                Lewis, Orrin, et al. “North American Indian Weapons”. Native
                Languages of the Americas. Accessed September 20, 2020.{" "}
                <a href="http://www.native-languages.org/weapons.htm">
                  http://www.native-languages.org/weapons.htm
                </a>
              </p>
              <p>
                Museum of Anthropology and Archeology. Description of E
                1911.129.1.{" "}
                <a href="https://collections.maa.cam.ac.uk/objects/487672/">
                  https://collections.maa.cam.ac.uk/objects/487672/
                </a>
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
          title: "Origins",
          description: (
            <div>
              <p>
                This war club, known as Umakshapisthima (Big Whip), belonged to
                Little Plume, an influential Amskapipiikani Chief. Little Plume
                was well known for his victories in battle and involvement in
                treaties with other tribes and the U.S. government (Dempsey,
                2015). His people lived and hunted on lands around the Teton
                River until President Grant issued an Executive Order
                diminishing the 1855 treaty lands and establishing an undivided
                reservation for the Blackfeet, Gros Ventre, Assiniboine, and
                Sioux (Montana Tribal History Timelines, 2017).
              </p>
            </div>
          ),
        },
        {
          type: "quote",
          // title: "Acquisition",
          quote: (
            <div>
              <p>
                In this country our families have been reared, and taught the
                traditions of our great warriors, many seasons before the white
                man was heard of by us, and where our ancestors are buried.
                Neither our wishes nor our rights have been consulted in this
                new and unjust scheme to take our best country from us.
              </p>
            </div>
          ),
          person: "Little Plume to President Ulysses Grant, 1874",
        },
        {
          type: "image",
          title: "littlePlumeYellowKidney",
          url: littlePlumeYellowKidney,

          // description:
          // "This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.",
          description: (
            //test
            <div>
              <p>
                Little Plume and son Yellow Kidney seated on ground inside
                lodge, pipe between them, 1910 December 8, photographed by
                Curtis, Edward S., 1868-1952
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
                The club was one of several items acquired from Little Plume by
                Alfred Cort Haddon (1855-1940), a Reader in Ethnology at the
                University of Cambridge. Haddon met Little Plume during an
                expedition with the photographer Edward Curtis in the summer of
                1909. He wrote extensively of his experiences with Little Plume,
                including his observation of several ceremonies, including a
                medicine pipe ceremony and a sweat lodge ceremony (Gidley,
                1982).
              </p>
            </div>
          ),
        },
        {
          type: "quote",
          // title: "Acquisition",
          quote: (
            <div>
              <p>
                This summer Little Plume, one of the Piegan chiefs, was ill and
                his youngest brother, Yellow Kidney, vowed a medicine pipe dance
                if he re- covered. The aged Little Plume did get well, and I was
                fortunate enough to be permitted to participate in this
                ceremony, which took place in Wild Gun's painted lodge.
              </p>
            </div>
          ),
          person: "A.C. Haddon, 1909",
        },
        {
          type: "image",
          title: "ACHaddonCambridgeU",
          url: ACHaddonCambridgeU,

          // description:
          // "This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.This image is from a larger image archive of Blackfoot subjects and territories located at this museum.",
          description: (
            //test
            <div>
              <p>
                Alfred Cort Haddon. Photo from the Wellcome Library, London.
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
                Haddon’s collection of Blackfoot items, including Big Whip,
                became a part of the{" "}
                <a href="https://www.youtube.com/">
                  Museum of Archeology (MAA)
                </a>{" "}
                and Anthropology at Cambridge University, where he lectured. The
                MAA also holds a large collection of photographs taken by Edward
                Curtis, with whom Haddon visited Blackfeet territory in 1909.
              </p>
            </div>
          ),
        },
        {
          type: "references",
          references: (
            <div>
              <p>
                Dempsey, Hugh A.. The Great Blackfoot Treaties. Heritage House
                Publishing Co. 2015 “Montana Tribal History Timelines -
                Blackfeet Reservation Timeline”. Indian Education Division,
                Montana Office of Public Instruction. 2017{" "}
                <a href="https://opi.mt.gov/Portals/182/Page%20Files/Indian%20Education/Social%20Studies/K-12%20Resources/Timelines%20for%20All%20Reservations.pdf">
                  https://opi.mt.gov/Portals/182/Page%20Files/Indian%20Education/Social%20Studies/K-12%20Resources/Timelines%20for%20All%20Reservations.pdf
                </a>
              </p>
              <p>
                Gidley, Mick. A. C. Haddon Joins Edward S. Curtis: An English
                Anthropologist among the Blackfeet, 1909. Montana. 1982.{" "}
                <a href="https://www.academia.edu/36053666/A_C_Haddon_Joins_Edward_S_Curtis_An_English_Anthropologist_Among_the_Blackfeet_1909">
                  https://www.academia.edu/36053666/A_C_Haddon_Joins_Edward_S_Curtis_An_English_Anthropologist_Among_the_Blackfeet_1909
                </a>
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
      content: [
        {
          type: "references",
          references: (
            <div>
              <p>
                Description of E 1911.129.1. Museum of Anthropology and
                Archeology.{" "}
                <a href="https://collections.maa.cam.ac.uk/objects/487672/">
                  https://collections.maa.cam.ac.uk/objects/487672/
                </a>
              </p>
            </div>
          ),
        },
      ],
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
  //categories: "All, Beading, Deerhide",
  // categories: ["Beading", "Deerhide"],
  categories: [
    {
      title: "Materials",
      // options: ["Hide", "Beads", "Quills", "Bone", "Wood", "Stone"],
      options: ["Bone"],
    },
    {
      title: "Blackfoot Tribe",
      // options: ["Piikani", "Amskapipiikani", "Siksika", "Kainai"],
      options: ["Amskapipiikani"],
    },
    {
      title: "Museum Collection",
      // options: [
      //   "Museum of Archaeology and Anthropology",
      //   "The British Museum",
      //   "The Horniman Museum",
      // ],
      options: ["Museum of Archaeology and Anthropology"],
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
      options: ["Weapons"],
    },
  ],
};
