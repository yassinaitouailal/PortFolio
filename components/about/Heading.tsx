import React from "react";

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  return (
    <div  className={`${tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"} mt-[100px] w-full text-center relative`} >
      {tag ? (
        <>
          <h1 className="text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative">
            Projects built with <b>{tag}</b>
            <img
              className="sqD w-8 sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8 absolute"
              src="/static/doodles/hero/code.svg"
            />
          </h1>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-0 relative">
          <img
            className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-10px] lg:left-[-140px] z-[-10]"
            src="/static/doodles/skills/laptop.svg"
          />
          About Me
          <img
            className="sqD w-10 -top-8 -right-8 absolute"
            src="/static/doodles/hero/code.svg"
          />
        </h1>
      )}
      {!tag && (
        <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
          Here you will find more information about me, what I do, and my current 
          skills mostly in terms of programming and technology
        </p>
      )}
    </div>
  );
}

export default Heading;
