import React, { Component } from "react";
import style from "./style/StoryContent.module.css";
import TextBlock from "./TextBlock";
import QuoteBlock from "./QuoteBlock";
import ImageBlock from "./ImageBlock";
import ReferencesBlock from "./ReferencesBlock";
import TranslationButton from "./TranslationButton";
import NextButton from "./NextButton";
import MediaQuery from "react-responsive";
import _ from "lodash";
var xDown = null;
var yDown = null;
// const TranslationButton = React.lazy(() => import("./TranslationButton"));
/************************************************************************
 * IntroContent class component is responsible for rendering the content
 * which is visible in the IntroPanel, within the artifact detail pages.
 ************************************************************************/
export default class IntroContent extends Component {
  /************************************************************************
   * On component mount, add a listener for determining the placement of
   * the intro content block.
   ************************************************************************/
  componentDidMount() {
    window.addEventListener("resize", this.resizeIntro, false);
    setTimeout(() => this.resizeIntro(), 300);
    this.resizeIntro();

    var el = document.getElementById(
      `${this.props.currentModel.id}_introContent`
    );

    el.addEventListener(
      "touchmove",
      _.debounce(this.handleTouchMove, 100, { trailing: true, leading: false })
    );
    el.addEventListener("touchstart", this.handleTouchStart);
  }

  /************************************************************************
   * Function used for setting the css classes of the parent div for the
   * intro content block.
   ************************************************************************/
  getParentContainerStyle = () => {
    //if we transition from anything into main or intro
    if (
      this.props.transition[1] === "main" ||
      this.props.transition[1] === "intro"
    ) {
      return [style.parentContainerIntro];
    }
    //if we transition from main or intro into anything else
    else if (
      this.props.transition[0] === "main" ||
      this.props.transition[0] === "intro"
    ) {
      return [style.parentContainerIntro, style.smoothScroll].join(" ");
    }
    //if we transition between routes not equal to main or intro //if ((this.props.transition[1] !== "main" ||this.props.transition[1] !== "intro"))
    else {
      return [style.parentContainerIntro, style.smoothScroll].join(" ");
    }
  };

  /************************************************************************
   * Function used for resizing, and placing the Intro content block. This
   * placement and sizing is done in relation to the ModelNameBox component
   * that appears in the story pages. This function prevents the intro text
   * from being covered or overlapped by the ModelNameBox.
   ************************************************************************/
  resizeIntro = () => {
    //get the hidden Ghose Element which represents the max-size
    //of the ModelNameBox component
    var modelNameBox = document.getElementById(
      `${this.props.currentModel.id}_modelNameBoxLarge`
    );

    var mnb = document.getElementById(
      `${this.props.currentModel.id}_modelNameBox`
    );
    //get the intro content div
    var introBox = document.getElementById(
      `${this.props.currentModel.id}_content`
    );

    var translationBox = document.getElementById(
      `translationBoxIntro_${this.props.currentModel.id}`
    );
    //if the elements are found, set the top of the intro content
    //to the bottom of the ModelNameBox
    if (
      modelNameBox !== null &&
      introBox !== null &&
      translationBox !== null &&
      mnb !== null
    ) {
      var box = modelNameBox.getBoundingClientRect();
      mnb.classList.add(style.noTransition);
      mnb.children[1].classList.add(style.noTransition);
      introBox.style.top = `${box.bottom * 1}px`;
      translationBox.style.top = `${box.top - 71.25}px`;
      translationBox.style.left = `${box.right - 150}px`;
      // setting these variables causes the transition to be removed.
      //deleting these lines results in the transition persisting.
      var x = mnb.offsetHeight;
      var y = mnb.children[1].offsetHeight;
      // mnb = mnb.offsetHeight;
      // mnb.children = mnb.children.offsetHeight;
      mnb.classList.remove(style.noTransition);
      mnb.children[1].classList.remove(style.noTransition);
    }
  };

  /************************************************************************
   * Function used to render the content for the IntroPanel. This function
   * generates some outer div's and applies appropriate css to them. Then,
   * this function maps all blocks of content contained within the
   * currentModel by passing control to the renderIntroSections() function.
   ************************************************************************/
  renderIntro = () => {
    return (
      <div
        className={[style.introContainer, style.introStyle].join(" ")}
        id={`${this.props.currentModel.id}_${this.props.currentModel.description[0].title}`}>
        <MediaQuery minWidth={801}>
          <div
            className={style.translationButtonBoxIntro}
            id={`translationBoxIntro_${this.props.currentModel.id}`}>
            <TranslationButton
              audio={this.props.currentModel.translationAudio}
              size={71.25}
              id={this.props.currentModel.id}
              section={"Intro"}
              title={this.props.currentModel.name}
            />
          </div>
        </MediaQuery>
        <div
          className={style.contentBox}
          id={`${this.props.currentModel.id}_content`}>
          {/* Render the object title inside of the intro panel */}
          <MediaQuery maxWidth={676}>
            <div className={style.titleBox}>
              <h1
                className={style.header}
                id={`${this.props.currentModel.id}_${this.props.currentModel.title}_header`}>
                <div className={style.translationButtonBox}>
                  <TranslationButton
                    audio={this.props.currentModel.translationAudio}
                    size={36}
                    id={this.props.currentModel.id}
                    title={this.props.currentModel.title}
                    // section={"History"}
                  />
                </div>
                {this.props.currentModel.translation}
              </h1>
              <h2 className={style.subheader}>
                {this.props.currentModel.name}
              </h2>
            </div>
          </MediaQuery>
          {this.props.currentModel.description[0].content.map((object, i) =>
            this.renderIntroSections(object, i, "Intro")
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
                style={style.introStyle}
                to={"History"}
              />
            </div>
          </MediaQuery>
        </div>
      </div>
    );
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

  renderIntroSections = (object, i, section) => {
    // If the type of content block is text
    if (object.type === "text") {
      // console.log("render Text Block", i);
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
        <ImageBlock
          title={object.title}
          description={object.description}
          section={section}
          url={object.url}
          key={i}
        />
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

  goto = async (loc) => {
    console.log("swipe goto intro", loc);
    // if (loc !== "intro") {
    //   document
    //     .getElementById(`${this.props.currentModel.id}_${loc}`)
    //     .scrollIntoView({
    //       block: "center",
    //       behavior: "auto",
    //     });
    // }
    // setTimeout(this.props.setActiveRoute(loc), 1000);
    this.props.setActiveRoute(loc);
  };

  handleSwipe = async (direction) => {
    var currentI = this.props.routes.indexOf(this.props.currentRoute);

    if (direction === "left") {
      if (currentI + 1 === this.props.routes.length) {
        return;
      } else {
        await this.goto(this.props.routes[currentI + 2]);
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
        // this.handleSwipe("right");
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
        id={`${this.props.currentModel.id}_introContent`}>
        {this.renderIntro()}
      </div>
    );
  }
}
