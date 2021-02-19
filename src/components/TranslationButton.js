import React, { Component } from "react";
import style from "./style/TranslationButton.module.css";
export default class TranslationButton extends Component {
  /****************************************************************
   * Function used as the on click function for the Translation
   * Button. This function plays the audio track, as well as apply
   * css transitions and animations.
   ****************************************************************/
  playAudio = (trans) => {
    //Get the various divs related to this component.
    //audio is the audio tag containing the audio file as the src.
    var audio = document.getElementById(
      `audio_${this.props.id}_${this.props.section}_${this.props.title}_${this.props.audio}`
    );
    // audioBox is the div that animates the progression of the audio file
    var audioBox = document.getElementById(
      `audioBox_${this.props.id}_${this.props.section}_${this.props.title}_${this.props.audio}`
    );
    //hover is the div which controls the hovered state
    var hover = document.getElementById(
      `audioHover_${this.props.id}_${this.props.section}_${this.props.title}_${this.props.audio}`
    );

    //if all of the divs are mounted
    if (audio !== null && audioBox !== null && hover !== null) {
      //set the animation duration to be the length of the audio file.
      audioBox.style.animationDuration = `${audio.duration}s`;
      audioBox.classList.add(style.audioAnimation);
      //hide the hover div
      hover.classList.add(style.hidden);
      audio.play();
      //set an interval to check if the audio track has finished playing.
      setInterval(function () {
        if (audio.ended === true) {
          audioBox.classList.remove(style.audioAnimation);
          hover.classList.remove(style.hidden);
        }
      }, 100);
    }
  };

  render() {
    return (
      <div className={style.outer}>
        <div className={style.outerContainer} onClick={() => this.playAudio()}>
          <div
            // check the direction prop to see which css to apply.
            className={
              this.props.direction === "right"
                ? [style.buttonContainer, style.containerRight].join(" ")
                : [style.buttonContainer, style.containerLeft].join(" ")
            }
            style={{
              height: this.props.size,
              width: this.props.size,
            }}
            id={`audioBox_${this.props.id}_${this.props.section}_${this.props.title}_${this.props.audio}`}>
            <audio
              id={`audio_${this.props.id}_${this.props.section}_${this.props.title}_${this.props.audio}`}>
              <source src={this.props.audio} />
            </audio>
          </div>
          <div
            className={
              this.props.direction === "right"
                ? [style.hoverContainer, style.containerRight].join(" ")
                : [style.hoverContainer, style.containerLeft].join(" ")
            }
            style={{
              height: this.props.size,
              width: this.props.size,
            }}
            id={`audioHover_${this.props.id}_${this.props.section}_${this.props.title}_${this.props.audio}`}>
            <div
              className={
                this.props.direction === "right"
                  ? [style.listen, style.listenRight].join(" ")
                  : [style.listen, style.listenLeft].join(" ")
              }
              style={{
                fontSize: this.props.size / 3.167,
                lineHeight: `${this.props.size / 3.167}px`,
              }}>
              Listen
            </div>
          </div>
        </div>
      </div>
    );
  }
}
