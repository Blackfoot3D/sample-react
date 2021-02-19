import React, { Component } from "react";
// import $ from "jquery";
// import style from "./style/RTIViewer.module.css";
// import beadedobject from "../Artifacts/BeadedObject/RTI/"

// NOTE:
// I removed RTI from lazy loading. This is because RTI is still loaded only when RTI or MAP buttons are pressed.
//
// In Index.html I set the dependency JQuery and JS files to not have 'async defer'.
// async defer seemed to cause it to load infrequenly, but this still needs investigation.

export default class RTIViewer extends Component {
  componentDidMount() {
    // Get initial height and width
    var width = window.innerWidth;
    var height = window.innerHeight;
    console.log("Mounting RTI Viewer");
    var panel = document.getElementById("MainMenuButton");
    panel.parentNode.style.display = "none";
    var script1 = document.createElement("script");
    var script2 = document.createElement("script");
    var script3 = document.createElement("script");
    var script4 = document.createElement("script");
    var script5 = document.createElement("script");

    var link1 = document.createElement("link");
    var link2 = document.createElement("link");

    link1.type = "text/css";
    link1.rel = "Stylesheet";
    link1.href = "/css/ui-lightness/jquery-ui-1.10.3.custom.css";
    document.body.appendChild(link1);
    link1.onload = () => {
      link2.type = "text/css";
      link2.rel = "Stylesheet";
      link2.href = "/css/webrtiviewer.css";
      document.body.appendChild(link2);
      link2.onload = () => {
        script1.type = "text/javascript";
        script1.src = "/js/jquery-3.5.1.min.js";
        document.body.appendChild(script1);
        script1.onload = () => {
          console.log("appended");
          script2.type = "text/javascript";
          script2.src = "/js/jquery-ui.min.js";
          document.body.appendChild(script2);
          script2.onload = () => {
            script3.type = "text/javascript";
            script3.src = "/js/pep.min.js";
            document.body.appendChild(script3);
            script3.onload = () => {
              script4.type = "text/javascript";
              script4.src = "/spidergl/spidergl.js";
              document.body.appendChild(script4);
              script4.onload = () => {
                script5.type = "text/javascript";
                script5.src = "/spidergl/multires.js";
                document.body.appendChild(script5);
                script5.onload = () => {
                  var script = document.createElement("script");
                  script.innerHTML = `createRtiViewer("viewerContainer", "${this.props.currentModel}", ${width}, ${height});`;
                  var container = document.getElementById("viewerContainer");
                  container.appendChild(script);

                  //Allow the RTI window to resize. This does not affect the size of the initial model
                  // createRtiViewer sets the size of the RTI, we simply resize the window allowed to view in.
                  window.addEventListener("resize", this.onResize);
                  container.addEventListener("resize", this.onResize);

                  // hide the menu bar so you cannot break iframe
                  var light = document.getElementById("lighting");
                  light.style.display = "none";
                };
              };
            };
          };
        };
      };

      // script5.type = "text/javascript";
      // script5.src = "/spidergl/multires.js";
      // document.body.appendChild(script5);
      // // Append

      // document.head.appendChild(script);

      // Generate the RTI
      // var script = document.createElement("script");
      // script.innerHTML = `createRtiViewer("viewerContainer", "${this.props.currentModel}", ${width}, ${height});`;
      // var container = document.getElementById("viewerContainer");
      // container.appendChild(script);

      // //Allow the RTI window to resize. This does not affect the size of the initial model
      // // createRtiViewer sets the size of the RTI, we simply resize the window allowed to view in.
      // window.addEventListener("resize", this.onResize);
      // container.addEventListener("resize", this.onResize);

      // // hide the menu bar so you cannot break iframe
      // var panel = document.getElementById("MainMenuButton");
      // panel.parentNode.style.display = "none";
      // var light = document.getElementById("lighting");
      // light.style.display = "none";
    };
    // }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
    // var id = document.getElementById("viewerContainer");
    // id.remove();
  }

  componentDidUpdate() {
    // this.onResize();
  }

  // getRTI is called when resized and sets the height and width to rect.height and rect.width.
  getRTI = () => {
    var el = document.getElementById("viewerContainer");
    var container_webgl = document.getElementById("viewerContainer_webgl");
    // var toolbar = document.getElementsByClassName("toolbar");
    // console.log(toolbar);
    // var container_div = document.getElementById("viewerContainer_div")
    if (el) {
      var rect = el.getBoundingClientRect();
      var width = `${rect.width}`;
      var height = `${window.innerHeight}`;

      container_webgl.setAttribute("width", width);

      container_webgl.setAttribute("height", height);

      // toolbar[0].setAttribute("style", "width: 10%; height: 400px")
      // console.log("RTI RESIZE W:" + width + "H:" + height);
    }
  };

  onResize = () => {
    console.log("RTI RESIZE");
    // $(document).ready(this.getRTI());
    this.getRTI();
  };

  render() {
    return <div id="viewerContainer"></div>;
  }
}
