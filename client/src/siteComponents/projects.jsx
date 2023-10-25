import React from "react";
import spotify from "../assets/spotify.png";

const Projects = () => {
  return (
    <div>
      {/*Desktop View*/}
      <div className="hidden xl:grid">
        <div className="p-4 ml-16">
          <h2 className="text-2xl font-bold mb-4 text-teal-600">Projects</h2>
          <div className="grid grid-cols-8 gap-10">
            <div className="col-span-4">
              <img src={spotify} alt="spotify" className="bg-cover rounded" />
              <div className="mt-10">
                <button className="border border-teal-600">
                  <p className="p-1 hover:text-teal-600">View Github</p>
                </button>
              </div>
            </div>
            <div className="col-span-4">
              <h1 className="mb-4 font-bold text-2xl">Spotify Clone</h1>
              <p className="mb-4">
                Used spotify web API which enables developers to interact with
                Spotify's streaming service. Cloned the UI to and ensured
                control to interact with playback, play and resume songs.
              </p>
              <p className="mb-2 font-semibold">Inspiration:</p>
              <p className="mb-4">
                Spotify has always been my favourite music streaming platform.
                Inspired with the working enviromnent for engineers at Spotify
                (#lifeatspotify) and the underlying technology especially
                machine learning algorithms that curate beautify personalized
                content.
              </p>
              <h2 className="mb-4 font-semibold">Built With</h2>
              <div className="flex gap-4">
                <button className="rounded-2xl border border-teal-600">
                  <p className="px-2 py-1">React.js</p>
                </button>
                <button className="rounded-2xl border border-teal-600">
                  <p className="px-2 py-1">Tailwind CSS</p>
                </button>
                <button className="rounded-2xl border border-teal-600">
                  <p className="px-2 py-1">Spotify Web API Console</p>
                </button>
                <button className="rounded-2xl border border-teal-600">
                  <p className="px-2 py-1">Express.js</p>
                </button>
                <button className="rounded-2xl border border-teal-600">
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
            <h1 className="font-bold text-xl">• Spotify Clone</h1>
            <p className="mb-4">
              Used spotify web API which enables developers to interact with
              Spotify's streaming service. Cloned the UI to and ensured control
              to interact with playback, play and resume songs.
            </p>
            <p className="mb-2 font-semibold">Inspiration:</p>
            <p className="mb-4">
              Spotify has always been my favourite music streaming platform.
              Inspired with the working enviromnent for engineers at Spotify
              (#lifeatspotify) and the underlying technology especially machine
              learning algorithms that curate beautify personalized content.
            </p>
            <h2 className="mb-4 font-semibold">Built With</h2>
            <div className="grid grid-cols-4 gap-4 items-center justify-center">
              <div className="col-span-2">
                <button className="rounded-2xl border border-teal-600">
                  <p className="px-2 py-1">React.js</p>
                </button>
              </div>
              <div className="col-span-2">
                <button className="rounded-2xl border border-teal-600">
                  <p className="px-2 py-1">Tailwind CSS</p>
                </button>
              </div>

              <div className="col-span-2">
                <button className="rounded-2xl border border-teal-600">
                  <p className="px-2 py-1">Spotify Web API Console</p>
                </button>
              </div>
              <div className="col-span-2">
                <button className="rounded-2xl border border-teal-600">
                  <p className="px-2 py-1">Express.js</p>
                </button>
              </div>
              <div className="col-span-2">
                <button className="rounded-2xl border border-teal-600">
                  <p className="px-2 py-1">MongoDB</p>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <img src={spotify} alt="spotify" className="bg-cover rounded" />
              <div className="mt-4 flex justify-center">
                <button className="border border-teal-600">
                  <p className="p-1 hover:text-teal-600">View Github</p>
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
