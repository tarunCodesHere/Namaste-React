const Shimmer = function () {
  return (
    <div className="flex flex-wrap mt-20">
      {Array(15)
        .fill("")
        .map((e, indiex) => (
          <div
            key={indiex}
            className="bg-gray-200 h-56 w-56 p-3 m-2 shadow-md"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
