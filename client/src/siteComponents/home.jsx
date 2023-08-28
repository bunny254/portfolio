import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import photo1 from "../assets/transparent_background.webp";

const Home = () => {
  return (
    <div className="grid">
      <div className="text-4xl flex justify-center gap-6 text-gray-600">
        <AiOutlineGithub />
        <AiFillLinkedin />
        <AiOutlineInstagram />
        <AiOutlineTwitter />
        <AiOutlineWhatsApp />
      </div>
      <div className="mx-auto mt-6 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
        <img src={photo1} alt="profile_image" className="object-cover"/>
      </div>
    </div>
  );
};

export default Home;
