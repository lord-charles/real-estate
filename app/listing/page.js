"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ListingItem from "../components/Listings/ListingItem";
import { ForSale } from "@/utils/data";

export default function PropertyListing() {
  const [show, setshow] = useState(true);

  return (
    <main className="flex flex-col flex-1">
      <div className="pb-20">
        <div className="bg-brand-accent relative">
          <div className="relative max-w-6xl pt-16 pb-10 mx-auto md:pt-20">
            <h1 className="text-3xl leading-10 text-center uppercase font-heading font-semibold">
              Property Listing
            </h1>
          </div>
          <div
            className="w-full h-24 bg-bottom bg-cover"
            style={{ backgroundImage: 'url("/subhero-bg.jpg")' }}
          ></div>
        </div>
        <div className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex">
              <div className="flex-1 hidden md:block"></div>
              <div className="flex-1">
                <h2 className="text-2xl leading-10 uppercase font-heading">
                  Featured Listing
                </h2>
              </div>
              <div className="items-center justify-end flex-1 hidden space-x-4 md:flex">
                <div className="bg-gray-200 py-1 px-3 rounded-full">
                  <select
                    id="type"
                    name="type"
                    className="w-32 px-6 py-1 bg-gray-200  border-none outline-none rounded-full"
                  >
                    <option>Rent</option>
                    <option>Sell</option>
                  </select>
                </div>

                <div className="bg-gray-200 py-1 px-3 rounded-full">
                  <select
                    id="type"
                    name="type"
                    className="px-6 py-1  bg-gray-200  rounded-full w-44 outline-none"
                  >
                    <option>Newest First</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:flex w-full">
              <div className="w-full lg:pr-8 lg:w-4/12">
                <div className="bg-white border rounded-sm shadow-lg mb-7 ">
                  <div className="px-6 py-4 border-b">
                    <h3 className="flex text-lg text-red-400 uppercase font-heading">
                      <span> Filter Section</span>
                      <button
                        className="ml-auto text-sm text-gray-600 lg:hidden"
                        onClick={() => setshow(!show)}
                      >
                        {show ? "Hide" : "Show"}
                      </button>
                    </h3>
                  </div>
                  <div
                    className={`px-6 py-10 space-y-10 ${
                      show ? "xxxs:hidden lg:block" : "visible"
                    }`}
                  >
                    <div>
                      <h3 className="uppercase font-heading">Property Type</h3>
                      <select
                        id="type"
                        name="type"
                        className="w-full px-6 py-3 mt-4 border-gray-200 rounded-sm"
                      >
                        <option>Select Property</option>
                      </select>
                    </div>
                    <div>
                      <h3 className="uppercase font-heading">Price Range</h3>
                      <div className="mt-5">
                        <div className="rc-slider rc-slider-horizontal">
                          <div className="rc-slider-rail"></div>
                          <div
                            className="rc-slider-track rc-slider-track-1"
                            style={{ left: "6%", width: "46.56%" }}
                          ></div>
                          <div className="rc-slider-step"></div>
                          <div
                            className="rc-slider-handle rc-slider-handle-1"
                            tabindex="0"
                            role="slider"
                            aria-valuemin="0"
                            aria-valuemax="10000"
                            aria-valuenow="600"
                            aria-disabled="false"
                            style={{
                              left: "6%",
                              transform: "translateX(-50%)",
                            }}
                          ></div>
                          <div
                            className="rc-slider-handle rc-slider-handle-2"
                            tabindex="0"
                            role="slider"
                            aria-valuemin="0"
                            aria-valuemax="10000"
                            aria-valuenow="5256"
                            aria-disabled="false"
                            style={{
                              left: "52.56%",
                              transform: "translateX(-50%)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="uppercase font-heading">Floor Space</h3>
                      <div className="mt-5">
                        <div className="rc-slider rc-slider-horizontal">
                          <div className="rc-slider-rail"></div>
                          <div
                            className="rc-slider-track rc-slider-track-1"
                            style={{ left: "6%", width: "46.56%" }}
                          ></div>
                          <div className="rc-slider-step"></div>
                          <div
                            className="rc-slider-handle rc-slider-handle-1"
                            tabindex="0"
                            role="slider"
                            aria-valuemin="0"
                            aria-valuemax="10000"
                            aria-valuenow="600"
                            aria-disabled="false"
                            style={{
                              left: "6%",
                              transform: "translateX(-50%)",
                            }}
                          ></div>
                          <div
                            className="rc-slider-handle rc-slider-handle-2"
                            tabindex="0"
                            role="slider"
                            aria-valuemin="0"
                            aria-valuemax="10000"
                            aria-valuenow="5256"
                            aria-disabled="false"
                            style={{
                              left: "52.56%",
                              transform: "translateX(-50%)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="uppercase font-heading">
                        Number of Bedrooms
                      </h3>
                      <select
                        id="bedrooms"
                        name="bedrooms"
                        className="w-full px-6 py-3 mt-4 border-gray-200 rounded-sm"
                      >
                        <option>Select Bedrooms</option>
                      </select>
                    </div>
                    <div>
                      <h3 className="uppercase font-heading">
                        Number of Bathrooms
                      </h3>
                      <select
                        id="bathrooms"
                        name="bathrooms"
                        className="w-full px-6 py-3 mt-4 border-gray-200 rounded-sm"
                      >
                        <option>Select Bathrooms</option>
                      </select>
                    </div>
                    <div>
                      <h3 className="uppercase font-heading">Parking</h3>
                      <div className="mt-4 space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="parking"
                            value="yes"
                            className="mr-2"
                          />
                          Yes
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="parking"
                            value="no"
                            className="mr-2"
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div>
                      <h3 className="uppercase font-heading">Swimming Pool</h3>
                      <div className="mt-4 space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="pool"
                            value="yes"
                            className="mr-2"
                          />
                          Yes
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="pool"
                            value="no"
                            className="mr-2"
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div>
                      <h3 className="uppercase font-heading">Balcony</h3>
                      <div className="mt-4 space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="balcony"
                            value="yes"
                            className="mr-2"
                          />
                          Yes
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="balcony"
                            value="no"
                            className="mr-2"
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div>
                      <h3 className="uppercase font-heading">Garden</h3>
                      <div className="mt-4 space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="garden"
                            value="yes"
                            className="mr-2"
                          />
                          Yes
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="garden"
                            value="no"
                            className="mr-2"
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div>
                      <h3 className="uppercase font-heading">Garage</h3>
                      <div className="mt-4 space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="garage"
                            value="yes"
                            className="mr-2"
                          />
                          Yes
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="garage"
                            value="no"
                            className="mr-2"
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div className="mt-10">
                      <button className="w-full px-6 py-3 bg-red-400 text-black uppercase font-heading rounded-full bg-kellygreen">
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-8/12">
                {ForSale && ForSale.length > 0 && (
                  <div className="m-2 mb-9 relative top-[40px]">
                    <ul className="grid xxxs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
                      {ForSale.map((listing, index) => (
                        <ListingItem key={index} listing={listing} />
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center justify-between p-8">
                  <p className="text-gray-600">Showing 1-9 of 30 results</p>

                  <button className="px-6 py-3 text-red-400 border border-red-400 rounded-full">
                    Load More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
