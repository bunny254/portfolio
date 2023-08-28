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
        <a href="https://github.com/bunny254"><AiOutlineGithub /></a>
        <a href="https://www.linkedin.com/in/simon-wachira-439870169/"><AiFillLinkedin /></a>
        <a href="https://www.instagram.com/_vibrant.k/"><AiOutlineInstagram /></a>
        <a href="https://twitter.com/am_kim_kay?t=nulc9No1rBXF-ZZnC__tAw&s=09"><AiOutlineTwitter /></a>
        <a href="https://wa.me/254770435844"><AiOutlineWhatsApp /> </a>
      </div>
      <div className="mx-auto mt-6 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
        <img src={photo1} alt="profile_image" className="object-cover"/>
      </div>
    </div>
  );
};

export default Home;
