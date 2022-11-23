import React, { useState, useRef, useEffect, Fragment } from "react";
import { render } from "react-dom";
import Transition from "../utils/Transition";
import { Timeline, Event } from "react-timeline-scribble";

import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";

function Schedule() {
  return (
    <section className="relative" id="schedule">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Schedule</h1>
            <Fragment>
              <Timeline>
                <Event
                  interval={"1 Dec 2022"}
                  title={"Registration Begins"}
                  subtitle={"Ipsum"}
                ></Event>
                <Event
                  interval={"1 Jan 2023"}
                  title={"Registration Ends"}
                  subtitle={"Ipsum"}
                ></Event>
                <Event
                  interval={"28 Jan 2023"}
                  title={"Hackathon Begins"}
                  subtitle={"Ipsum"}
                ></Event>
                <Event
                  interval={"29 Jan 2023"}
                  title={"Hackathon Ends"}
                  subtitle={"Ipsum"}
                ></Event>
              </Timeline>
            </Fragment>
          </div>
        </div>
        <div className="border" />
      </div>
    </section>
  );
}

export default Schedule;
