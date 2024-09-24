import { Card, CardHeader, Image } from "@nextui-org/react";
import LetterPullup from "../magicui/letter-pullup";

const data = [
  {
    p: "#1 Crop Improvement",
    url: "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4614-7028-1?as=webp",
  },
  {
    p: "#2 Plant Signaling",
    url: "https://media.springernature.com/full/springer-static/cover-hires/book/978-81-322-1542-4?as=webp",
  },
  {
    p: "#3 Biomass and Bioenergy",
    url: "https://media.springernature.com/full/springer-static/cover-hires/book/978-3-319-07578-5?as=webp",
  },
];
export default function TopThree() {
  return (
    <>
      {/* <h1 className="text-black pt-20 text-center font-semibold text-6xl">BOOKS</h1> */}
      <LetterPullup
        words="Books"
        className="text-black pt-20 text-center font-semibold text-6xl"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="sm:w-[60vw] md:w-[90vw] lg:w-[70vw] sm:gap-5 md:gap-8 grid grid-cols-12 grid-rows-1 py-20 ml-5 mr-5 pb-3">
          {data.map((item, index) => (
            <Card
              key={index}
              className="col-span-12 sm:col-span-4 h-[330px] items-center mb-10"
              isPressable
              isHoverable
              onPress={() =>
                window.open(
                  "http://www.springer.com/life+sciences/plant+sciences/book/978-1-4614-7027-4"
                )
              }
            >
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-black/60  uppercase font-bold">
                  {item.p}
                </p>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-max h-80 object-full sm:pt-15 lg:pt-5 mt-10"
                src={item.url}
              />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
