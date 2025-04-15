import React from "react";
import SectionTitle from "../global/SectionTitle";
import { contact } from "@/data/content/home";
import Image from "next/image";

function Testimonials() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      
      <div className="max-w-5xl m-auto md:max-h-[400px] grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-5 items-start">
        {contact.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
            >
              {/* {index === 0 && (
                <>
                  <img
                    className="sqD top-[-50px] left-0 bottom-auto right-auto md:bottom-[-50px] md:top-auto md:right-[-25px] md:left-auto w-20 z-[-100]"
                    src="/static/doodles/testimonials/yay.svg"
                  />
                </>
              )} */}
              {/* <p className="text-base italic relative testimonialQuote">
                "{item.quote}"
              </p> */} <a href={item.link}>
              <p>
              <img
                  //  className="sqD top-[-30px] right-[-15px] w-11"
                  width="100px" height="100px"
                  src={item.icon}
              /></p></a>
              {/* <Image src={item.icon} width={20} height={20} /> */}
              <p className="mt-4 text-xs text-fun-gray text-center">
                <b className="text-fun-pink font-monospace">{item.name}</b> 
              </p>
              {/* {index === 2 && (
                // <img
                //   className="sqD top-[-30px] right-[-15px] w-11"
                //   src="/static/doodles/testimonials/squiggle2.svg"
                // />
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
