"use client";


import { useState } from "react";
import ListingItem1 from "../components/Listings/ListingItem1";
import { ForRent, ForSale } from "@/utils/data";
import Image from "next/image";

export default function PropertyListing() {
  const [show, setshow] = useState(true);

  return (
    <main className="flex flex-col flex-1">
      <div className="absolute top-[11vh] z-[1]">
        <Image
          src="/banners/bg1.jpeg"
          width={3000}
          height={3000}
          alt="bg"
          className=" object-cover w-screen lg:h-[27rem] md:h-[27rem] xxxs:h-[25rem] blur-[0px] "
        />
      </div>
      <div className="pb-0 mt-[15rem]">
        <div className="bg-brand-accent relative">
          <div className="relative max-w-6xl pt-16 pb-10 mx-auto md:pt-20">
            <h1 className="text-3xl leading-10 text-center uppercase font-heading font-semibold">
              Property Listing
            </h1>
          </div>
        </div>
        <div className="px-2 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex">
              <div className="flex-1 hidden md:block"></div>
              <div className="flex-1">
                <h2 className="text-xl text-center leading-10 uppercase font-heading">
                  Rentals Listing
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
                        <option>Appartments</option>
                        <option>Own Compound</option>
                      </select>
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
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
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
                {ForRent && ForRent.length > 0 && (
                  <div className="m-2 mb-9 relative top-[40px]">
                    <ul className="grid xxxs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
                      {ForRent.map((listing, index) => (
                        <ListingItem1 key={index} listing={listing} />
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center justify-between p-8">
                  <p className="text-gray-600">Showing 1-9 of 10 results</p>

                  <button className="px-4 py-3 text-[14px] text-red border border-red-400 rounded-full">
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
