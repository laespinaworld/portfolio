import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Alexander La Espina | Resume</title>
        <meta
          name="description"
          content="I’m a junior full stack web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Alexander La Espina</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/laespina/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/laespinaworld"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span> Full Stack Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>NextJS
            <span className="px-2">|</span>MantineUI
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>NodeJs
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> Api Rest
            <span className="px-2">|</span> TypeScript
            <span className="px-2">|</span> Stripe
          </p>
          
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">HAXN Empreendimentos Ltda</span>
            <span className="px-2">|</span>Minas Gerais, Brazil
          </p>
          <p className="py-1 italic">
            Full Stack  Web Developer & Founder (2020 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Integration of the Brazilian government's public bid APIs with the
              HAXN web application
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Vixe To Gravida - Pregnant  Blog</span>
            <span className="px-2">|</span>Brazil
          </p>
          <p className="py-1 italic">
            Full Stack Web Developer - founder (2022 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              After becoming a father in 2022, I started together with a
              psychologist a project called Vixe To Gravida. This project
              addresses all aspects of pregnancy.
            </li>
            <li>
              The project was made to generate organic traffic and consequently
              make money with google adsense
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Temporada Rio de Janeiro, Brazil</span>
            <span className="px-2">|</span>Rio de Janeiro , Brazil
          </p>
          <p className="py-1 italic">Founder(2012 – current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Temporada rio de janeiro is a tourism agency focused on renting
              temporary properties, boats, tours in the State of Rio de Janeiro.
              This is a project that earns 200 thousand reais a year, I have
              plans to develop the project in a tourism marketplace where
              suppliers can register their services in tourism and Temporada Rio
              de Janeiro earns commission from sales
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
