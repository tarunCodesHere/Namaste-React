const Shimmer = function () {
  return (
    <>
      <div className="restaurant-list">
        {Array(15)
          .fill("")
          .map((e, indiex) => (
            <div key={indiex} className="shimmer-card"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
