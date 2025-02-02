'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hubs() {
  return (
    <div className="font-sans">
      {/* Background Section */}
      <div className="relative w-full min-h-[80vh] flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/drfzbtbzi/image/upload/v1730678250/girls.jpg"
          alt="Hanga Hubs Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative w-full flex justify-between items-start px-8 mt-60">
          <div className="ml-20 flex flex-col">
            <h1 className="z-10 text-4xl font-bold text-left mb-12">
              Hanga Hubs
            </h1>

            {/* White Card */}
            <div className="absolute left-[7%] top-[150px] z-10 bg-white text-gray-800 rounded-lg shadow-md p-6 w-[200px] ">
              <p className="font-medium mb-2">Status</p>
              <p className="mb-4">Ongoing</p>
            </div>
          </div>

          <div className="absolute left-[65%] top-[5%] z-10 bg-blue-600 text-white rounded-sm shadow-md p-6 w-fit">
            <p className="font-medium mb-2">Contact Person</p>
            <p className="mb-4">Said R. Ngoga</p>

            <p className="font-medium mb-2">Position</p>
            <p className="mb-4">Technology Innovation Division Manager</p>

            <p className="font-medium mb-2">Email</p>
            <p className="mb-4">saidngoga.rutabayiro@risa.gov.rw</p>

            <p className="font-medium mb-2">Location</p>
            <p>Telecom House 8 KG 7 St, Kacyiru</p>
          </div>
        </div>
      </div>

      {/* Main Content Section (Below Image) */}
       {/* Main Content Section */}
       <div className="container mx-auto px-4 py-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Side Content (Two Columns on Medium Screens) */}
          <div className="md:col-span-2 grid grid-cols-1 gap-8">
            {/* Overview Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-800">
                SheCanCODE is an advanced computer programming coding Bootcamp [STEM] for young women and girls in Rwanda; with its mission to promote diversity and inclusion in technology by promoting employment and innovation in the tech ecosystem.

                SheCanCODE boot camp is implemented by Igire Rwanda Organization, a registered nonprofit organization: No 877/RGB/NGO/OC/04/2021.

                SheCanCODE is not only committed to educating women but ensuring they have pathways to employment after the program. SheCanCODE offers an immersive 16-week training program, expertly led by seasoned professionals in software engineering.

                The curriculum is designed to provide a robust foundation in coding fundamentals, followed by specialized tracks in either backend development, frontend development, or DevOps. This flexible approach allows participants to tailor their learning to match their passions and strengths.

                Beyond technical expertise, the program also delivers comprehensive training in vital professional skills such as communication, problem-solving, and career readiness, ensuring that graduates are fully equipped to thrive in dynamic, fast-paced work environments. A dedicated career team further supports graduates in securing job opportunities within Rwanda and beyond.
              </p>
            </section>

            {/* What We Do Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">What We Do</h2>
              <p className="text-gray-800">
                We provide top-notch software engineering trainings tailored to different experience levels of our trainees and applicants. At SheCanCODE you will learn and gain practical experience in the following technologies:

                Front-end application development
                Back-end application development
                Full-stack web application development
                Mobile Applications Development
                User Interface and User Experience Design (UI/UX)
              </p>
            </section>
          </div>

          {/* Right Side Content (Pre-incubation and Incubation Stages) */}
          <div className="md:col-span-1">
            {/* Pre-incubation Stage (Content from your image) */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Pre-incubation Stage</h2>
              <div className="p-4 rounded-lg">
                <p className="mb-2"><strong>Duration:</strong> 4-6 weeks boot camp targeting up to 30 individual participants selected using a highly competitive process.</p>
                <p className="mb-2"><strong>Candidates:</strong> Open to all graduates, age 25-35, with a desire to learn how to ideate, validate, prototype and create a start-up, and willing to complete a one-year fully fledged innovation program on full-time basis.</p>
              </div>
            </section>

            {/* Incubation Stage (Content from your image) */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Incubation Stage</h2>
              <div className="p-4 rounded-lg">
                {/* Add your Incubation Stage content here */}
                <p className="mb-2"><strong>Duration:</strong>  (Add duration here)</p>
                <p className="mb-2"><strong>Candidates:</strong> (Add candidates details here)</p>
              </div>
            </section>
          </div>
        </div>

        {/* Our Partners Section (Below the Grid) */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
          {/* ... (Our Partners content) */}
        </section>

        {/* Visit Website Button (Below Our Partners) */}
        <div className="mt-6">
          <Link
            href="https://www.shecancodeschool.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Visit Website
          </Link>
        </div>
      </div>
    </div>
  );
}
