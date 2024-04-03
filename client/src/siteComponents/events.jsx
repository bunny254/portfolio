import React from "react";
import event1 from "../assets/microsoft3.webp";
//import event1b from "../assets/microsoft2.webp";
//import event1c from "../assets/microsoft.webp";

const Events = () => {
  return (
    <div>
      <div className="hidden xl:grid">
        <div className="p-4 ml-16">
          <h2 className="text-3xl text-center font-bold mb-4 text-teal-600">
            Highlights from past events & conferences
          </h2>
          <div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <img
                  src={event1}
                  alt="Microsoft Hackerthon 2023"
                  className="w-[80%] h-60 object-cover"
                />
              </div>
              <div className="col-span-8">
                <div>
                  <h1 className="font-bold text-xl dark:text-white">
                    Global PP Hackerthon at Microsoft(ADC) 2023
                  </h1>
                  <p className="mt-2 dark:text-white">
                    I was presented with a unique opportunity to challenge myself,
                    learn new skills, and showcase my talent thanks to
                    Microsoft. <br /> I worked in a diverse team to deliver a
                    project using Microsoft Power Apps across the entire
                    Microsoft Power Platform. I also won prizes including T-shirts,
                    Customized Mug and Free access to LinkedIn learning for a
                    whole year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:grid xl:hidden">
        <div className="mt-4 p-4">
          <h2 className="text-2xl font-bold mb-4 text-teal-600 text-center">
            Highlights from past events & conferences
          </h2>
          <div className="flex">
            <img
              src={event1}
              alt="Microsoft Hackerthon 2023"
              className="w-full h-[35rem] object-cover"
            />
          </div>
          <div>
            <h1 className="font-bold text-xl mt-4 dark:text-white">
              Global PP Hackerthon at Microsoft(ADC) 2023
            </h1>
            <p className="mt-3 dark:text-white">
              Presented with a unique opportunity to challenge myself, learn new
              skills, and showcase my talent thanks to Microsoft. <br /> Worked
              in a diverse team to deliver a project using Microsoft Power Apps
              across the entire Microsoft Power Platform. <br /> Won prizes
              including T-shirts, Customized Mug and Free access to LinkedIn
              learning for a whole year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
