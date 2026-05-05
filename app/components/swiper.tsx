import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { SearchMovie, TrailerResult } from "@/types";
import axios from "axios";
import { Skeleton } from "./skeleton";


export const SwiperMain = () => {
  const [movies, setMovies] = useState<SearchMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key={import.meta.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      )
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Skeleton className="h-150 w-full rounded-none" />
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper w-full"
        >
          {movies.slice(0, 10).map((movie) => (
            <SwiperSlide>
              <swiperMovie />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};