import { useState } from "react";
import TestiMonialBox from "./TestiMonialBox";

export default function TestiMonials() {
    const [testData] = useState([
      {
        id: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
        image: "profile-1.jpg",
        position: "Founder & CEO, Huddle",
        name: "Ahmed",
      },
      {
        id: 2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
        image: "profile-2.jpg",
        position: "Founder & CEO, Huddle",
        name: "Mohamed",
      },
      {
        id: 3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
        image: "profile-3.jpg",
        position: "Founder & CEO, Huddle",
        name: "Eman",
      },
    ]);
  return (
    <section className="container mx-auto">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative">
        <div className="absolute top-[-35px] left-0 z-[-1]">
          <img src="../../public/images/bg-quotes.png" alt=""/>
        </div>
        {testData.map(
          (person: {
            id: number;
            desc: string;
            image: string;
            position: string;
            name: string;
          }) => {
            return (
              <TestiMonialBox
                key={person.id}
                desc={person.desc}
                image={person.image}
                position={person.position}
                name={person.name}
              />
            );
          }
        )}
      </div>
      <div className="min-h-[300px]"></div>
    </section>
  );
}
