import Heading from "components/about/Heading";
import Page from "components/utility/Page";
import Test from "components/about/test";
import Skills from "@/components/about/Skills";
import ProjectsMy from "@/components/about/ProjectsMy";
import CTA from "@/components/about/CTA";
import Testimonials from "@/components/about/Testimonials";
import React from "react";
import Experionse from "@/components/about/Experionse";
function projects() {
  return (
    <Page
      currentPage="About"
      meta={{ title: "About", desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects." }}
    >
      <Heading />
      <Test />
      <Skills />
      <ProjectsMy />
      <CTA />
      <Testimonials />
    </Page>
  );
}

export default projects;
