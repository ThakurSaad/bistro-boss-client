import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });

  return (
    <section className="md:mb-32 mb-16">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What our clients say"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center max-w-screen-lg mx-auto">
              <Rating
                style={{ maxWidth: 180, margin: "40px 0" }}
                value={review.rating}
                readOnly
              />

              <p>{review.details}</p>
              <h3 className="text-3xl text-[#CD9003] uppercase mt-2">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
