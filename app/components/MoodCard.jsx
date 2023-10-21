const MoodCard = ({ card: { name }, i }) => {
  return (
    <img
      src={`https://res.cloudinary.com/danit332d/image/upload/v1697832418/mood/${name}.jpg`}
      alt={name}
      className={` h-1/3 object-cover  ${
        i === 0
          ? "clip-img-1 object-bottom pb-[.35rem] md:pb-3"
          : i == 1
          ? "clip-img-2 pb-[.35rem] md:pb-3"
          : "pb-0 md:pb-0 clip-img-3"
      }`}
    />
  );
};

export default MoodCard;
// ${
//   i === 0 ? "object-bottom " : i === 2 ? "object-bottom" : null
// }
