import React, { Component } from "react";

export default class ThemeContext extends Component {
  state = {
    theme: this.props.defaultTheme,
  };
  setInitTheme = (theme) => {
    var setTheme = this.props.defaultTheme;

    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const cachedTheme = localStorage.getItem("theme");
    console.log("localStorage Theme", cachedTheme);
    if (cachedTheme) {
      setTheme = JSON.parse(cachedTheme);
    } else if (darkOS) {
      setTheme = "dark";
    } else {
      setTheme = this.props.defaultTheme;
    }
    // setTheme = "dark";
    //  if (setTheme !== this.state.theme) {
    this.setState({ theme: setTheme });
    // }
    console.log("setTheme", this.state.theme);
    localStorage.setItem("theme", JSON.stringify(setTheme));
    this.applyTheme(this.props.themes, setTheme);
    this.props.setAppTheme(setTheme);
  };

  setTheme = () => {
    // if (this.state.theme === "dark") {
    //   this.setState({ theme: "light" });
    //   localStorage.setItem("theme", JSON.stringify("light"));
    // } else if (this.state.theme === "light") {
    //   this.setState({ theme: "dark" });
    //   localStorage.setItem("theme", JSON.stringify("dark"));
    // }
    if (this.props.defaultTheme !== this.state.theme)
      this.setState({ theme: this.props.defaultTheme });
    localStorage.setItem("theme", JSON.stringify(this.props.defaultTheme));
  };

  applyTheme = (themes, currentTheme) => {
    console.log("applying theme", this.state.theme);
    document.body.style.setProperty(
      "--secondary-color",
      themes[currentTheme].secondaryColor
    );
    document.body.style.setProperty(
      "--primary-color",
      themes[currentTheme].primaryColor
    );
    document.body.style.setProperty(
      "--tertiary-color",
      themes[currentTheme].tertiaryColor
    );
    document.body.style.setProperty(
      "--quaternary-color",
      themes[currentTheme].quaternaryColor
    );
    // document.body.style.setProperty(
    //   "--background-color",
    //   themes[currentTheme].backgroundColor
    // );
    document.body.style.setProperty(
      "--background",
      themes[currentTheme].background
    );
    document.body.style.setProperty(
      "--nav-background",
      themes[currentTheme].navBackground
    );
    document.body.style.setProperty(
      "--nav-slide-opacity",
      themes[currentTheme].navSlideOpacity
    );
  };

  componentDidUpdate() {
    console.log("updating Theme");
    this.setTheme(this.props.defaultTheme);
    this.applyTheme(this.props.themes, this.state.theme);
  }

  render() {
    console.log("theme props", this.props);
    return <div>{this.props.children}</div>;
  }
}
