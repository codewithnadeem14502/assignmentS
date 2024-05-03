import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

interface VideoCarouselProps {
  videos: string[];
  currentVideoIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  videos,
  currentVideoIndex,
  onNext,
  onPrev,
}) => {
  return (
    <div className="relative">
      <video
        key={videos[currentVideoIndex]}
        controls
        className="w-full py-12 rounded-lg bg-gray-400"
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute  bottom-0 left-0 right-0  bg-opacity-50 text-black text-center py-1  flex justify-between px-2">
        <button
          className=" bg-white bg-opacity-50 p-2 rounded-md"
          onClick={onPrev}
        >
          {/* <span className="sr-only">P</span> */}
          <FaAngleDoubleLeft className="h-6 w-6 text-black" />
          {/* <span className="text-gray-600 text-sm">Prev</span> */}
        </button>
        <p className="text-lg text-black text-center flex items-center font-semibold">
          {" "}
          Tell me about
        </p>
        <button
          className=" bg-white bg-opacity-50 p-2 rounded-md"
          onClick={onNext}
        >
          {/* <span className="sr-only">N</span> */}
          <FaAngleDoubleRight className="h-6 w-6 text-black" />
          {/* <span className="text-gray-600 text-sm">Next</span> */}
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
