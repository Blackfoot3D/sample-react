import React, { Component, Suspense } from "react";
import MediaQuery from "react-responsive";
import TextBlock from "./TextBlock";
import QuoteBlock from "./QuoteBlock";
import ReferencesBlock from "./ReferencesBlock";
// import StoryBlock from "./StoryBlock";
// import ImageBlock from "./ImageBlock";
// import TranslationButton from "./TranslationButton";
import style from "./style/StoryContent.module.css";
// import { NavLink } from "react-router-dom";
import historyTranslation from "./Audio/t-rex-roar.mp3";
import storiesTranslation from "./Audio/t-rex-roar.mp3";
import NextButton from "./NextButton";
import _ from "lodash";
import HelpGifMaterials from "./Images/help-animation.gif";
import HelpGifDesign from "./Images/help-animation-design.gif";
const ImageBlock = React.lazy(() => import("./ImageBlock"));
const TranslationButton = React.lazy(() => import("./TranslationButton"));
// const HelpGif = React.lazy(() => import("./Images/help-animation.gif"));
var xDown = null;
var yDown = null;
export default class StoryContent extends Component {
  state = {
    largestMTitle: "",
    largestDTitle: "",
    // touchX: null,
    // touchY: null,
    routes: null,
  };

  /************************************************************************
   * When mounting the component, find the longest subtitle for each of
   * Materials and Design sections.
   * Then, call function from parent to ensure that this component is
   * in the DOM. Otherwise, smoothscroll will not function correctly.
   ************************************************************************/
  componentDidMount() {
    this.findLongestST();
    // this.props.mounted(true);
    var el = document.getElementById(
      `${this.props.currentModel.id}_storyContent`
    );
    el.addEventListener(
      "touchmove",
      _.debounce(this.handleTouchMove, 100, { trailing: true, leading: false })
    );
    el.addEventListener("touchstart", this.handleTouchStart);

    console.log("SC State:", this.props);
  }

  /************************************************************************
   * Function used to calculate the longest subtitle string for each of
   * Materials and Design. This longest string is then stored in the
   * component state. This value is then used in the DOM as a ghost element
   * in order to ensure correct spacing of absolutely placed subtitles.
   * Without this ghost element in the DOM, the subtitles either cannot
   * transition, or when they do, they overlap in a way that is not pleasing
   * to look at.
   * Arguments: none
   * Returns: none (state change)
   ************************************************************************/
  findLongestST = () => {
    //helper function to calculate longest string
    const getLongestText = (arr) =>
      arr.reduce(
        (savedText, text) =>
          text.length > savedText.length ? text : savedText,
        ""
      );
    //array of Materials subtitles
    var arM = [];
    //array of design subtitles
    var arD = [];
    //loop and store subtitles in the correct array.
    for (var i = 0; i < this.props.currentModel.Model.hotspots.length; i++) {
      if (this.props.currentModel.Model.hotspots[i].category === "materials") {
        arM.push(this.props.currentModel.Model.hotspots[i].name);
      } else if (
        this.props.currentModel.Model.hotspots[i].category === "design"
      ) {
        arD.push(this.props.currentModel.Model.hotspots[i].name);
      }
    }
    //set the state to the longest subtitle for both materials and
    //design respectively.
    this.setState({
      largestMTitle: getLongestText(arM),
      largestDTitle: getLongestText(arD),
    });
  };

  /************************************************************************
   * Function used to apply css to the outermost div of the StoryContent
   * component. Used to control whether smoothscroll should be active or
   * not. If it is enabled when it should not be, users will see an
   * unnecessary scrolling motion when visiting a url directly, or when
   * reloading the browser.
   * Arguments: none
   * Returns: css classes
   ************************************************************************/
  getParentContainerStyle = () => {
    //if we transition from anything into main or intro
    if (
      this.props.transition[1] === "main" ||
      this.props.transition[1] === "intro"
    ) {
      return [style.parentContainer];
    }
    //if we transition from main or intro into anything else
    else if (
      this.props.transition[0] === "main" ||
      this.props.transition[0] === "intro"
    ) {
      return [style.parentContainer, style.smoothScroll].join(" ");
    }
    //if we transition between routes not equal to main or intro //if ((this.props.transition[1] !== "main" ||this.props.transition[1] !== "intro"))
    else {
      return [style.parentContainer, style.smoothScroll].join(" ");
    }
  };

  /************************************************************************
   * Function used to apply css to the content container. Responsible for
   * applying the appropriate background color to each section.
   * Arguments:
   * object: artifact description object used to determine the panel color.
   * Returns: css classes
   ************************************************************************/
  getInnerColor = (object) => {
    if (object.title === "History") {
      return style.historyStyle;
    } else if (object.title === "Materials") {
      return style.materialsStyle;
    } else if (object.title === "Design") {
      return style.designStyle;
    } else if (object.title === "Stories") {
      return style.storiesStyle;
    }
  };

  /************************************************************************
   * Function used to style the back button for the materials section.
   * Arguments: none
   * Returns: css classes
   ************************************************************************/
  getMaterialsBackStyle = () => {
    if (this.props.materialsContent !== "intro") {
      return style.buttonStyle;
    } else {
      return style.buttonStyleHidden;
    }
  };

  /************************************************************************
   * Function used to style the back button for the design section.
   * Arguments: none
   * Returns: css classes
   ************************************************************************/
  getDesignBackStyle = () => {
    if (this.props.designContent !== "intro") {
      return style.buttonStyle;
    } else {
      return style.buttonStyleHidden;
    }
  };

  /************************************************************************
   * Function used to generate markup for the History section. Starts by
   * generating some static html, and subsequently maps through the
   * artifact's History description, and generates dynamic html for each.
   * Arguments:
   * object: the artifact's description.history object.
   * i: Mapping value to apply unique key to the markup.
   * Returns: html markup.
   ************************************************************************/
  renderHistory = (object, i) => {
    return (
      <div
        key={i}
        className={[style.container, this.getInnerColor(object)].join(" ")}
        id={`${this.props.currentModel.id}_${object.title.toLowerCase()}`}>
        <div className={style.titleBox}>
          <h1
            className={style.header}
            id={`${this.props.currentModel.id}_${object.title}_header`}>
            <div className={style.translationButtonBox}>
              <MediaQuery minWidth={801}>
                <Suspense fallback={<div>Loading...</div>}>
                  <TranslationButton
                    audio={historyTranslation}
                    size={71.25}
                    id={this.props.currentModel.id}
                    title={object.title}
                    section={"History"}
                  />
                </Suspense>
              </MediaQuery>
              <MediaQuery maxWidth={800}>
                <Suspense fallback={<div>Loading...</div>}>
                  <TranslationButton
                    audio={historyTranslation}
                    size={36}
                    id={this.props.currentModel.id}
                    title={object.title}
                    section={"History"}
                  />
                </Suspense>
              </MediaQuery>
            </div>
            Isskóóhtsiistsi
          </h1>
          <h2 className={style.subheader}>Past Times</h2>
        </div>
        {/*Map through the object's description.history sections*/}
        {object.content.map((object, i) =>
          this.renderSections(object, i, "History")
        )}
        <MediaQuery maxWidth={800}>
          <div
            style={{
              width: "100%",
              height: "max-content",
              direction: "rtl",
              padding: "0px 22px 35px 0px",
            }}>
            <NextButton
              currentModel={this.props.currentModel}
              setActiveRoute={this.props.setActiveRoute}
              style={style.historyStyle}
              to={"Materials"}
            />
          </div>
        </MediaQuery>
      </div>
    );
  };

  /************************************************************************
   * Function used to generate markup for the Stories section. Starts by
   * generating some static html, and subsequently maps through the
   * artifact's Story description, and generates dynamic html for each.
   * Arguments:
   * object: the artifact's description.stories object.
   * i: Mapping value to apply unique key to the markup.
   * Returns: html markup.
   ************************************************************************/
  renderStories = (object, i) => {
    return (
      <div
        key={i}
        className={[style.container, this.getInnerColor(object)].join(" ")}
        id={`${this.props.currentModel.id}_${object.title.toLowerCase()}`}>
        <div className={style.titleBox}>
          <h1
            className={style.header}
            id={`${this.props.currentModel.id}_${object.title}_header`}>
            <div className={style.translationButtonBox}>
              <Suspense fallback={<div>Loading...</div>}>
                <TranslationButton
                  audio={storiesTranslation}
                  size={71.25}
                  id={this.props.currentModel.id}
                  section={"Stories"}
                  title={"Stories"}
                />
              </Suspense>
            </div>
            Atsiníkssiistsi
          </h1>
          <h2 className={style.subheader}>Stories</h2>
        </div>
        {/* Map through the object's description.stories sections */}
        {object.content.map((object, i) =>
          this.renderSections(object, i, "Stories")
        )}
      </div>
    );
  };

  /************************************************************************
   * Function used to generate markup for the Materials section. Starts by
   * generating some static html, and subsequently maps through the
   * artifact's Materials description (hotspot initial description). The
   * function then iterates through the artifact's hotspots, and generates
   * markup for each. Content in this section is initially related to the
   * artifact's description.materials object. After interacting with the 3D
   * object's hotspots, this content will be dynamically replaced by the
   * content stored within the hotspot that was clicked.
   * Arguments:
   * object: the artifact's description.materials object.
   * uses props.currentModel to retrieve the artifact's hotspots
   * i: Mapping value to apply unique key to the markup.
   * Returns: html markup.
   ************************************************************************/
  renderMaterials = (object, i) => {
    return (
      <div
        key={i}
        // style={{ border: "1px solid red" }}
        className={[style.container, this.getInnerColor(object)].join(" ")}
        id={`${this.props.currentModel.id}_${object.title.toLowerCase()}`}>
        <button
          className={this.getMaterialsBackStyle()}
          onClick={this.props.onBackButton}>
          <span className={style.materialsStyle}>
            {"Back to Materials Intro"}
          </span>
        </button>
        <div className={style.titleBox}>
          <h1
            className={style.header2}
            id={`${this.props.currentModel.id}_${object.title}_header`}>
            Materials
          </h1>
          {/* Map through the artifact's hotspots, and render subtitles 
          overlapping the ghost element (for crossfade) */}
          {this.props.currentModel.Model.hotspots.map((object, i) =>
            this.renderHotspotTitles(object, i, "materials")
          )}
          {/* Render a subtitle ghost element to facilitate 
          the spacing of absolutely placed subtitles. */}
          <h2
            style={{
              pointerEvents: "none",
              opacity: "0",
              visibility: "hidden",
              // marginBottom: "29px",
            }}
            id={`${this.props.currentModel.id}_${object.title}_ghost`}
            className={style.subheader2}>
            {/* Use the largest materials subtitle so 
              nothing will fall out of the div. */}
            {this.state.largestMTitle}
          </h2>
        </div>
        <div
          className={this.getHotspotBlockStyle("intro", "materials")}
          id={`${this.props.currentModel.id}_intro`}>
          <div className={style.textBlock}>
            {/*Incase the content section has no title, check to see if it needs to be rendered. */}
            {/* <p>{`${object.description}`}</p> */}
            <TextBlock
              description={
                <div>
                  <p>
                    Interact with the blue hotspots on the 3D model to learn
                    about the item’s materials.
                  </p>
                </div>
              }
              currentModel={this.props.currentModel}
            />
            <Suspense fallback={<div>Loading...</div>}>
              <ImageBlock
                title={"HotSpot Instructional GIF"}
                // description={"Hello"}
                section={"Design"}
                url={HelpGifMaterials}
                key={i}
              />
            </Suspense>
            {object.content.map((object, i) =>
              this.renderSections(object, i, "Materials")
            )}
          </div>
          <MediaQuery maxWidth={800}>
            <div
              style={{
                width: "100%",
                height: "max-content",
                direction: "rtl",
                padding: "0px 22px 35px 0px",
                // position: "absolute",
                bottom: "0",
                // border: "1px solid red",
              }}>
              <NextButton
                currentModel={this.props.currentModel}
                setActiveRoute={this.props.setActiveRoute}
                style={style.materialsStyle}
                to={"Design"}
              />
            </div>
          </MediaQuery>
        </div>
        {/* Map through each hotspot in the artifact, and render
         the hotspots contents absolutely (for crossfade) */}
        {this.props.currentModel.Model.hotspots.map((object, i) => (
          <div
            key={i}
            id={`${this.props.currentModel.id}_materials_${object.name}`}>
            {this.renderHotspotContent(object, i, "materials")}{" "}
          </div>
        ))}
      </div>
    );
  };

  /************************************************************************
   * Function used to generate markup for the Design section. Starts by
   * generating some static html, and subsequently maps through the
   * artifact's Design description (hotspot initial description). The
   * function then iterates through the artifact's hotspots, and generates
   * markup for each. Content in this section is initially related to the
   * artifact's description.design object. After interacting with the 3D
   * object's hotspots, this content will be dynamically replaced by the
   * content stored within the hotspot that was clicked.
   * Arguments:
   * object: the artifact's description.design object.
   * uses props.currentModel to retrieve the artifact's hotspots
   * i: Mapping value to apply unique key to the markup.
   * Returns: html markup.
   ************************************************************************/
  renderDesign = (object, i) => {
    return (
      <div
        key={i}
        className={[style.container, this.getInnerColor(object)].join(" ")}
        id={`${this.props.currentModel.id}_${object.title.toLowerCase()}`}>
        <button
          className={this.getDesignBackStyle()}
          onClick={this.props.onBackButton}>
          <span className={style.designStyle}>{"Back to Design Intro"}</span>
        </button>
        <div className={style.titleBox}>
          <h1
            className={style.header2}
            id={`${this.props.currentModel.id}_${object.title}_header`}>
            Design
          </h1>
          {/* Map through the artifact's hotspots, and render subtitles 
          overlapping the ghost element (for crossfade) */}
          {this.props.currentModel.Model.hotspots.map((object, i) =>
            this.renderHotspotTitles(object, i, "design")
          )}
          {/* Render a subtitle ghost element to facilitate 
          the spacing of absolutely placed subtitles. */}
          <h2
            style={{
              pointerEvents: "none",
              opacity: "0",
            }}
            id={`${this.props.currentModel.id}_${object.title}_ghost`}
            className={style.subheader2}>
            {this.state.largestDTitle}
          </h2>
        </div>
        <div
          className={this.getHotspotBlockStyle("intro", "design")}
          id={`${this.props.currentModel.id}_design_intro`}>
          <div className={style.textBlock}>
            <TextBlock
              description={
                <div>
                  <p>
                    Interact with the blue hotspots on the 3D model to learn
                    about the item’s design.
                  </p>
                </div>
              }
              currentModel={this.props.currentModel}
            />
            <Suspense fallback={<div>Loading...</div>}>
              <ImageBlock
                title={"HotSpot Instructional GIF"}
                // description={"Hello"}
                section={"Design"}
                url={HelpGifDesign}
                key={i}
              />
            </Suspense>
            {/*Incase the content section has no title, check to see if it needs to be rendered. */}
            {object.content.map((object, i) =>
              this.renderSections(object, i, "Design")
            )}
          </div>
        </div>
        {/* Map through each hotspot in the artifact, and render
         the hotspots contents absolutely (for crossfade) */}
        {this.props.currentModel.Model.hotspots.map((object, i) => (
          <div
            key={i}
            id={`${this.props.currentModel.id}_design_${object.name}`}>
            {this.renderHotspotContent(object, i, "design")}
          </div>
        ))}
      </div>
    );
  };
  scrollTo = (place) => {};
  /************************************************************************
   * Function used to check which hotspot content block should be visible
   * based on which hotspot is active. If no hotspot is active, the content
   * is set to the intro content (description.materials, or
   * description.design).
   * Arguments:
   * current: the currently active hotspot name.
   * tag: used to indicate where the function is called from (materials, or
   * design)
   * Returns: css classes.
   ************************************************************************/
  getHotspotBlockStyle = (current, tag) => {
    console.log("In getHotspotBlockSyle");
    console.log("Block Style: ", current);
    var elem = document.getElementById(
      `${this.props.currentModel.id}_${tag}_${current}`
    );
    console.log("Block Style", elem);
    if (tag === "materials") {
      if (this.props.materialsContent === current) {
        if (elem !== null) {
          // setTimeout(function () {
          //elem.style.display = "block";
          // document
          //   .getElementById(`${this.props.currentModel.id}_materials`)
          //   .scrollIntoView({ block: "start", inline: "nearest" });
          // }, 500);
        }
        return [style.hotSpotContentBox, style.HSContentVisible].join(" ");
      } else {
        if (elem !== null) {
          //setTimeout(
          //function () {
          //elem.style.display = "none";
          //     document
          //       .getElementById(`${this.props.currentModel.id}_materials`)
          //       .scrollIntoView({ block: "start", inline: "nearest" });
          //},
          //1000
          //   this.props
          //);
        }
        return [style.hotSpotContentBox, style.HSContentHidden].join(" ");
      }
    } else if (tag === "design") {
      if (this.props.designContent === current) {
        if (elem !== null) {
          // setTimeout(function () {
          //elem.style.display = "block";
          // this.scrollTo("design")
          // document
          //   .getElementById(`${this.props.currentModel.id}_design`)
          //   .scrollIntoView({ block: "start", inline: "nearest" });
          // }, 500);
        }
        return [style.hotSpotContentBox, style.HSContentVisible].join(" ");
      } else {
        if (elem !== null) {
          //setTimeout(
          //function () {
          // elem.style.display = "none";
          //     // this.scrollTo("design")
          //},
          //1000
          //   this.props
          //);
        }
        return [style.hotSpotContentBox, style.HSContentHidden].join(" ");
      }
    }
  };

  /************************************************************************
   * Function used to generate markup for the hotspot content.
   * Arguments:
   * object: the currently iterated hotspot object.
   * i: Mapping value to apply unique key to the markup.
   * tag: used to indicate where the function is called from (materials, or
   * design)
   * Returns: html markup.
   ************************************************************************/
  renderHotspotContent = (object, i, tag) => {
    //style individual hotspot contents
    return (
      <div
        className={this.getHotspotBlockStyle(object.name, tag)}
        key={i}
        id={`${this.props.currentModel.id}_${tag}_${object.name}`}>
        {object.content.map((obj, i) =>
          this.renderSections(obj, i, object.category)
        )}
        <MediaQuery maxWidth={800}>
          <div
            style={{
              width: "100%",
              height: "max-content",
              direction: "rtl",
              padding: "0px 22px 35px 0px",
              // position: "absolute",
              bottom: "0",
              // border: "1px solid red",
            }}>
            {tag !== "design" && (
              <NextButton
                currentModel={this.props.currentModel}
                setActiveRoute={this.props.setActiveRoute}
                style={style.materialsStyle}
                to={"Design"}
              />
            )}
          </div>
        </MediaQuery>
      </div>
    );
  };

  /************************************************************************
   * Function used to generate markup for the hotspot titles.
   * Arguments:
   * object: the currently iterated hotspot object.
   * i: Mapping value to apply unique key to the markup.
   * tag: used to indicate where the function is called from (materials, or
   * design)
   * Returns: html markup.
   ************************************************************************/
  renderHotspotTitles = (object, i, tag) => {
    return (
      <h2
        style={{
          position: "absolute",
          // paddingRight: "5.5%",
          transition: "0.5s",
        }}
        className={this.getHotspotTitleStyle(object.name, tag)}
        key={i}>
        {object.name}
      </h2>
    );
  };

  /************************************************************************
   * Function used to determine which subtitle should be visible, based on
   * the active hotspot.
   * Arguments:
   * current: the current hotspot.
   * tag: value used to indicate where the function was called from
   * (materials, or design)
   * tag: used to indicate where the function is called from (materials, or
   * design)
   * Returns: css class styles.
   ************************************************************************/
  getHotspotTitleStyle = (current, tag) => {
    if (tag === "materials") {
      if (this.props.materialsContent === current) {
        return [style.HSContentVisible, style.subheader2].join(" ");
      } else {
        return [style.HSContentHidden, style.subheader2].join(" ");
      }
    } else if (tag === "design") {
      if (this.props.designContent === current) {
        return [style.HSContentVisible, style.subheader2].join(" ");
      } else {
        return [style.HSContentHidden, style.subheader2].join(" ");
      }
    }
  };

  /************************************************************************
   * Function used to determine the type of content block to be rendered, by
   * checking object.type and passes control to the appropriate helper
   * function to render that block's content.
   * Arguments:
   * object: the content block to be rendered. This comes from the map
   * function in renderIntro().
   * i: The key value from the mapping function.
   * Returns: a block of markup corresponding to the type of content being
   * rendered.
   ************************************************************************/
  renderSections = (object, i, section) => {
    // If the type of content block is text
    if (object.type === "text") {
      // console.log("render Text Block", object);
      return (
        <TextBlock
          title={object.title}
          titleBlackfoot={object.titleBlackfoot}
          description={object.description}
          translationAudio={object.translationAudio}
          currentModel={this.props.currentModel}
          section={section}
          i={i}
          key={i}
        />
      );
    }
    // if the type of content block is a quote
    else if (object.type === "quote") {
      return (
        <QuoteBlock
          quote={object.quote}
          person={object.person}
          section={section}
          i={i}
          key={i}
        />
      );
    }
    //stories are being excluded for now
    //if the type of content block is a story
    // else if (object.type === "story") {
    //   return (
    //     <StoryBlock
    //       title={object.title}
    //       description={object.description}
    //       link={object.link}
    //       author={object.author}
    //       titleBlackfoot={object.titleBlackfoot}
    //       section={section}
    //       i={i}
    //     />
    //   );
    // }
    //if the type of content is an image
    else if (object.type === "image") {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <ImageBlock
            title={object.title}
            description={object.description}
            section={section}
            url={object.url}
            key={i}
          />
        </Suspense>
      );
    }
    //if the type of content is references
    else if (object.type === "references") {
      return (
        <ReferencesBlock
          references={object.references}
          i={i}
          section={section}
          key={i}
        />
      );
    }
  };

  /************************************************************************
   * Function used as a controller for rendering content for each section.
   * Arguments:
   * object: the "text" type content block
   * i: the Map function key value.
   * Returns: A block of text markup based on the object argument.
   ************************************************************************/
  renderContent = (object, i) => {
    if (object.title === "History") {
      return this.renderHistory(object, i);
    }
    //stories are being excluded for now.
    // else if (object.title === "Stories") {
    //   return this.renderStories(object, i);
    // }
    else if (object.title === "Design") {
      return this.renderDesign(object, i);
    } else if (object.title === "Materials") {
      return this.renderMaterials(object, i);
    }
  };
  goto = async (loc) => {
    console.log("clicked nav", loc);
    if (loc !== "intro") {
      document
        .getElementById(`${this.props.currentModel.id}_${loc}`)
        .scrollIntoView({
          block: "center",
          behavior: "auto",
        });
    }
    // setTimeout(this.props.setActiveRoute(loc), 1000);
    this.props.setActiveRoute(loc);
  };

  handleSwipe = async (direction) => {
    var currentI = this.props.routes.indexOf(this.props.currentRoute);

    if (direction === "left") {
      if (currentI + 1 === this.props.routes.length) {
        return;
      } else {
        await this.goto(this.props.routes[currentI + 1]);
      }
    } else if (direction === "right") {
      if (currentI === 0) {
        return;
      } else {
        await this.goto(this.props.routes[currentI - 1]);
      }
    }
  };
  getTouches = (evt) => {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  };
  handleTouchStart = (evt) => {
    const firstTouch = this.getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  handleTouchMove = (evt) => {
    console.log("touchMove", evt);
    if (!xDown || !yDown) {
      return;
    }
    var currentI = this.props.routes.indexOf(this.props.currentRoute);
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        console.log("swipe left");
        this.handleSwipe("left");
        // this.goto(this.props.routes[currentI + 1]);
      } else {
        /* right swipe */
        console.log("swipe right");
        this.handleSwipe("right");
        // this.goto(this.props.routes[currentI - 1]);
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
        console.log("swipe up");
      } else {
        /* down swipe */
        console.log("swipe down");
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  render() {
    return (
      <div
        className={this.getParentContainerStyle()}
        id={`${this.props.currentModel.id}_storyContent`}
        // onTouchStart={(e) => {
        //   this.handleTouchStart(e);
        // }}
        // onTouchMove={(e) => {
        //   dhandleTouchMove(e);
        // }}
        // onTouchEnd={(e) => {
        //   e.preventDefault();
        //   setTimeout(
        //     () => {
        //       console.log("touchEnd", e);
        //     },
        //     1000,
        //     false
        //   );
        //   // console.log("touchEnd", e);
        // }}
      >
        {this.props.currentModel.description
          .slice(1)
          .map((object, i) => this.renderContent(object, i))}
      </div>
    );
  }
}
