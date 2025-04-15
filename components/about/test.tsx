import React from "react";

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between py-12 sm:py-20">
      <div className="sm:w-1/2 text-center sm:text-left">
        {tag ? (
          <h1 className="text-3xl sm:text-4xl mb-8 relative">
            Projects built with <b>{tag}</b>
            <img
              className="sqD w-8 sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8 absolute"
              src="/static/doodles/hero/code.svg"
            />
          </h1>
        ) : (
          <h1 className="text-4xl sm:text-6xl mb-8 relative">
           Hi all, I'm Yassine
            <img
              className="sqD w-10 -top-8 -right-8 absolute"
              src="/static/doodles/hero/code.svg"
            />
          </h1>
        )}
        {!tag && (
          <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
            I'm a passionate Full Stack web developer with experience developing 
            Full Stack web applications " Laravel , React.js  ,  sql , ...................."    
                 I am 
            strongly interested in learning new technologies and implementing them in 
            my projects. I'm a self-motivated and hardworking individual 
            who is always ready to learn new things and work in a team.
          </p>
        )}


      </div>
      <div className="sm:w-1/2 mt-8 sm:mt-0 flex justify-center">
        <img
          src="/static/logos/55.png"
          alt="Web Development"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Heading;
