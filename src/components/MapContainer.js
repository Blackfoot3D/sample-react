import React, { PureComponent } from "react";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Polyline,
} from "google-maps-react";

import { oldFashioned } from "../Maps/styles.js";
import { noGreyRestriction } from "../Maps/options";
import style from "./style/MapContainer.module.css";

// if (window.google === "undefined") {
//   let google = (window.google = null);
// }

/************************************************************
 * Map Container Class Component. Contains a Google map, and
 * all of the methods related to the maps.
 ************************************************************/
export class MapContainer extends PureComponent {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    activeModel: {},
    detailsVisible: false,
  };

  componentDidMount() {
    console.log("Mounting Map Container");
  }

  //function to get the latLng of a map. To be used onClick.
  getLatLng = (event) => {
    var latitude = event.latLng.lat();
    var longitude = event.latLng.lng();
    setTimeout(
      console.log.bind(
        console,
        "{ lat: " + latitude + ", lng: " + longitude + " },"
      )
    );
  };

  //Marker's onClick Function. Sets the MapContainer state to relfect which marker has been clicked.
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      activeModel: props.title,
    });
  };

  //Map's onClick event function. Used to close an open infoWindo if one is open.
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  checkModelActive = (obj, activeModels) => {
    if (activeModels !== null && obj !== null) {
      for (var i = 0; i < activeModels.length; i++) {
        if (activeModels[i].id === obj.id) {
          return true;
        }
      }
      return false;
    }
  };
  //after the map is loaded, assign styling to it.
  //might need to add dyncamically assigned styling here.
  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: oldFashioned,
    });
  }

  // getIconStyle = () => {
  //   return {
  //     //gridColumn: this.props.home ? "4 / span 6" : "6 / span 6",
  //     height: this.props.obj.categories.includes(this.props.currentCategory)
  //       ? "70px"
  //       : "50px",
  //   };
  // };

  // renderMV = (object, i) => {
  //   return (
  //     <model-viewer
  //       key={i}
  //       className={style.mv2}
  //       // class="default"
  //       src={object.Model.mdl}
  //       auto-rotate
  //       autoplay
  //       camera-controls
  //       shadow-intensity="3"
  //       exposure="1"
  //       shadow-softness="0.9"
  //       interaction-policy="allow-when-focused"
  //       alt={`A 3D Model of a Blackfoot ${object.id}`}></model-viewer>
  //   );
  // };

  setIconSize = (object) => {
    if (this.props.view === "mapview") {
      return this.checkModelActive(object, this.props.activeArtifacts);
    } else {
      // return false;
      if (this.props.currentModel.id === object.id) {
        return true;
      } else {
        return false;
      }
    }
  };

  getDetailsStyle = () => {
    // if (this.state.detailsVisible === true) {
    return [style.details, style.detailsVisible].join(" ");
    // } else if (this.state.detailsVisible === false) {
    //   return [style.details, style.detailsHidden].join(" ");
    // }
  };

  generateMarkers = () => {
    if (this.props.models.length > 1) {
      return this.props.models.map((object, i) => (
        <Marker
          key={i}
          position={object.mapMarker}
          onClick={this.onMarkerClick}
          title={object.id}
          content={
            //React Fragment is used to be able to break up the info window content.
            //Typically only a single div can be used, but a react fragment can contain multiple divs.
            // <React.Fragment>
            <div className={style.infoContent}>
              {/* href is used here to allow info windows to link to an artifact's page. */}
              <a href={`/objects/${object.id}/main`}>
                <div className={style.titleBox}>
                  <h1>{object.translation}</h1>
                  <h2>{object.id}</h2>
                </div>
                {/* <div className={this.getDetailsStyle()}>
                  <div className={style.detailInner}>
                    <h2>Date: </h2>
                    <p>the date</p>
                  </div>
                  <div className={style.detailInner}>
                    <h2>Location: </h2>
                    <p>the location</p>
                  </div>
                  <div className={style.detailInner}>
                    <h2>Tribe: </h2>
                    <p>the tribe</p>
                  </div>
                  <div className={style.detailInner}>
                    <h2>Museum Collection: </h2>
                    <p>the Museum</p>
                  </div>
                </div> */}
              </a>
              {/* <button
                onClick={this.showDetails()}
                className={style.infoButton}>
                i
              </button> */}
              <div className={style.modelBox}>
                <model-viewer
                  key={i}
                  className={style.mv2}
                  // class="default"
                  src={object.Model.mdl}
                  auto-rotate
                  autoplay
                  camera-controls
                  shadow-intensity="3"
                  exposure="1"
                  shadow-softness="0.9"
                  interaction-policy="allow-when-focused"
                  alt={`A 3D Model of a Blackfoot ${object.id}`}></model-viewer>
              </div>
              {/* </React.Fragment> */}
            </div>
          }
          icon={{
            url: object.mapMarker.icon,
            //scaling here might be required when filtering, in order to highlight related objects, etc
            //This code is responsible for applying the filter.
            // scaledSize: object.categories.includes(this.props.currentCategory)
            //   ? new window.google.maps.Size(100, 100)
            //   : new window.google.maps.Size(50, 50),
            scaledSize: this.setIconSize(object)
              ? new window.google.maps.Size(100, 100)
              : new window.google.maps.Size(50, 50),
          }}
        />
      ));
    } else {
      if (this.props.models.mapMarker !== undefined) {
        return (
          <Marker
            position={this.props.models.mapMarker}
            onClick={this.onMarkerClick}
            title={this.props.models.id}
            content={
              //React Fragment is used to be able to break up the info window content.
              //Typically only a single div can be used, but a react fragment can contain multiple divs.
              // <React.Fragment>
              <div className={style.infoContent}>
                {/* href is used here to allow info windows to link to an artifact's page. */}
                <a href={`/objects/${this.props.models.id}/main`}>
                  <div className={style.titleBox}>
                    <h1>{this.props.models.translation}</h1>
                    <h2>{this.props.models.id}</h2>
                  </div>
                </a>
                <div className={style.modelBox}>
                  <model-viewer
                    className={style.mv2}
                    // class="default"
                    src={this.props.models.Model.mdl}
                    auto-rotate
                    autoplay
                    camera-controls
                    shadow-intensity="3"
                    exposure="1"
                    shadow-softness="0.9"
                    interaction-policy="allow-when-focused"
                    alt={`A 3D Model of a Blackfoot ${this.props.models.id}`}></model-viewer>
                </div>
                {/* </React.Fragment> */}
              </div>
            }
            icon={{
              url: this.props.models.mapMarker.icon,
              //scaling here might be required when filtering, in order to highlight related objects, etc
              //This code is responsible for applying the filter.
              // scaledSize: object.categories.includes(this.props.currentCategory)
              //   ? new window.google.maps.Size(100, 100)
              //   : new window.google.maps.Size(50, 50),
              scaledSize: this.setIconSize(this.props.models)
                ? new window.google.maps.Size(100, 100)
                : new window.google.maps.Size(50, 50),
            }}
          />
        );
      }
    }
  };
  render() {
    const lineSymbol = {
      path: "M 0,-1 0,1",
      strokeOpacity: 1,
      scale: 4,
    };
    console.log("rendering map container");
    return (
      //Map component can take all* properties that can be assigned in Google maps.
      //If a property cannot be assigned, it can potentially be added by going into
      //the node module for google-maps-react.
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        gestureHandling={"cooperative"}
        restriction={noGreyRestriction}
        minZoom={4}
        initialCenter={this.props.center}
        disableDefaultUI={true}
        // style={this.props.style}
        // style={{ width: "100%", height: "100%" }}

        containerStyle={{ width: "100%", height: "100%", top: "0" }}>
        {/* Dyncamically create markers for each artifact. based on app.state.models.mapMarker
         which is passed to Map Container as props. */}
        {this.generateMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div className={style.infoWindow}>
            {this.state.selectedPlace.content}
          </div>
        </InfoWindow>
        <Polyline
          path={[
            { lat: 25.774, lng: -80.19 },
            { lat: 18.466, lng: -66.118 },
            { lat: 32.321, lng: -64.757 },
            // { lat: 25.774, lng: -80.19 },
          ]}
          icons={[
            {
              icon: lineSymbol,
              offset: "0",
              repeat: "20px",
            },
          ]}
          strokeColor="#FF0000"
          strokeOpacity={0}
          strokeWeight={2}
          // onMouseover={() => console.log("hello")}
          title="hello"
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCz5oTZNi59V1_4hoH4PQzyKE31joty128",
})(MapContainer);
