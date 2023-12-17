export default function Landing() {
  return (
    <section className="bg-[rgb(28,34,48)]">
      <div className=" h-[112px]"></div>
      <div className="container flex-col center-items mx-auto pt-[30px]">
        <div>
          <img src="../../public/images/illustration-intro.png" alt="" />
        </div>
        <div className="text-white text-center mt-3">
          <h1 className="text-[30px] md:text-[45px] ">
            All your files in one secure location
            <br />
            accessible anywhere
          </h1>
          <p className="text-sm max-w-[700px] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            quibusdam debitis voluptates quo dignissimos velit deleniti sapiente
            iste quia necessitatibus reprehenderit dolor pariatur, doloribus,
            odio asperiores, ullam similique reiciendis? Repellat?
          </p>
          <button className="text-white bg-[#42b0d1]  hover:bg-[#277a85] text-[20px] py-[15px] text-center mx-auto my-4 transition-all duration-300 block rounded-[30px] w-72">
            Get Started
          </button>
        </div>
      </div>

      <div className="w-full h-[200px]">
        <img src="../../public/images/bg-curvy-desktop.svg" alt="" className="w-full h-full"/>
      </div>
    </section>
  );
}
