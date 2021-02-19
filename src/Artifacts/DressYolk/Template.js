import Model from "./Model/Template.glb";
import Icon from "./Model/TemplateIcon.png";
import PNG from "./Model/ezgif.com-video-to-apng (1).png";
export var Template = {
  // unique id. I dont specifically think this is neccesary at the moment, but may prove useful later in development.
  // If not, we can remove it.
  id: 1,
  //Name of the Artifact.
  name: "Template",
  translation: "Translation",
  //mdl: the actual 3D object file (.glb or .gltf) is imported at the top of the
  //file, and associated to the model here.
  // mdl: Sheath,
  png: PNG,
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
      content:
        "Template initial description Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quo quam enim nihil obcaecati modi sed dignissimos accusamus vero. Expedita culpa possimus deleniti dolorem quibusdam. Sed, libero quo illo asperiores amet consequatur eum error repudiandae est perspiciatis quidem veniam quasi tenetur sunt harum odit tempore voluptatibus nihil aliquam reiciendis. Temporibus?",
    },
    {
      title: "History",
      content:
        "Template Provenance content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!",
    },
    {
      title: "Materials",
      content:
        "Template Historical Context Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!",
    },
    {
      title: "Design",
      content:
        "Template Cultural Context Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!",
    },
    {
      title: "Stories",
      content:
        "Template Location Details Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!",
    },
    // {
    //   title: "Related Objects",
    //   content: ["Beading", "Deerhide"],
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
      options: ["All"],
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
      options: ["All"],
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
      options: ["All"],
    },
  ],
};
