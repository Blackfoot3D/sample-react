import React from "react";
import { stirrups_BM_1958 } from "./Artifacts/stirrups_BM_1958/stirrups_BM_1958";
//WalkingStick
import { wintercount_BM_1869 } from "./Artifacts/wintercount_BM_1869/wintercount_BM_1869";
//Arm Band
import { belt_BM_1945 } from "./Artifacts/belt_BM_1945/belt_BM_1945";

import { sheath_BM_1887 } from "./Artifacts/sheath_BM_1887/sheath_BM_1887";
import { pipe_BM_1850 } from "./Artifacts/pipe_BM_1850/pipe_BM_1850";
import { pipe_BM_1882 } from "./Artifacts/pipe_BM_1882/pipe_BM_1882";
import { dress_BM_1900 } from "./Artifacts/dress_BM_1900/dress_BM_1900";
import { scraper_BM_1930 } from "./Artifacts/scraper_BM_1930/scraper_BM_1930";
import { knife_BM_1860 } from "./Artifacts/knife_BM_1860/knife_BM_1860";
// import { knifesheath_BM_1869 } from "./Artifacts/sheath_BM_1869/sheath_BM_1869";
import { bag_BM_1903 } from "./Artifacts/bag_BM_1903/bag_BM_1903";
import { pipebowl_BM_1882 } from "./Artifacts/pipebowl_BM_1882/pipebowl_BM_1882";
// import { RedPipe } from "./Artifacts/RedPipe/RedPipe";
import { pouch_BM_1900 } from "./Artifacts/pouch_BM_1900/pouch_BM_1900";
import { awlcase_MAA_1909 } from "./Artifacts/awlcase_MAA_1909/awlcase_MAA_1909";
import { dauber_MAA_1999 } from "./Artifacts/dauber_MAA_1999/dauber_MAA_1999";
import { moccasins_MAA_1930 } from "./Artifacts/moccasins_MAA_1930/moccasins_MAA_1930";
import { bracelet_MAA_1929 } from "./Artifacts/bracelet_MAA_1929/bracelet_MAA_1929";
import { amulet_MAA_1929 } from "./Artifacts/amulet_MAA_1929/amulet_MAA_1929";
import { club_MAA_1911 } from "./Artifacts/club_MAA_1911/club_MAA_1911";
import { pipebag_MAA_1929 } from "./Artifacts/pipebag_MAA_1929/pipebag_MAA_1929";
import { rattle_MAA_1929 } from "./Artifacts/rattle_MAA_1929/rattle_MAA_1929";
import { bag_HM_1909 } from "./Artifacts/bag_HM_1909/bag_HM_1909";
import { buffalostone_HM_1909 } from "./Artifacts/buffalostone_HM_1909/buffalostone_HM_1909";
import { case_HM_1909 } from "./Artifacts/case_HM_1909/case_HM_1909";
import { headdresscase_HM_1909 } from "./Artifacts/headdresscase_HM_1909/headdresscase_HM_1909";
import { Template } from "./Artifacts/Template/Template";

//Imports for Menu Icons
import ExploreIcon from "./components/Images/ExploreIcon.svg";
import IntroIcon from "./components/Images/IntroIcon.svg";
import AboutIcon from "./components/Images/AboutIcon.svg";

import { Themes, defaultTheme } from "./Themes";
const AppState = {
  //An array of all of the models that can appear on the site.
  defaultTheme: defaultTheme,
  themes: Themes,
  models: [
    club_MAA_1911,
    belt_BM_1945,
    knife_BM_1860,
    sheath_BM_1887,
    dress_BM_1900,
    scraper_BM_1930,
    // Knife Belongs here
    bag_BM_1903,
    pipebowl_BM_1882,
    // RedPipe,
    pouch_BM_1900,
    awlcase_MAA_1909,
    dauber_MAA_1999,
    moccasins_MAA_1930,
    bracelet_MAA_1929,
    amulet_MAA_1929,
    pipebag_MAA_1929,
    rattle_MAA_1929,
    bag_HM_1909,
    buffalostone_HM_1909,
    case_HM_1909,
    headdresscase_HM_1909,
    stirrups_BM_1958,
    wintercount_BM_1869,
  ],

  //this value may be used eventually to store the current rotational angle of the model container ring.
  angle: 0,
  //the currently displayed model
  currentModel:     club_MAA_1911,

  //the default model, used when reloading, or viewing the page initially.
  // defaultModel: Knife,

  //category array.
  categories: [
    {
      title: "Materials",
      options: ["Hide", "Beads", "Quills", "Bone", "Wood", "Stone"],
    },
    {
      title: "Blackfoot Tribe",
      options: ["Piikani", "Amskapipiikani", "Siksika", "Kainai"],
    },
    {
      title: "Museum Collection",
      options: [
        "Museum of Archaeology and Anthropology",
        "The British Museum",
        "The Horniman Museum",
      ],
    },
    {
      title: "Theme",
      options: [
        "Clothing",
        "Child Rearing",
        "Tools",
        "Pipes",
        "Cases",
        "Paint",
      ],
    },
    // {
    //   title: "Theme2",
    //   options: [
    //     "Clothing",
    //     "Child Rearing",
    //     "Tools",
    //     "Pipes",
    //     "Cases",
    //     "Paint",
    //   ],
    // },
  ],

  //currently selected category.
  currentCategory: [
    {
      title: "Materials",
      options: "All",
    },
    {
      title: "Blackfoot Tribe",
      options: "All",
    },
    {
      title: "Museum Collection",
      options: "All",
    },
    {
      title: "Theme",
      options: "All",
    },
  ],

  // HAMBURGER MENU DESTINATIONS
  destinations: [
    {
      route: "/intro",
      title: "Intro",
      icon: IntroIcon,
    },
    {
      route: "/", //root directory
      title: "Explore",
      icon: ExploreIcon,
    },
    {
      route: "/About",
      title: "About",
      icon: AboutIcon,
    },
    // {
    //   route: "/About",
    //   title: "About 2",
    //   icon: AboutIcon,
    // },
    // {
    //   route: "/About",
    //   title: "About 3",
    //   icon: AboutIcon,
    // },
  ],
};

export default AppState;
