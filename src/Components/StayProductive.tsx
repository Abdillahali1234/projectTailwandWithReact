export default function StayProductive() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[20px] py-[150px]">
        <div>
          <img
            src="../../public/images/illustration-stay-productive.png"
            alt=""
          />
        </div>
        <div className="text-white flex flex-col gap-[20px] justify-center align-center  text-center md:text-start px-4 md:px-0">
          <h2 className="text-[30px] md:text-[40px]">
            Stay productive,
            <br /> wherever you are
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            excepturi incidunt quo deserunt quidem accusamus iure ab earum
            reprehenderit debitis!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            excepturi incidunt quo deserunt quidem accusamus iure ab earum
            reprehenderit debitis!
          </p>
          <div className="text-[rgb(65,173,172)] flex mx-auto md:mx-0 gap-2 pb-2 border-b-[2px] w-fit border-[rgb(65,173,172)] border-solid ">
            <a href="#" className="">
              See how Fylo works
            </a>
            <img
              src="../../public/images/icon-arrow.svg"
              alt=""
              className="animate-moveRight2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
