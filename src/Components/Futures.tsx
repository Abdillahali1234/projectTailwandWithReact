import { useState } from "react";
import Future from "./Future";
export default function Futures() {
  const [items] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Acces your files,anywhere",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
  ]);
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[860px] mx-auto gap-[40px] py-[30px]">
        {items.map((item, index) => {
          return (
            <Future
              key={`${index}-2`}
              img={item.icon}
              tittle={item.title}
              dec={item.desc}
            />
          );
        })}
      </div>
    </section>
  );
}
