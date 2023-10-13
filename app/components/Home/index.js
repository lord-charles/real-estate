"use client";
import { useEffect } from "react";
import { useState } from "react";
import ListingItem from "../Listings/ListingItem";
import ListingItem2 from "../Listings/ListingItem2";
import ListingItem1 from "../Listings/ListingItem1";

import Link from "next/link";
import { ForRent, ForSale, RecentOffers } from "../../../utils/data";

export default function HomeListings() {
  // Offers

  useEffect(() => {}, []);
  // Places for rent
  useEffect(() => {}, []);
  // Places for rent
  useEffect(() => {}, []);
  return (
    <div>
      <div className="max-w-6xl mx-auto pt-4  relative">
        {RecentOffers.length > 0 && (
          <div className="m-2 mb-10">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Upcoming</h2>
            <Link href="">
              <p className="px-3 text-sm text-Blueviolet text-[16px] font-medium space-linkshover:text-blue-800 transition duration-150 ease-in-out">
                Show more offers
              </p>
            </Link>
            <ul className="grid xxxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {RecentOffers.map((listing, index) => (
                <ListingItem key={index} listing={listing} />
              ))}
            </ul>
          </div>
        )}
        {ForRent && ForRent.length > 0 && (
          <div className="m-2 relative top-[20px]">
            <h2 className="px-3 text-2xl mt-6 font-semibold">
              Places for rent
            </h2>
            <Link href="">
              <p className="px-3 text-sm hover:text-blue-800 transition duration-150 ease-in-out text-Blueviolet text-[16px] font-medium space-links">
                Show more places for rent
              </p>
            </Link>
            <ul className="grid xxxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {ForRent.map((listing, index) => (
                <ListingItem1 key={index} listing={listing} />
              ))}
            </ul>
          </div>
        )}
        {ForSale && ForSale.length > 0 && (
          <div className="m-2 mb-9 relative top-[40px]">
            <h2 className="px-3 text-2xl mt-6 font-semibold">
              Places for sale
            </h2>
            <Link href="">
              <p className="px-3 text-sm text-Blueviolet text-[16px] font-medium space-linkshover:text-blue-800 transition duration-150 ease-in-out">
                Show more places for sale
              </p>
            </Link>
            <ul className="grid xxxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {ForSale.map((listing, index) => (
                <ListingItem2 key={index} listing={listing} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
