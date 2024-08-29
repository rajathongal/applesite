import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";
import { models, sizes } from "../constants";
import ModelView from "./ModelView";

const Model = () => {
  useGSAP(() => {
    gsap.to('#heading', {
      y: 0,
      opacity: 1
    })
  }, [])
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
      </div>
    </section>
  );
};

export default Model;
