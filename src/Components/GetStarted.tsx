export default function GetStarted() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="relative min-h-[200px] ">
          <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] element-center flex-col  w-[865px] min-h-[275px]  max-w-full text-white text-center p-[30px]">
            <div>
              <h1 className="font-bold text-[40px] py-4 px-2 capitalize ">
                Get early access today
              </h1>
            </div>
            <div>
              <p className="text-[20px] max-h-[100px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                tempore? Vero adipisci eveniet voluptatibus cupiditate!
              </p>
            </div>
            <form className="flex items-center gap-[30px] flex-col md:flex-row py-[10px]">
              <input
                type="email"
                placeholder="email@example.com"
                className="p-[10px] rounded-[20px] outline-none border-none text-black w-full"
              />
              <button
                type="submit"
                className="text-white bg-[#42b0d1]  hover:bg-[#277a85] text-[20px] py-[10px] text-center mx-auto my-4 transition-all duration-300 block rounded-[30px] w-48">
                get started
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
