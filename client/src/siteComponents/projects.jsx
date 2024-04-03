import React from "react";
import spotify from "../assets/spotify.png";
import wairimu from "../assets/wairimu.webp";

const Projects = () => {
  return (
    <div>
      {/*Desktop View*/}
      <div className="hidden xl:grid">
        <div className="p-4 ml-16">
          <h2 className="text-3xl font-bold mb-4 text-center text-teal-600">
            Projects
          </h2>
          <div className="grid grid-cols-8 gap-10">
            <div className="col-span-4">
              <img src={spotify} alt="spotify" className="bg-cover rounded" />
              <div className="mt-10">
                <button className="border border-teal-600">
                  <a
                    href="https://github.com/bunny254/spotify"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="p-1 hover:text-teal-600 dark:text-white">
                      View Github
                    </p>
                  </a>
                </button>
              </div>
            </div>
            <div className="col-span-4">
              <h1 className="mb-4 font-bold text-2xl dark:text-white">
                Spotify Clone
              </h1>
              <p className="mb-4 dark:text-white">
                I used spotify web API which enables developers to interact with
                Spotify's streaming service. Cloned the UI to and ensured
                control to interact with playback, play and resume songs.
              </p>
              <p className="mb-2 font-semibold dark:text-white">Inspiration:</p>
              <p className="mb-4 dark:text-white">
                Spotify is my favourite music streaming platform. Inspired by
                the working enviromnent for engineers at Spotify
                (#lifeatspotify) and the underlying technology, especially
                machine learning algorithms that curate beautify personalized
                content.
              </p>
              <h2 className="mb-4 font-semibold dark:text-white">Built With</h2>
              <div className="flex gap-4 dark:text-white">
                <button className="border border-teal-600">
                  <p className="px-2 py-1">React.js</p>
                </button>
                <button className="border border-teal-600">
                  <p className="px-2 py-1">Tailwind CSS</p>
                </button>
                <button className="border border-teal-600">
                  <p className="px-2 py-1">Spotify Web API Console</p>
                </button>
                <button className="border border-teal-600">
                  <p className="px-2 py-1">Express.js</p>
                </button>
                <button className="border border-teal-600">
                  <p className="px-2 py-1">MongoDB</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Mobile View*/}
      <div className="sm:grid xl:hidden">
        <div className="flex flex-col p-4">
          <h2 className="text-2xl font-bold mb-4 text-teal-600 text-center">
            Projects
          </h2>
          <div className="flex flex-col">
            <h1 className="font-bold text-xl dark:text-white">
              • Spotify Clone
            </h1>
            <p className="mb-4 dark:text-white">
              I used spotify web API which enables developers to interact with
              Spotify's streaming service. Cloned the UI to and ensured control
              to interact with playback, play and resume songs.
            </p>
            <p className="mb-2 font-semibold dark:text-white">Inspiration:</p>
            <p className="mb-4 dark:text-white">
              Spotify is my favourite music streaming platform. Inspired by the
              working enviromnent for engineers at Spotify (#lifeatspotify) and
              the underlying technology, especially machine learning algorithms
              that curate beautify personalized content.
            </p>
            <h2 className="mb-4 font-semibold dark:text-white">Built With</h2>
            <div className="flex flex-wrap gap-4 items-center justify-center dark:text-white">
              <div className="col-span-2">
                <button className="border border-teal-600">
                  <p className="px-2 py-1">React.js</p>
                </button>
              </div>
              <div className="col-span-2">
                <button className="border border-teal-600">
                  <p className="px-2 py-1">Tailwind CSS</p>
                </button>
              </div>

              <div className="col-span-2">
                <button className="border border-teal-600">
                  <p className="px-2">Spotify Web API Console</p>
                </button>
              </div>
              <div className="col-span-2">
                <button className="border border-teal-600">
                  <p className="px-2 py-1">Express.js</p>
                </button>
              </div>
              <div className="col-span-2">
                <button className="border border-teal-600">
                  <p className="px-2 py-1">MongoDB</p>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <img src={spotify} alt="spotify" className="bg-cover rounded" />
              <div className="mt-4 flex justify-center dark:text-white">
                <button className="border border-teal-600">
                  <a
                    href="https://github.com/bunny254/spotify"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="p-1 hover:text-teal-600">View Github</p>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <h1 className="font-bold text-xl dark:text-white">
              • Wairimu Portfolio
            </h1>
            <p className="mb-4 dark:text-white">
              Wairimu is a two-time nominee for the best female animator in the
              category for Women in Film Awards in Kenya.
            </p>
            <p className="mb-2 font-semibold dark:text-white">Inspiration:</p>
            <p className="mb-4 dark:text-white">
              My website inspired the design for this portfolio. I believe
              having a portfolio is a good way to have a professional presence,
              showcase my skills and projects.
            </p>
            <h2 className="mb-4 font-semibold dark:text-white">Built With</h2>
            <div className="flex flex-wrap gap-4 items-center justify-center dark:text-white">
              <div className="col-span-2">
                <button className="border border-teal-600">
                  <p className="px-2 py-1">React.js</p>
                </button>
              </div>
              <div className="col-span-2">
                <button className="border border-teal-600">
                  <p className="px-2 py-1">Tailwind CSS</p>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <img
                src={wairimu}
                alt="wairimunguyo.com"
                className="bg-cover rounded"
              />
              <div className="mt-4 flex justify-center dark:text-white">
                <button className="border border-teal-600">
                  <a
                    href="https://www.wairimunguyo.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="p-1 hover:text-teal-600">View Website</p>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
