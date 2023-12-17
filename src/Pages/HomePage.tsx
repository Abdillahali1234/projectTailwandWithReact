import Futures from "../Components/Futures";
import GetStarted from "../Components/GetStarted";
import Landing from "../Components/Landing";
import StayProductive from "../Components/StayProductive";
import TestiMonials from "../Components/TestiMonials";

export default function HomePage() {
  return (
    <>
      <Landing />
      <Futures />
      <StayProductive/>
      <TestiMonials/>
      <GetStarted/>
    </>
  );
}
