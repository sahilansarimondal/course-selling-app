import NavigationBar from "@/components/Navigation-bar";
import { InputWithButton } from "@/components/InputWithButton";
import { Button } from "@/components/ui/button";

let typeOfClasses = [
  {
    id: "1",
    name: "Audio Classes",
    image: "images/img_volume.svg",
    color: "red",
  },
  {
    id: "2",
    name: "Live Classes",
    image: "images/img_user_red_300.svg",
    color: "orange",
  },
  {
    id: "3",
    name: "Recorded Class",
    image: "images/img_play_green_a700.svg",
    color: "green",
  },
];

let cardData = [
  {
    id: "1",
    image: "images/img_download.svg",
    name: "Standard One",
    description:
      "Standard 2 builds on the foundations of Standard 1 and includes requirements...",
  },
  {
    id: "2",
    image: "images/img_download_gray_800.svg",
    name: "Standard Two",
    description:
      "Standard 2 builds on the foundations of Standard 1 and includes requirements...",
  },
  {
    id: "3",
    image: "images/img_whatsapp.svg",
    name: "Standard Three",
    description:
      "Standard 2 builds on the foundations of Standard 1 and includes requirements...",
  },
  {
    id: "4",
    image: "images/img_rewind.svg",
    name: "Standard Four",
    description:
      "Standard 2 builds on the foundations of Standard 1 and includes requirements...",
  },
  {
    id: "5",
    image: "images/img_music.svg",
    name: "Standard Five",
    description:
      "Standard 2 builds on the foundations of Standard 1 and includes requirements...",
  },
  {
    id: "6",
    image: "images/img_volume_deep_orange_500.svg",
    name: "Standard Six",
    description:
      "Standard 2 builds on the foundations of Standard 1 and includes requirements...",
  },
  {
    id: "7",
    image: "images/img_arrowdown.svg",
    name: "Standard Seven",
    description:
      "Standard 2 builds on the foundations of Standard 1 and includes requirements...",
  },
  {
    id: "8",
    image: "images/img_info.svg",
    name: "Standard Eight",
    description:
      "Standard 2 builds on the foundations of Standard 1 and includes requirements...",
  },
  {
    id: "9",
    image: "images/img_volume_red_500.svg",
    name: "Standard Nine",
    description:
      "Standard 2 builds on the foundations of Standard 1 and includes requirements...",
  },
];

export default function Home() {
  return (
    <main className="my-5 mx-20 p-2">
      <NavigationBar />
      <div className="first flex mt-14  justify-center items-center">
        <div className="">
          <p className=" font-bold text-6xl ">
            Grow up your <br /> skills <br /> by online courses <br /> with
            Educatsy
          </p>
          <p className=" text-gray-700 mt-8">
            Educatsy is a Global training provider based across the UK that
            specializes in accredited and bespoke training courses. We crush the
            barriers to getting a degree.
          </p>
          <div className=" py-8">
            <InputWithButton />
          </div>
        </div>
        <div>
          <img
            src="images/img_image_699x619.png"
            alt="Landing page main image"
          />
        </div>
      </div>
      <div className=" second flex mt-14 justify-center items-center">
        <div className="second flex w-[50%]  flex-col items-center text-center justify-center">
          <p className=" font-bold text-6xl ">
            High quality video, audio <br /> & live classes
          </p>
          <p className=" text-gray-700 my-12">
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video image with considerably more
            than 480 vertical scan lines or 576 vertical lines is considered
            high-definition.
          </p>
          <Button variant={"custom"}>Courses</Button>
        </div>
      </div>
      <div className="third px-20">
        <div className=" my-16">
          <img src="images/img_rectangle2868.png" alt="mid banner" />
        </div>

        <div className="flex justify-between">
          {typeOfClasses.map((course) => {
            return (
              <div
                key={course.image}
                className="first flex p-3 justify-center w-80 items-center rounded-xl bg-white gap-3 "
              >
                <div
                  className={` p-4 rounded-lg  `}
                  style={
                    course.color == "red"
                      ? { background: "rgb(254 226 226)" }
                      : course.color == "green"
                      ? { background: "rgb(220 252 231)" }
                      : { background: "rgb(255 237 213)" }
                  }
                >
                  <img
                    src={course.image}
                    alt="Audio Classes "
                    height={"44px"}
                    width={"44px"}
                  />
                </div>
                <div className=" font-bold text-3xl">{course.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="four mt-14">
        <p className=" text-6xl font-bold p-6">
          Qualified lessons for students
        </p>
        <p className=" text-[#5d5a6f]  text-center text-lg">
          A lesson or class is a structured period of time where learning is
          intended to occur. <br /> It involves one or more students being
          taught by a teacher or instructor.
        </p>
        <div className=" flex  justify-center m-8 gap-4">
          <div className=" h-16 w-36 text-lg flex items-center justify-center rounded-lg font-semibold hover:bg-[#eebc74] bg-white">
            <button>Kindergarten</button>
          </div>
          <div className=" h-16 w-36 text-lg flex items-center justify-center rounded-lg font-semibold hover:bg-[#eebc74] bg-white">
            <button>High Schoold</button>
          </div>
          <div className=" h-16 w-36 text-lg flex items-center justify-center rounded-lg font-semibold hover:bg-[#eebc74] bg-white">
            <button>Collage</button>
          </div>
        </div>
        <div className=" cardSection grid sm:grid-cols-4 ">
          {cardData.map((card) => {
            return (
              <div className=" flex justify-between flex-col justify-self-center m-8 p-8 gap-8 items-center bg-white h-auto w-72 rounded-xl">
                <div className=" flex flex-col justify-center items-center gap-4">
                  <img src="images/img_download.svg" alt="card" />
                  <p className=" text-2xl font-bold">Standerd One</p>
                  <p className=" text-center">
                    Standard 1 is a foundation Standard that reflects 7
                    important concepts...
                  </p>
                </div>

                <button className=" border-2 py-2 px-4 rounded-lg text-base text-[#d97356] border-[#d97356] hover:bg-orange-300 hover:border-orange-700 hover:text-slate-800">
                  Class Details
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
