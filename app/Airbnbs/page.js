"use client";
import Image from "next/image";
import React, { useState } from "react";
import AirbnbListingItem from "../components/Listings/ListingItemairbnb";
import { ForRent, ForSale, RecentOffers, AirbnbsData } from "../../utils/data";

const Airbnbs = () => {
  const [data, setdata] = useState([...RecentOffers, ...ForSale, ...ForRent]);

  return (
    <main className="flex flex-col flex-1">
      <div className="pb-0">
        <div className="bg-brand-accent relative ">
          <div className="relative max-w-6xl pt-16 pb-10 mx-auto md:pt-20">
            <h1 className="text-3xl leading-10 text-center uppercase font-heading font-semibold">
              Airbnbs
            </h1>
          </div>
          <div
            className="w-full h-24 bg-bottom bg-cover"
            style={{ backgroundImage: 'url("/subhero-bg.jpg")' }}
          ></div>
        </div>
        <section className="px-6 py-12">
          <div className="relative max-w-6xl mx-auto">
            <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
              {/* Repeat the following code block for each item */}
              {AirbnbsData.map((listing, index) => (
                <div key={index}>
                  <AirbnbListingItem listing={listing} />
                </div>
              ))}
              {/* End of code block */}
            </div>

            {/* Pagination */}
            <div className="mt-12">
              <div className="flex items-center justify-center space-x-2 md:space-x-5">
                <button className="flex items-center justify-center w-10 h-10 rounded-md bg-cyan-200 text-cyan-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="space-x-2 md:space-x-2.5 flex items-center">
                  <button className="flex items-center justify-center w-10 h-10 text-white rounded-md bg-lime-500 focus:outline-none">
                    1
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-md text-lime-500 bg-lime-200 focus:outline-none">
                    2
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-md text-lime-500 bg-lime-200 focus:outline-none">
                    3
                  </button>
                  <span className="flex items-center justify-center w-5 h-10 rounded-md">
                    …
                  </span>
                  <button className="flex items-center justify-center w-10 h-10 rounded-md text-lime-500 bg-lime-200 focus:outline-none">
                    18
                  </button>
                </div>
                <button className="flex items-center justify-center w-10 h-10 rounded-md bg-cyan-200 text-cyan-500 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Airbnbs;
