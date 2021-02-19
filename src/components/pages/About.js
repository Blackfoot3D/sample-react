import React, { Component } from "react";
import style from "../style/About.module.css";
import MediaQuery from "react-responsive";
// const isMobile = window.matchMedia("max-width: 800px").matches;
export default class About extends Component {
  state = {
    activeSection: "The Project",
    activeSubsection: "Project Goals",
    sections: [
      {
        name: "The Project",
        subsections: [
          "Project Goals",
          "Protocols and Process",
          "Website",
          "In-person Events",
        ],
      },
      {
        name: "Technologies",
        subsections: [
          "Introduction",
          "Photogrammetry & RTI",
          "Website",
          "Mazi",
        ],
      },
      {
        name: "People",
        subsections: [
          "Introduction",
          "Elders",
          "Collaborators",
          "Grad Students / Research Assistants",
        ],
      },
      {
        name: "Partners",
        subsections: ["Museums", "Blackfoot Organizations"],
      },
      {
        name: "Funding",
        subsections: ["Introduction", "Funders"],
      },
    ],
    doit: 0,
  };

  componentDidUpdate() {
    //On update we may want to change the active image here.
  }
  componentDidMount() {
    this.getActiveSection();
    // this.shiftLight(1);
  }

  componentWillUnmount() {
    // this.shiftLight(0);
  }

  /**************************************************
   * Function used to shift the lighting button over
   * slightly, so it does not interfere with the rest
   * of the page.
   **************************************************/
  shiftLight = (i) => {
    var light = document.getElementById("lighting_button");
    if (i === 1) {
      light.classList.add(style.lightShift);
    } else {
      light.classList.remove(style.lightShift);
    }
  };

  setSectionStyle = (section) => {
    if (this.state.activeSection === section) {
      return style.accordionItemActive;
    } else {
      return;
    }
  };

  getSubsectionStyle = (section, subsection) => {
    if (
      this.state.activeSection === section &&
      this.state.activeSubsection === subsection
    ) {
      return style.accordionItemActive;
    } else {
      return;
    }
  };
  clickSection = (section, subsection) => {
    this.setAccordionVis();
    setTimeout(() => {
      this.setState({ activeSection: section, activeSubsection: subsection });
    }, 900);
  };

  setActiveSection = (section, subsection) => {
    this.setState({ activeSection: section, activeSubsection: subsection });
  };

  getActiveSection = () => {
    console.clear();
    // console.log("getActiveSection");
    for (var i = 0; i < this.state.sections.length; i++) {
      for (var j = 0; j < this.state.sections[i].subsections.length; j++) {
        var elem = document.getElementById(
          `${this.state.sections[i].name}_${this.state.sections[i].subsections[j]}`
        );
        var inView = this.isScrolledIntoView(elem);
        // console.log("elemCheck", elem);
        if (inView) {
          console.log("elemInView", elem.id);
          // var image = document.getElementById("About_ImageContainer");
          // image.style.backgroundColor = "red";
          var sec = elem.id.split("_");
          this.setActiveSection(sec[0], sec[1]);
          return;
        }
      }
    }
  };

  toggleAccordion = (section) => {
    var el = document.getElementById(`Accordion_${section}`);
    el.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    var panel = el.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  isScrolledIntoView = (el) => {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible =
      elemTop <= window.innerHeight &&
      elemBottom >= window.innerHeight - rect.height / 2 &&
      !(elemBottom <= window.innerHeight / 2);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  };

  scrollTo = (hash) => {
    var textBlock = document.getElementById("About_TextContainer");

    if (hash !== "") {
      textBlock.animate(
        {
          scrollTop: document.getElementById(hash).top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  };

  renderAccordion = () => {
    return (
      <div className={style.accordionContainer} id={"about_accordionContainer"}>
        <MediaQuery maxWidth={800}>
          <button
            className={style.closebutton}
            onClick={() => this.setAccordionVis()}>
            &#x2715;
          </button>
        </MediaQuery>
        <div className={style.accordion}>
          {this.state.sections.map((section, i) => (
            <>
              <button
                className={this.setSectionStyle(section.name)}
                onClick={() => this.toggleAccordion(`${section.name}`)}
                id={`Accordion_${section.name}`}>
                {/* <p className={this.setSectionStyle(section.name)}> */}
                {section.name}
                {/* </p> */}
              </button>
              <div className={style.panel}>
                {section.subsections.map((subsection, i) => (
                  <a href={`#${section.name}_${subsection}`}>
                    <p
                      onClick={() =>
                        this.clickSection(section.name, subsection)
                      }
                      className={this.getSubsectionStyle(
                        section.name,
                        subsection
                      )}>
                      {subsection}
                    </p>
                  </a>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    );
  };

  onScroll = () => {
    // window.onresize = function(){
    clearTimeout(this.state.doit);
    this.state.doit = setTimeout(() => this.getActiveSection(), 100);
  };

  renderTextContainer = () => {
    return (
      <div
        className={style.textContainer}
        id="About_TextContainer"
        onScroll={() => this.onScroll()}>
        {/* About the Project */}
        <div>
          {/* <a href="#ProjectGoals"> */}
          <section id="The Project_Project Goals">
            <h1>Project Goals</h1>
            <h3>
              Create highly detailed digital models of artifacts in museum
              collections in England.
            </h3>
            <div className={style.listContainer}>
              <ol>
                <li>
                  <span>
                    <a href="www.youtube.com">In July 2019, the team</a>,
                    including Elders from the Blackfoot Confederacy, travelled
                    to England to visit and image the objects.
                  </span>
                </li>
                <li>
                  <span>
                    Our UK team members used sophisticated digital techniques to
                    produce images of the objects with incredible detail.
                  </span>
                </li>
                <li>
                  <span>
                    We are currently experimenting with adding movement to the
                    models to simulate material qualities.
                  </span>
                </li>
              </ol>
            </div>
            <h3>
              Enable artists and community to experience the knowledge embedded
              in the objects; to see the materials, techniques, and skills that
              connect to Blackfoot culture, history, and land.
            </h3>
            <div className={style.listContainer}>
              <ol>
                <li>
                  <span>
                    an innovative microsite that displays the interactive
                    digital models and their associated knowledge,
                  </span>
                </li>
                <li>
                  <span>
                    community gatherings where groups can view and discuss the
                    artefacts, share knowledge, try the digital tools used to
                    create the models, and learn beadwork,
                  </span>
                </li>
                <li>
                  <span>
                    exhibitions and related public programming featuring work by
                    Indigenous and non-indigenous artists who have responded to
                    the artefacts
                  </span>
                </li>
              </ol>
            </div>
          </section>
          {/* </a> */}
          <section id="The Project_Protocols and Process">
            <h1>Protocols and process</h1>
            <h3>
              Elders from Kainai, Piikani, Siksika, and Amskapipiikani are
              directing the project.
            </h3>
            <p>
              The project emerged from conversations with Blackfoot Elders. We
              meet regularly to discuss various aspects of the project, receive
              direction, and ensure that protocols are followed.
            </p>
            <h3>
              All data generated through the project will become part of the
              Blackfoot Digital Library and therefore belongs to the Blackfoot
              people.
            </h3>
            <p>
              Unless otherwise specified, copyright and intellectual property is
              held by the Blackfoot people and administered by the Blackfoot
              Digital Library.
            </p>
            <h3>
              Only images of non-sacred objects will be publicly displayed.
            </h3>
            <p>
              All objects that are displayed on the website or during events
              have been identified as non-sacred and non-ceremonial by our Elder
              advisory. They were chosen based on their utilitarian use and
              general value for the community to see.
            </p>
            <h3>
              We are only drawing on public knowledge to describe the artefacts.
            </h3>
            <p>
              All information displayed with the items is offered and vetted by
              Elders, pulled from public sources, including websites, books, and
              exhibits.
            </p>
          </section>
          <section id="The Project_Website">
            <h1>Website</h1>
            <p>
              This microsite has been created for the Blackfoot Digital Library
              (BDL) with the goal of providing access to the digital objects and
              re-uniting them with their associated knowledge and culture.{" "}
            </p>
            <p>
              In the introduction to the BDL, Narcisse Blood states that new and
              changing technologies can work against the people or be harnessed
              and used in their own worldview (Blood, n.d.). To harness 3D
              models in the Blackfoot worldview, our team will research and
              develop a custom solution for presenting the Blackfoot objects
              with their cultural context, histories, and stories.{" "}
            </p>
            <p>
              Cultural objects carry value that is far more significant than
              their material or physical form; our challenge will be to find
              ways of making the digital models meaningful, paying close
              attention to metadata, annotation, and animation.
            </p>
          </section>
          <section id="The Project_In-person Events">
            <h1>In-person Events</h1>
            <h3>Exhibitions</h3>
            <p>
              In the Spring 2020 semester at the UofL, Students in Jackson
              2Bears’ Indigenous Art Studio students made artwork responding to
              the project and the artefacts. Their work would have been
              exhibited in the Hess Gallery on March 19, 2020, however the
              COVID-19 pandemic led to the cancellation of the exhibition.
              Future exhibitions in the UK will include work from Blackfoot
              artists and students at Central Saint Martins.
            </p>
            <h3>Community Gatherings</h3>
            <p>
              In the Fall of 2020, we will also be gathering with Blackfoot
              artists, schools, and community groups. Through these gatherings
              we hope to find out what people think and feel about this work and
              share skills related to the digital process and to traditional art
              making.
            </p>
            <h3>The events will include demonstrations with:</h3>
            <p>
              <b>Photogrammetry:</b> how digital 3D models of objects are made,
              processed in software, and converted into finished videos and
              models for study.{" "}
            </p>
            <p>
              <b>RTI:</b> revealing surface markings of objects that can’t be
              seen with the naked eye.
            </p>
            <p>
              <b>3D printing:</b> turning digital scans of objects into a 3D
              prints.
            </p>
            <p>
              <b>Beading:</b> taught by Blackfoot artists.
            </p>
          </section>
        </div>
        {/* Technologies */}
        <div>
          <section id="Technologies_Introduction">
            {/* <h1 className={style.introPad}>Introduction</h1> */}
            <h2>
              <b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>{" "}
              Sit harum ullam non illum sunt voluptatibus dicta rem sint.
              Consequuntur, nobis.
            </h2>
          </section>
          <section id="Technologies_Photogrammetry & RTI">
            <h1>Photogrammetry & RTI</h1>
            <h3>
              Louisa Minkin, Ian Dawson, Tom Allison, and Andy Jones have
              developed sophisticated techniques to produce images of museum
              artifacts with incredible detail, using photogrammetry and
              reflectance transformation imaging (RTI). These techniques produce
              a high-resolution representation which can then be interacted with
              in virtual spaces.{" "}
            </h3>
            <p>
              <b>Photogrammetry</b> is a photographic process that creates an
              extremely dense and precise textured 3D model. Tom Allison… Anna
              Nicolova
            </p>
            <p>
              <b>RTI</b> is a photographic method that captures a surface’s
              shape and colour. The resulting digital file can be digitally
              interacted with as if with a raking light, revealing detailed
              surface information. Ian Dawson...
            </p>
            <p>
              Hundreds of photographs with a moving light source are used to
              make the interactive image.
            </p>
          </section>
          <section id="Technologies_Website">
            <h1>Website</h1>
            <p>Model-Viewer</p>
            <p>GLTF</p>
            <p>RTI Web Viewer</p>
          </section>
          <section id="Technologies_Mazi">
            <h1>Mazi</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              minima, ea quod delectus corporis temporibus itaque voluptatibus
              minus ab pariatur vero sunt deserunt, similique distinctio
              inventore eaque earum odit iure? Ipsa optio aut facilis nihil rem
              hic commodi fuga quae. Recusandae accusamus enim modi unde impedit
              sapiente? Ab atque officiis unde quaerat suscipit cum inventore
              in! Ipsam non quae magni velit neque nihil, quidem quam sunt
              placeat eius perspiciatis at necessitatibus qui quaerat magnam
              commodi libero dolor in facilis blanditiis! Culpa optio hic,
              cumque, magni vitae laboriosam obcaecati, ad laudantium explicabo
              blanditiis odit beatae quasi quia sunt corporis fuga ipsa?
            </p>
          </section>
        </div>
        {/*People*/}
        <div>
          <section id="People_Introduction">
            {/* <h1>Introduction</h1> */}
            {/* <h1 className={style.introPad}>Introduction</h1> */}
            <h2>
              <b>
                We are a group of Blackfoot-led Indigenous and non-Indigenous
                researchers,
              </b>{" "}
              artists, students, and Elders working to connect historical
              Blackfoot objects held in collections in Britain with Blackfoot
              traditions and culture.
            </h2>
            <p>
              Thank you to all the Elders and individuals that have also
              provided input on this project.
            </p>
          </section>
          <section id="People_Elders">
            <h1>Blackfoot Elder Advisory Group</h1>
            <ul>
              <li>
                <span>Jerry Potts</span>
              </li>
              <li>
                <span>Velma Crowshoe</span>
              </li>
              <li>
                <span>Martin Heavy Head</span>
              </li>
              <li>
                <span>Dr. Leroy Little Bear</span>
              </li>
              <li>
                <span>Amethyst First Rider</span>
              </li>
              <li>
                <span>Kent Ayoungman</span>
              </li>
              <li>
                <span>Linda Little Chief</span>
              </li>
              <li>
                <span>John Murray</span>
              </li>
              <li>
                <span>Carol Murray</span>
              </li>
            </ul>
          </section>
          <section id="People_Collaborators">
            <h1>Collaborators</h1>
            <ul>
              <li>
                <span>Christine Clark, Assistant Professor, New Media</span>
              </li>
              <li>
                <span>Josephine Mills, Director/Curator, UofL Art Gallery</span>
              </li>
              <li>
                <span>
                  Danielle Heavy Head, Liaison, Blackfoot Digital Library{" "}
                </span>
              </li>
              <li>
                <span>
                  Louisa Minkin, Course Leader for MA Fine Art, Central Saint
                  Martins
                </span>
              </li>
              <li>
                <span>
                  Ian Dawson, Critical Practices Research Group, University of
                  Southampton.
                </span>
              </li>
              <li>
                <span>
                  Andy Jones, Professor of Archaeology, University of
                  Southampton
                </span>
              </li>
              <li>
                <span>Jackson 2Bears, Assistant Professor, Art</span>
              </li>
              <li>
                <span>Marcus Dostie, Instructor, Geography</span>
              </li>
            </ul>
          </section>
          <section id="People_Grad Students / Research Assistants">
            <h1>Grad Students / Research Assistants</h1>
            <ul>
              <li>
                <span>Kirsten Meiszinger Project Coordinator</span>
              </li>
              <li>
                <span>
                  Tom Allison, Artist and technical assistant, Central Saint
                  Martins
                </span>
              </li>
              <li>
                <span>
                  Melissa Shouting, Research Assistant, Health Science
                </span>
              </li>
              <li>
                <span>Andrea Fox, Research Assistant</span>
              </li>
              <li>
                <span>Migueltzinta Solis, Research Assistant, Art </span>
              </li>
              <li>
                <span>Simone Bowes</span>
              </li>
              <li>
                <span>Calvin Lloyd</span>
              </li>
              <li>
                <span>Anna Nikolova</span>
              </li>
              <li>
                <span>Justin Petluk</span>
              </li>
              <li>
                <span>Kale Fox</span>
              </li>
              <li>
                <span>Chataya First Rider</span>
              </li>
            </ul>
          </section>
          {/* Partners */}
          <div>
            <section id="Partners_Museums">
              <h1>Museums</h1>
              <h2>
                <b>Visiting Collections in England</b> In July 2019, members of
                our research team travelled to England with Elders from the
                Blackfoot Confederacy and Blackfoot students. The goal of the
                trip was to visit items in three museum collections and select
                items to capture with spatial photography.
              </h2>
              <h3>Museum of Archeology and Anthropology, Cambridge.</h3>
              <p>
                We were hosted by Dr. Anita Herle (Senior Curator) Rachel Hand
                (Collections Manager), and Dr. Jocelyne Dudding (Manager of
                Photograph Collection) for two days. Dozens of items were pulled
                from the collection stores for the Elders to view and discuss.
                Of these, 10 artifacts were selected by the Elders to be imaged
                with photogrammetry and RTI, including a beaded awl case,
                moccasins, a quillwork bracelet, and a swan- foot bag.{" "}
              </p>
              <h3>The British Museum, London</h3>
              <p>
                We were hosted by Amber Lincoln, curator of the Americas, and
                Cynthia McGowan, Collection Manager. The British Museum’s
                collection of Blackfoot artifacts is extensive. Dozens of items
                were pulled from the collection for the Elders to view, and 17
                were imaged with photogrammetry and RTI, including a girls
                dress, several knife sheaths, beaded belts, and a winter count
                robe
              </p>
              <h3>Horniman Museum and Gardens, London</h3>
              <p>
                We were hosted by Robert Storrie, Keeper of Anthropology, who
                assisted us in the workroom and gave us a tour of the museum. Of
                the 8 items viewed by the Elders, 4 were selected to be captured
                with photogrammetry and RTI, including a buffalo foetus bag, two
                headdress cases, and an iniiskim.
              </p>
            </section>
            <section id="Partners_Blackfoot Organizations">
              <h1>Blackfoot Organizations</h1>
              <h3>KEPA</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis dolores, voluptate vero iure sequi fuga aliquam
                inventore repellendus mollitia recusandae minus voluptas quidem
                nobis enim sint neque cumque commodi totam error suscipit est
                nihil! Similique suscipit nostrum accusamus ducimus magni minima
                repellendus dolorem nesciunt rerum? Alias repudiandae obcaecati
                libero laborum.
              </p>
              <h3>Piikani Board of Education</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, minus quidem! Quas inventore modi nesciunt dignissimos
                nisi rem minima quibusdam, esse facere quos saepe minus nulla
                natus hic dolor a architecto eaque animi sapiente quidem
                excepturi vero. Fuga nesciunt porro nihil eveniet. Officia
                debitis, illo commodi iusto porro consequuntur id doloribus cum
                voluptates reiciendis dolorem aliquam facilis. Obcaecati
                possimus et nulla ea laborum quo in suscipit molestiae saepe qui
                velit a esse, voluptas cum quaerat dolores vero consequatur
                dolorum! Quaerat dolores excepturi nihil nisi asperiores, magnam
                esse officia fugiat ut quae, sequi sit laborum ea molestias amet
                eveniet corrupti. Saepe?
              </p>
            </section>
          </div>
          {/* Funding */}
          <div>
            <section id="Funding_Introduction">
              <h2>
                <b>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</b>{" "}
                Sit excepturi omnis, nisi, adipisci quas, ad ex aspernatur
                exercitationem odio cumque harum temporibus quasi repudiandae
                voluptate! Aliquam repellat nobis iusto fugit neque dicta quos
                eaque hic laudantium dolores, blanditiis exercitationem, aliquid
                culpa nisi reiciendis.
              </h2>
            </section>
            <section id="Funding_Funders">
              <h1>Funders</h1>
              <h3>SSHRC</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
                laboriosam? Cum nihil ea facere et temporibus atque sapiente
                odio corporis beatae quibusdam, quisquam nemo officiis.
              </p>
              <h3>ULRF</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                repellendus assumenda laudantium quasi et vitae est voluptates
                atque nam dolores id repellat veritatis illo quos consequuntur
                eligendi temporibus voluptatibus quaerat!
              </p>
              <h3>CCA</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                dolor voluptatem numquam temporibus eius minus odio at facilis
                ratione recusandae.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  };

  renderImageContainer = () => {
    return (
      <div className={style.imageContainer} id="About_ImageContainer"></div>
    );
  };

  setAccordionVis = () => {
    console.log("ham clicked");
    var acc = document.getElementById("about_accordionContainer");
    acc.classList.toggle(style.show);
  };
  render() {
    return (
      <div className={style.main}>
        <MediaQuery maxWidth={800}>
          <div className={style.hamburgerContainer}>
            <div
              className={style.hamburgerIcon}
              onClick={() => this.setAccordionVis()}>
              &#9776;
            </div>
            <h1>{this.state.activeSection}</h1>
          </div>
        </MediaQuery>
        {this.renderAccordion()}
        {this.renderTextContainer()}
        <MediaQuery minWidth={801}>{this.renderImageContainer()}</MediaQuery>
      </div>
    );
  }
}
