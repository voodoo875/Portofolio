import React from "react";

const Favstack = () => {
  const fav = [
    {
      id: 1,
      name: "coding",
      deskripsi: "test",
    },
    {
      id: 2,
      name: "nyanyi",
      deskripsi: "test",
    },
    {
      id: 3,
      name: "nyanyi",
      deskripsi: "test",
    },
    {
      id: 4,
      name: "nyanyi",
      deskripsi: "test",
    },
    {
      id: 5,
      name: "nyanyi",
      deskripsi: "test",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-wrap text-[20px] ">its tech time</h1>
      <h1 className="text-[30px] font-extrabold">
        My Favorite <span className="text-blue-500">Stack</span>{" "}
      </h1>
      <p className="text-[17px]">test</p>
      <div className="flex gap-2 flex-wrap my-5 mx-2 items-center justify-center">
        {fav.map((i) => (
          <div className="card w-96 bg-base-300 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title">{i.name}</h2>
            <p>{i.deskripsi}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Favstack;
