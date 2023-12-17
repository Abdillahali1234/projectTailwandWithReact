type props = {
  img: string;
  tittle: string;
  dec: string;
};
export default function Future({ img, tittle, dec }: props) {
  return (
    <div className="flex flex-col items-center gap-4" >
      <div >
        <img src={`../../public/images/${img}`} alt="" />
      </div>
      <h3 className="text-white text-[20px] md:text-[30px]">{tittle}</h3>
      <p className="text-center text-white text-[16px] px-5">{dec}</p>
    </div>
  );
}
