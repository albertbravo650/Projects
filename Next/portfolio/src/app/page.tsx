import Image from "next/image";
import Card from "./components/Card/Card";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import ThreeD from "./components/ThreeD/ThreeD";

export default function Home() {
  return (
    <div className="mid">
      <div className="hero">
        <div className="hero-text">
          <h1 className="text-4xl font-bold">Hello,</h1>
          <h1 className="text-4xl font-bold">I am Albert Bravo</h1>
          <h1 className="text-2xl font-medium">I am a software developer and passionate learner</h1>
        </div>
        {/* <Image
          src="/me.jpg"
          alt="me"
          width={400}
          height={400}
          className="hero-image"
          priority
        // hide image
        hidden
        ></Image> */}
        {/* <div id="three-d"><ThreeD></ThreeD></div> */}
      </div>
      <Card>
        <h1 className="text-center mt-20 mb-10 text-4xl">Play Tic Tac Toe</h1>
        <div className="tictac">
        <TicTacToe></TicTacToe>
        </div>
      </Card>
    </div>
  );
}
