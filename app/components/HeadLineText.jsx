function HeadLineText() {
  return (
    <div className="absolute inset-0 -z-10 flex justify-center items-center gap-10 flex-col text-white font-handwrite">
      <TextAnimation text={"The Place"} font={"text-6xl"} />
      <TextAnimation
        text={"Where Every Stay is a Celebration"}
        font={"text-2xl md:text-4xl"}
      />
    </div>
  );
}

export default HeadLineText;

const TextAnimation = ({ text, font }) => {
  return <h1 className={font}>{text}</h1>;
};
