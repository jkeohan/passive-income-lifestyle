import React, { useReducer, useEffect, useRef } from "react";
import "./BottomSlider.css";
import sliderContent from "./BottomSliderData";

function BottomeSlider() {
  const slideTrackRef = useRef();
  // retrieves the slide track width
  const slideTrackWidth = () => {
    return slideTrackRef.current.clientWidth;
  };
  // retrieves the window width
  const windowWidth = () => {
    return window.innerWidth;
  };

  const numOfVisibleSides = () => {
    switch (true) {
      case windowWidth() <= 767: 
        return 1
      case windowWidth() <= 1023:
        return 2
      default :
        return 3
    }
  }

  const sliderController = {
    numOfVisibleSlides: numOfVisibleSides(), // the number of visible slides
    numOfSlides: sliderContent.length, // the number of available slides
    translateValue: 0 // used to keep track of how far to translate the slide-track to show the next round of slides
  };

  const reducer = (state, action) => {
    switch (action) {
      case "RESET":
        return sliderController;
      case "PREV":
        return handlePrev(state);
      case "NEXT":
        return handleNext(state);
      default:
        console.log("default");
    }
  };

  const [sliders, dispatch] = useReducer(reducer, sliderController);
  console.log("this is sliders", sliders);

  // useEffect without a param to watch will cause an infinite loop
  useEffect(() => {
    dispatch("RESET");
  }, [windowWidth()]);

  function handleNext({numOfVisibleSlides, numOfSlides, translateValue}) {
    // disables the movement of the slide-track once it's cycled through the available slides
    if (numOfVisibleSlides >= numOfSlides) {
      return { numOfVisibleSlides, numOfSlides, translateValue }
    }
    // returns how may slides are currenlty visible based on window.innerWidth value
    let value = numOfVisibleSides()
    // decreases the translate value to slide slick-track left and display 
    // the next slide 
    translateValue += -(slideTrackWidth() / value);
    // as this function is being called inside useReducer a version of state must be returned
    return {
      numOfVisibleSlides: numOfVisibleSlides += 1,
      numOfSlides,
      translateValue
    };
  }

  function handlePrev({numOfVisibleSlides, numOfSlides, translateValue}) {
    if (numOfVisibleSlides <= numOfVisibleSides()) {
      return { numOfVisibleSlides, numOfSlides, translateValue }
    }

    let value = numOfVisibleSides()
    translateValue += slideTrackWidth() / value;

    return {
      numOfSlides,
      numOfVisibleSlides: numOfVisibleSlides -= 1,
      translateValue
    };
  }

  // RENDERS THE INDIVIDUAL SLIDES
  const renderSlickTrackSlides = sliderContent.map((d, i) => (
    <article className="slide" key={i}>
      <div className="image_and_description_container">
        <div className="readout">
          <div className="title">{d.title}</div>
          <div className="value">{d.value}</div>
        </div>
      </div>
      <span className="circle_plus" />
    </article>
  ));

  const styleTransform = {
    transform: `translateX(${sliders.translateValue}px)`,
    transition: "transform ease-out 0.45s"
  };

  return (
    <section className="dashboard">
      <div className="slide_container">
        <button className="slick-prev" onClick={() => dispatch("PREV")} />
        <div className="slick-list">
          <div
            className="slick-track"
            ref={slideTrackRef}
            style={styleTransform}
          >
            {renderSlickTrackSlides}
          </div>
        </div>
        <button className="slick-next" onClick={() => dispatch("NEXT")} />
      </div>
    </section>
  );
}

export default BottomeSlider;

