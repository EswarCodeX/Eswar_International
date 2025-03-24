import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from "../assets/allveg.jpg";
import img2 from "../assets/garland.png";
import img3 from "../assets/source.png";
import img4 from "../assets/trade.jpg";
import { Link } from "react-router-dom";

export default function CarouselWithContent() {
  return (
    <Carousel loop={true} autoplay={true} className="font-sans">
      <div className="relative h-full w-full ">
        <img src={img1} alt="image 1" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl"
            >
              Premium Quality Vegetables for Export
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-xs sm:text-base"
            >
              We source the finest, pesticide-free vegetables directly from local farms, ensuring freshness and quality for international markets.
            </Typography>
            <Link className="text-white no-underline hidden sm:block" to="/vegetables" >Explore Our Vegetable Range →</Link>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img src={img2} alt="image 2" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/60">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl"
            >
              Exquisite Handmade Garlands
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-xs sm:text-base"
            >
              Ethically sourced flowers, handcrafted into beautiful garlands for religious, ceremonial, and decorative purposes worldwide.
            </Typography>
            <Link className="text-white no-underline hidden sm:block" to="/garland" > View Garland Collections →</Link>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img src={img3} alt="image 3" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/60">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl"
            >
              Sustainable & Ethical Sourcing
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-xs sm:text-base"
            >
             Committed to fair trade, organic farming, and eco-friendly packaging to deliver purity with every export.
            </Typography>
            <Link className="text-white no-underline hidden sm:block" to="/about" >Learn About Our Process →</Link>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img src={img4} alt="image 2" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/60">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl"
            >
             Global Export Partners
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-xs sm:text-base"
            >
              Reliable logistics, certifications (HACCP, USDA, FSSAI), and timely deliveries to meet your business demands.
            </Typography>
            <Link className="text-white no-underline hidden sm:block" to="/contact" >Become a Partner Today →</Link>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
