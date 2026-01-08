import React from "react";
import { help } from "../../../assets";

const Helpinghand = () => {
  return (
    <div className="w-full bg-white container pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pt-0">
        <div className="md:p-20">
          <img src={help} alt="helping hand" className="w-full" />
        </div>

        <div className="flex flex-col justify-center gap-4">
          <h1> MyLibrary Helping Hand </h1>
          <p>
            Many who are blind or visually impaired often cannot use printed
            materials, depriving them of reading materials that most take for
            granted. This can severely limit pursuing education and careers, and
            reading for personal enrichment.{" "}
            <br />
            <br />
            <b> MyLibrary </b> han an amazing program for any
            resident of Sri Lanka, or citizen living abroad, that provides free
            audio books for vision impaired allowing for greater independence,
            sparking imagination and daily inspiration. We provide free accounts
            for blind or visually impaired which has access for all audio book
            storages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Helpinghand;
