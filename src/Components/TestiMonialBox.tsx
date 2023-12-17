type props = {
  desc:string;
  image:string;
  position:string;
  name:string;
};
export default function TestiMonialBox({desc,image,position,name}: props) {
  return (
    <div className="bg-[rgb(33,41,60)] p-5 rounded-[10px] text-white mx-4 shadow-[8px_8px_1px_10px_rgb(28,32,44)] ">
      <div className="pb-3 max-w-[400px]">{desc}</div>
      <div className="flex gap-[20px] items-center">
        <div className="w-[80px] h-[80px]">
          <img
            className=" rounded-full"
            src={`../../public/images/${image}`}
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold text-[20px]  ">{name}</h2>
          <h2>{position}</h2>
        </div>
      </div>
    </div>
  );
}
