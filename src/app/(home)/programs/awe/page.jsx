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
          <h1 className="z-10 text-4xl font-bold text-left mt-36 ml-20 ">
            Hanga Hubs
          </h1>
           {/* Status Card (White) */}
           <div className="absolute left-[20%] top-[20%] z-10 bg-white text-gray-800 rounded-lg shadow-md p-6 w-fit">
            <p className="font-medium mb-2">Status</p>
            <p className="mb-4">Ongoing</p>
          </div>

          {/* Blue Card Overlay */}

          <div className="absolute left-[65%] top-[20%] z-10 bg-blue-600 text-white rounded-lg shadow-md p-6 w-fit">
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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Left Side Content */}
          <div className="md:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-800">
                HANGA Hubs is an action funded by the European Commission and implemented by RISA. It operates in MUHANGA, NYAGATARE, RUBAVU, and RUSIZI. The action is part of the Rwanda Government's and the European Union's efforts to support private sector development and job creation in Rwanda through Innovation and Incubation hubs.
              </p>
              <p className="text-gray-800 mt-4">
                The action was created to address the obstacles and gaps that limit the growth of tech-enabled start-ups, especially those in their early stages, by offering services and facilities that can help them survive and thrive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Components</h2>
              <ul className="list-disc pl-6 text-gray-800">
                <li>
                  <strong>HANGA Hub:</strong> An open space and a center of gravity for young entrepreneurs and innovators, equipped with machinery, equipment, and amenities needed for building startups.
                </li>
                <li>
                  <strong>Tailored Programs and Services:</strong> Support for innovators and startups from ideation stage until early-development and market entry stage.
                </li>
                <li>
                  <strong>Ecosystem Building:</strong> Partnering to build local communities and the national ecosystem making sure we have a brand and all ingredients to help Innovators and startups start, grow, and succeed.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Pre-incubation Stage</h2>
              <div className="p-4 rounded-lg">
                <p className="mb-2"><strong>Duration:</strong> 3-month boot camp targeting up to 15-20 teams.</p>
                <p className="mb-2"><strong>Candidates:</strong> Open to teams formed at the ideation stage or any other high-potential team with proven ideas and deep market understanding.</p>
                <p className="mb-2"><strong>Exit Path:</strong> Nonperforming teams or teams without a viable MVP and target market can join other teams or drop out and re-enter later.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Incubation Stage</h2>
              <div className="p-4 rounded-lg">
                <p className="mb-2"><strong>Duration:</strong> 6-month boot camp targeting up to 15-20 teams.</p>
                <p className="mb-2"><strong>Candidates:</strong> Open to teams that completed the pre-incubation stage and whose solution is close to market entry.</p>
              </div>
            </section>

            {/* Visit Website Button */}
            <div className="mt-6">
              <Link
                href="https://awe-rwanda.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
              >
                Visit Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
