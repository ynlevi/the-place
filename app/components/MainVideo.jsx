function MainVideo() {
  return (
    <video
      src={
        "https://res.cloudinary.com/dcb9wy3kf/video/upload/v1696493609/main-video.mp4"
      }
      className="h-screen w-screen object-cover -z-20 relative"
      playing={true}
      loop={true}
      muted={true}
      autoPlay={true}
      playsInline={true}
    />
  );
}

export default MainVideo;
