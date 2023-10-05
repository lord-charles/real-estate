"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import slideanimation from "../../../public/slide.json";
import { Divider } from "@mui/material";
// CAROUSEL DATA

interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: string;
  rating: number;
  type: string;
  beds: number;
  sf: number;
  bath: number;
}

const postData: DataType[] = [
  {
    heading: "2 BHK Apartment",
    heading2: "Section 58",
    name: "Colt stelle",
    imgSrc: "/assets/listings/l1.webp",
    students: 150,
    classes: 12,
    price: "ksh 8500",
    rating: 4.9,
    type: "Rent",
    bath: 2,
    sf: 2000,
    beds: 2,
  },
  {
    heading: "2 BHK Villa",
    heading2: "Lanet",
    name: "Colt stelle",
    imgSrc: "/assets/listings/l2.webp",
    students: 130,
    classes: 12,
    price: "4M",
    rating: 4.7,
    type: "Buy",
    bath: 2,
    sf: 2000,
    beds: 2,
  },
  {
    heading: "1BHK Independent House",
    heading2: "Pipeline",
    name: "Colt stelle",
    imgSrc: "/assets/listings/l3.webp",
    students: 120,
    classes: 12,
    price: "ksh 8900",
    rating: 4.3,
    type: "Rent",
    bath: 2,
    sf: 2000,
    beds: 2,
  },

  {
    heading: "2BHK Apartment",
    heading2: "Elementaita",
    name: "Colt stelle",
    imgSrc: "/assets/listings/l4.webp",
    students: 150,
    classes: 12,
    price: "ksh 9400",
    rating: 4.5,
    type: "Rent",
    bath: 2,
    sf: 1000,
    beds: 1,
  },
  {
    heading: "2 BHK Villa",
    heading2: "White House",
    name: "Colt stelle",
    imgSrc: "/assets/listings/l5.webp",
    students: 150,
    classes: 12,
    price: "8M",
    rating: 4.7,
    type: "Buy",
    bath: 2,
    sf: 2000,
    beds: 2,
  },
  {
    heading: "2 BHK Villa",
    heading2: "White House",
    name: "Colt stelle",
    imgSrc: "/assets/listings/l6.webp",
    students: 150,
    classes: 12,
    price: "ksh 7400",
    rating: 4.6,
    type: "Buy",
    bath: 2,
    sf: 1000,
    beds: 2,
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div id="featured listings">
        <div className="mx-auto max-w-6xl sm:py-8 px-4 lg:px-8  relative">
          <div className="sm:flex justify-between items-center relative xxxs:top-10 md:top-3 lg:top-3">
            <h3 className="text-midnightblue text-2xl lg:text-[25px] font-semibold mb-0 xxxs:text-[20px]">
              FEATURED LISTING
            </h3>
            <Link
              href={"/"}
              className="text-Blueviolet text-[16px] font-medium space-links"
            >
              View more&nbsp;&gt;&nbsp;
            </Link>
          </div>
          <div className="absolute xxxs:left-[40%] lg:left-[50%] lg:bottom-10 xxxs:bottom-0  z-[9999]">
            <div className="flex items-center space-x-2">
              <Lottie
                animationData={slideanimation}
                loop={true}
                width={100}
                height={100}
                className="w-[70px]"
              />
              <h2 className="text-gray-500 relative top-1.5 lg:visible md:visible xxxs:hidden">
                slide...
              </h2>
            </div>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-3 px-0 pt-3 pb-12 my-20 shadow-courses rounded-2xl">
                  <div className="relative rounded-3xl">
                    <Image
                      src={items.imgSrc}
                      alt="gaby"
                      width={389}
                      height={262}
                      className="m-auto object-cover h-[270px] w-full rounded-sm clipPath"
                    />
                    <div className="bg-orange-300 absolute rounded-full top-2 left-2">
                      <h2 className="px-3 py-1">{items.type}</h2>
                    </div>
                    <div className="absolute right-5 -bottom-2 bg-Blueviolet rounded-full p-4 cursor-pointer">
                      <h3 className="text-white uppercase text-center text-sm font-medium">
                        <Image
                          src="/icons/heart.png"
                          width={35}
                          height={35}
                          alt="icon"
                        />
                      </h3>
                    </div>
                  </div>

                  <div className="px-3">
                    <h4 className="text-xl font-bold pt-6 text-black">
                      {items.heading}
                    </h4>

                    <div>
                      <h3 className="text-base font-normal pt-3 opacity-75">
                        {items.heading2}
                      </h3>
                    </div>

                    <div className="flex justify-between items-center py-6">
                      <div className="flex gap-4">
                        <h3 className="text-red text-22xl font-medium">
                          {items.rating}
                        </h3>
                        <div className="flex">
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium">{items.price}</h3>
                      </div>
                    </div>

                    {/* <hr style={{ color: "#C4C4C4" }} /> */}

                    <div className="flex justify-between pt-6 border p-2 items-center h-[55px] overflow-hidden">
                      <div className="text-gray-500 relative top-[-4px] text-[15px] text-center">
                        {items.beds} Beds
                      </div>
                      <Divider className="h-[70px] w-[1px] " />
                      <div className="text-gray-500 relative top-[-4px] text-[15px] text-center">
                        {items.sf}SF
                      </div>
                      <Divider className="h-[70px] w-[1px] " />
                      <div className="text-gray-500 relative top-[-4px] text-[15px] text-center">
                        {items.bath}Baths
                      </div>
                      <Divider className="h-[70px] w-[1px] " />
                      <div className="relative top-[-8px]">
                        <button className=" h-[40px] cursor-pointer bg-Blueviolet  hover:bg-semiblueviolet  hover:text-white text-Blueviolet font-medium px-1 rounded-full">
                          <h2 className="font-semibold text-white text-[13px] text-center px-3 ">
                            Details
                          </h2>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
