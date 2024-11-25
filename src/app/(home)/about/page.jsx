import DefaultBanner from "../components/DefaultBanner";
import React from "react";
import AboutPageFakes from "@/fakeDatas/AboutPageFakes";
import Founders from "../components/sections/Founders";
import ImpactSection from "../components/sections/ImpactSection";
import HomePageFakes from "@/fakeDatas/HomePageFakes";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const { bannerData, topSection, programs, logos } = AboutPageFakes;

  return (
    <>
      {/* Banner Section */}
      <div>
        <DefaultBanner
          title={bannerData.title}
          backgroundImage={bannerData.backgroundImage}
        />
      </div>

      {/* Content Section */}
      <div className="font-ibm">
        {/* Top Section with Description and Map Image */}
        <div className="flex flex-col px-4 mx-auto max-w-screen-xl md:flex-row justify-between items-center md:space-x-4 my-10">
          <p className="flex-1 text-black flex items-center justify-center text-center md:text-left text-xl">
            {topSection.description}
          </p>

          <div className="relative flex-1 h-40 md:h-96 mt-4 md:mt-0">
            <Image
              src={topSection.mapImage}
              alt="Map Image"
              layout="fill"
              objectFit="fill"
              className="rounded w-full h-screen object-scale-down"
            />
          </div>
        </div>


        <div className="w-full bg-orange-500">
          <div className="max-w-screen-xl py-12 md:py-24 mx-auto px-4 flex flex-wrap gap-5 items-start justify-between w-full">
            <div className="w-full md:w-[49%]">
              {/* vision and mission */}
              <div className="gap-10 flex flex-col items-start font-ibm">
                <div className="w-full">
                  <h2 className="font-extrabold text-3xl mb-5">Our Mission</h2>
                  <p className="text-lg">
                    Our mission is to foster economic independence and create pathways to
                    lasting success.
                  </p>
                </div>
                <div className="w-full">
                  <h2 className="font-extrabold text-3xl mb-5">Our Vision</h2>
                  <p className="text-lg">
                    Our vision is to create a future where all Rwandan youth,
                    especially women, are empowered with digital skills ad an
                    opportunities driving sustainable growth & innovation in their
                    communities & beyond
                  </p>
                </div>
              </div>
            </div>
            {/* Values */}
            <div className="w-full md:w-[49%]">
              <div className="">
                <h2 className="font-extrabold text-3xl mb-5">Our Values</h2>
                <div className="">
                  <div>
                    <p className="font-bold">EMPOWEMENT</p>
                    <p>Enabling youth, especially women, to gain the skills and confidence needed to succeed.</p>
                    <p className="font-bold">INCLUSIVITY</p>
                    <p>Promoting equal access to opportunies, regardless of background or socio-economic status.</p>
                    <p className="font-bold">SUSTAINABILITY</p>
                    <p>Creating lasting impact through programs that promote long-term growth & econimic independence.</p>
                    <p className="font-bold">COLLABORATION</p>
                    <p>Building strong partnerships to maximize impact and create opportunities for the community.</p>
                    <p className="font-bold">INTEGRITY</p>
                    <p>Upholding transparency, accontability, and ethical practices in all our actions .</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Title */}
        <h2 className="mt-10 text-4xl font-semibold text-center text-black">Programs</h2>
        {/* Programs Section */}
        <div className="flex flex-col mx-auto max-w-screen-xl md:flex-row justify-between items-stretch my-12 space-y-4 md:space-y-0 md:space-x-4">
          {programs.map((program, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start space-y-4 p-6 rounded border border-gray-300 shadow-md bg-white w-full md:flex-1"
            >
              {/* Logo and Title in Row */}
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded">
                  <Image
                    src={logos[index]?.src || "/default-logo.png"}
                    alt={logos[index]?.name || "Program Logo"}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-black">
                  {program.title}
                </h3>
              </div>

              {/* Program Description */}
              <div className="text-black text-center md:text-left flex-grow">
                <p className="text-xl">{program.description}</p>
                <Link href="/programs" passHref>
                  <button className="bg-black text-white p-2 rounded mt-4 hover:bg-gray-800 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <ImpactSection ImpactData={HomePageFakes.ImpactData} />
      </div>
      <div>
        <Founders foundersData={AboutPageFakes.foundersData} />
      </div>
    </>
  );
};

export default AboutPage;
