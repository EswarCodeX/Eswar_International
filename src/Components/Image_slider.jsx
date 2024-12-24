import { Carousel } from "@material-tailwind/react";
import img1 from "../assets/forest.jpg";
import img2 from "../assets/art.jpg";
import img3 from "../assets/butter.jpg";
import img4 from "../assets/village.jpg";

export default function Image_slider() {
  return (
    <Carousel
      loop={true}
      autoplay={true}
      className=""
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={img1}
        alt="image 1"
        className="h-1/2 w-full object-cover"
      />
      <img
        src={img2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={img3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={img4}
        alt="image 4"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}