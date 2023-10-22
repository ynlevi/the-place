function MainVideo() {
  return (
    <video
      muted={true}
      playsInline={true}
      autoPlay={true}
      loop={true}
      src={
        "https://res.cloudinary.com/danit332d/video/upload/v1697906247/main-video.mp4"
      }
      className="object-cover -z-20 relative h-screen w-screen"
    />
  );
}

export default MainVideo;
