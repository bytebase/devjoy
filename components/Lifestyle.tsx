import Image from "next/future/image";
import Container from "./Container";
import cameraImage from "@/public/images/lifestyle/camera.webp";
import campingImage from "@/public/images/lifestyle/camping.webp";
import catImage from "@/public/images/lifestyle/cat.webp";
import codeImage from "@/public/images/lifestyle/code.webp";
import coffeeImage from "@/public/images/lifestyle/coffee.webp";
import foodImage from "@/public/images/lifestyle/food.webp";
import frisbeeImage from "@/public/images/lifestyle/frisbee.webp";
import guitarImage from "@/public/images/lifestyle/guitar.webp";
import musicImage from "@/public/images/lifestyle/music.webp";
import singImage from "@/public/images/lifestyle/sing.webp";
import vrImage from "@/public/images/lifestyle/vr.webp";

const lifestyles = [
  { image: catImage },
  { image: vrImage },
  { image: cameraImage },
  { image: musicImage },
  { image: frisbeeImage },
  { image: foodImage },
  { image: coffeeImage },
  { image: guitarImage },
  { image: singImage },
  { image: codeImage },
];
const Lifestyle = () => {
  return (
    <section id="lifestyle" aria-label="Lifestyle" className="pt-20 sm:pt-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-6xl lg:pr-24">
          <div className="flex flex-row items-center">
            <Image
              className="hidden lg:block mt-2 h-24 w-auto mr-2"
              src={campingImage}
              alt=""
            />
            <h2 className="font-display text-4xl font-medium tracking-tighter text-slate-900 sm:text-6xl">
              代码之外 处处精彩
            </h2>
          </div>
          <p className="mt-4 font-display text-2xl tracking-tight text-black">
            告别标签化的程序员，走进生活里的开发者。 参加
            DevJoy，了解开发者真实的「生活方式」。
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-5">
            {lifestyles.map((lifestyle, index) => (
              <div
                key={index}
                className="group col-span-1 flex justify-center py-4 px-4"
              >
                <Image
                  className="object-contain h-24 sm:h-32 w-auto transition duration-300 group-hover:scale-110"
                  src={lifestyle.image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Lifestyle;
