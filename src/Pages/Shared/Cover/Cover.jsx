import { Parallax } from "react-parallax";

const Cover = ({ menuCover, title }) => {
  return (
    <Parallax
      blur={{ min: -40, max: 40 }}
      bgImage={menuCover}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-[#151515] opacity-60 md:max-w-screen-md md:py-28 py-10">
            <h1 className="mb-5 text-white text-5xl font-bold uppercase">
              {title}
            </h1>
            <p className="mb-5 font-semibold">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
