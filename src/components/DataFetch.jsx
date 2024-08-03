import { useEffect, useState } from "react";

const DataFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((items) => setData(items.products))
      .catch((error) => console.log(error));
  }, []);
  console.log(data);

  return (
    <>
      <div className=" grid grid-cols-3 w-[90%] gap-6 mx-auto  ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white-400 shadow-xl rounded w-[80%]  p-2"
          >
            <img
              className="px-4 w-full  h-48 "
              src={item.images[0]}
              alt={item.title}
            />
            <h2 className="text-center  text-red-600 ">{item.title}</h2>
            <h2 className="text-center font-bold py-2 w-full max-w-xs mx-auto truncate ">
              {item.description}
            </h2>
            <h2 className="text-center font-medium ">
              Price- {Math.round(item.price * 80)}
            </h2>{" "}
          </div>
        ))}
      </div>
    </>
  );
};
export default DataFetch;
