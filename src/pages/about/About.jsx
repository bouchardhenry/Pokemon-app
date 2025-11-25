import { Link } from "react-router-dom";
import CurrentPageLogger from "../../components/current-page-logger/CurrentPageLogger";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div className="breadcrums">
        <code>
          <Link to="/">Home</Link> /<span> </span>
          <CurrentPageLogger />
        </code>
      </div>
      <div className={styles["about-text"]}>
        <h1>About</h1>
        <h2>Welcome to the Pokémon Gallery</h2>
        <p>
          Hello, fellow Pokémon trainers and enthusiasts! My name is Henry, and
          I'm thrilled to share this passion project with you.
        </p>
        <br />
        <h2>A Journey That Started in Childhood</h2>
        <p>
          Like many of you, my love affair with Pokémon began in childhood. I
          still remember the first time I watched Ash Ketchum embark on his
          journey to become a Pokémon Master. The colorful creatures, the epic
          battles, the bonds between trainers and their Pokémon – it all
          captivated my imagination in ways that few other things could. Whether
          it was trading cards during recess, battling friends on my Game Boy,
          or spending hours watching the anime, Pokémon wasn't just a hobby – it
          became a fundamental part of who I am.
        </p>
        <br />
        <h2>Why This Project Exists</h2>
        <p>
          As I grew older, my appreciation for Pokémon only deepened. I marveled
          at the intricate designs of each creature, the thoughtful type
          matchups, and the vast world that Game Freak created. Fast forward to
          today, and I've combined two of my passions: Pokémon and web
          development.
          <br></br>
          This Pokémon Gallery is more than just a database or a simple list.
          It's a tribute to the franchise that has given me countless hours of
          joy, friendship, and adventure. Every line of code written, every
          design decision made, and every feature implemented comes from a place
          of genuine love for these incredible creatures.
        </p>
        <br />
        <h2>What You'll Find Here</h2>
        <p>
          This gallery showcases all 151 original Pokémon from the Kanto region
          – the ones that started it all. Each Pokémon has its own dedicated
          profile page where you can learn about their types, abilities, stats,
          and more. Whether you're a seasoned trainer looking to refresh your
          memory or a newcomer eager to learn about these amazing creatures,
          this gallery is designed with you in mind.
        </p>
        <br />
        <h2>Built with Care</h2>
        <p>
          As a developer and lifelong Pokémon fan, I wanted to create something
          that honored the legacy of these beloved characters. This project is
          built using modern web technologies including React and the PokéAPI,
          ensuring a smooth and responsive experience whether you're browsing on
          your phone, tablet, or computer.
        </p>
        <br />
        <h2>A Labor of Love</h2>
        <p>
          Every aspect of this site has been crafted with attention to detail
          and respect for the source material. From the navigation to the
          individual Pokémon cards, I've poured countless hours into making sure
          this gallery serves as both a useful resource and a celebration of
          everything that makes Pokémon special.
        </p>
        <br />
        <h2>Thank You</h2>
        <p>
          Thank you for visiting the Pokémon Gallery. Whether you're here to
          relive childhood memories, prepare for your next battle, or simply
          browse through your favorite Pokémon, I hope this site brings you as
          much joy as creating it has brought me.
          <br />
          <br />
          May your Pokédex always be full, and may your journey as a trainer
          never end! Gotta Catch 'Em All!
          <br />
          <br />— Henry
        </p>
      </div>
    </>
  );
};

export default About;
