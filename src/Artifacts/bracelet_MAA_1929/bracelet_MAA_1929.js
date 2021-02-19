import Model from "./Model/bracelet_MAA_1929.glb";
import Icon from "./Model/bracelet_MAA_1929_icon.webp";
import PNG from "./Model/bracelet_MAA_1929.webp";
export var bracelet_MAA_1929 = {
  // unique id. I dont specifically think this is neccesary at the moment, but may prove useful later in development.
  // If not, we can remove it.
  id: "bracelet_MAA_1929",
  //Name of the Artifact.
  name: "Quillwork Band",
  translation: "Atonáánpónn",
  //mdl: the actual 3D object file (.glb or .gltf) is imported at the top of the
  //file, and associated to the model here.
  // mdl: Sheath,
  png: PNG,
    meta: {
    date: "",
    origin: "",
    tribe: "",
    materials:[],
    location: {
      lat: 49.6786,
      lng: -112.8601,
    },
    museum: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
  },
  mapMarker: {
    lat:49.6786,
    lng:-112.8601,
    icon: Icon,
  },
  Model: {
    mdl: Model,
    icon: Icon,
    hotspots: [
      // {
      //   name: "Hotspot 1",
      //   dataPosition: "-0.18607953164141378m 0.17541244358931224m 0.5m",
      //   dataNormal: "0m 0m 1m",
      //   content: "Information describing Hotspot 1",
      // },
      // {
      //   name: "Hotspot 2",
      //   dataPosition:
      //     "0.3156754317937271m -0.3537557368692759m 0.4999999999999998m",
      //   dataNormal: "0m 0m 1m",
      //   content: "Information describing Hotspot 2",
      // },
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
      content:[],
    },
    {
      title: "History",
      content:[],
    },
    {
      title: "Materials",
      content:[],
    },
    {
      title: "Design",
      content:[],
    },
    // {
    //   title: "Related Objects",
    //   content: ["Beading", "Deerhide"],
    // },
  ],

  //categories: "All, Beading, Deerhide",
  // categories: ["Beading", "Deerhide"],
  categories: [
    {
      title: "Materials",
      // options: ["Hide", "Beads", "Quills", "Bone", "Wood", "Stone"],
      options: ["Quills"],
    },
    {
      title: "Blackfoot Tribe",
      // options: ["Piikani", "Amskapipiikani", "Siksika", "Kainai"],
      options: ["All"],
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
      options: ["Clothing"],
    },
  ],
};
