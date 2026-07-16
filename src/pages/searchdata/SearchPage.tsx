import { useState } from "react";

import Toolbar from "../../components/filterresult/Toolbar";
import GridView from "../../components/filterresult/GridView";
import ListView from "../../components/filterresult/ListView";
import MapView from "../../components/filterresult/MapView";
import type { Property } from "../../types/property";

export type ViewType = "list" | "grid" | "map";

export type SortType =
  | "featured"
  | "newest"
  | "oldest"
  | "price-low"
  | "price-high";

const SearchPage = () => {
  const [view, setView] = useState<ViewType>("list");
  const [sort, setSort] = useState<SortType>("featured");

  
  const properties: Property[] = [
    {
      id: 1,
      title: "Old Delhi Food-Temples-Spice Market",
      location: "Old Delhi",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      price: 5400,
      rating: 5,
      reviews: 1302,
      hours: "3 hours",
      badge: "Trending",
      date: "16 and 17 Jul",

      lat: 28.6562,
      lng: 77.241,
      isFavourite: false,
    },
    {
      id: 2,
      title: "Luxury Villa Experience",
      location: "Goa",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      price: 7800,
      rating: 4.8,
      reviews: 856,
      hours: "2 Days",
      badge: "Popular",
      date: "16 and 17 Jul",

      lat: 15.2993,
      lng: 74.124,
      isFavourite: true,
    },
    {
      id: 3,
      title: "Mountain View Cottage",
      location: "Manali",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
      price: 6200,
      rating: 4.9,
      reviews: 532,
      hours: "1 Night",
      badge: "Trending",
      lat: 32.2396,
      lng: 77.1887,
      date: "16 and 17 Jul",

      isFavourite: false,
    },
    {
      id: 4,
      title: "Beachfront Resort",
      location: "Kerala",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      price: 9800,
      rating: 4.7,
      reviews: 918,
      hours: "2 Nights",
      badge: "Best Seller",
      lat: 9.4981,
      lng: 76.3388,
      date: "16 and 17 Jul",

      isFavourite: false,
    },
    {
      id: 5,
      title: "Modern Apartment",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
      price: 4500,
      rating: 4.5,
      reviews: 321,
      date: "16 and 17 Jul",

      hours: "5 hours",
      badge: "New",
      lat: 19.076,
      lng: 72.8777,
      isFavourite: true,
    },
    {
      id: 6,
      title: "Heritage Haveli",
      location: "Jaipur",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
      price: 7200,
      rating: 4.8,
      reviews: 680,
      date: "16 and 17 Jul",

      hours: "1 Day",
      badge: "Trending",
      lat: 26.9124,
      lng: 75.7873,
      isFavourite: false,
    },
    {
      id: 7,
      title: "Luxury Penthouse",
      location: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      price: 12000,
      rating: 5,
      reviews: 1020,
      hours: "Weekend",
      badge: "Premium",
      date: "16 and 17 Jul",

      lat: 12.9716,
      lng: 77.5946,
      isFavourite: true,
    },
    {
      id: 8,
      title: "Lake Side Cabin",
      location: "Udaipur",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      price: 6100,
      rating: 4.6,
      reviews: 442,
      hours: "2 Days",
      badge: "Trending",
      lat: 24.5854,
      lng: 73.7125,
      date: "16 and 17 Jul",

      isFavourite: false,
    },
  ];

  return (
    <div className="min-h-screen font-helvetica bg-[#F8F4EE] pt-24">
      <div className="mx-auto  px-[5%]">
        <Toolbar
          view={view}
          setView={setView}
          sort={sort}
          setSort={setSort}
          total={175}
        />

        <div className="mt-8">
          {view === "list" && <ListView properties={properties} />}

          {view === "grid" && <GridView properties={properties} />}

          {view === "map" && <MapView properties={properties} />}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
