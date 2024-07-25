import React from "react";
import { FaReact } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";

const Career = () => {
  const karir = [
    {
      id: 1,
      name: "Technical Support",
      deskripsi: "Sebagai technical support, aku selalu siap membantu memecahkan masalah teknis dengan kecepatan dan ketelitian, memastikan semuanya berjalan lancar untuk pengguna",
      logo: <FaReact size={30} color="green"/>,
    },
    {
      id: 2,
      name: "web Programming",
      deskripsi: "Sebagai web developer, saya menciptakan dunia digital yang menarik dan fungsional, membangun jembatan antara ide dan realitas melalui kode",
      logo: <FaReact size={30} color="green"/>,
    },
    {
      id: 3,
      name: "Data Analist",
      deskripsi: "Menjadi data analyst berarti memiliki kemampuan untuk melihat di balik angka, menemukan makna dalam data, dan mengomunikasikannya dengan jelas kepada tim.",
      logo: <FaReact size={30} color="green"/>,
    },
  ];

  return (
    <div className="py-3 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-[20px]">Career</h1>
        <h5 className="text-[30px] font-extrabold">
          My Work <span className="text-[#116466]">Specaility</span>
        </h5>
      </div>
      <div className="flex gap-2 flex-wrap my-5 mx-2 items-center justify-center">
        {karir.map((i) => (
          <div className="card w-96 bg-[#2c3531] shadow-xl ">
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
