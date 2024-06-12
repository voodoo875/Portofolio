import React from "react";
import { FaReact } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";

const Career = () => {
  const karir = [
    {
      id: 1,
      name: "coding",
      deskripsi: "test",
      logo: <FaReact size={30} color="red"/>,
    },
    {
      id: 2,
      name: "nyanyi",
      deskripsi: "test",
      logo: <FaImage size={30} />,
    },
    {
      id: 3,
      name: "nyanyi",
      deskripsi: "test",
      logo: <FaReact size={30}/>,
    },
  ];

  return (
    <div className="py-3 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-[20px]">Career</h1>
        <h5 className="text-[30px] font-extrabold">
          My Work <span className="text-blue-500">Specaility</span>
        </h5>
        <p className="text-[17px]">teks</p>
      </div>
      <div className="flex gap-2 flex-wrap my-5 mx-2 items-center justify-center">
        {karir.map((i) => (
          <div className="card w-96 bg-base-300 shadow-xl ">
            <div className="card-body">
              <div className="flex items-center gap-2">
                {i.logo}
                <h2 className="card-title">{i.name}</h2>
              </div>
              <p>{i.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
