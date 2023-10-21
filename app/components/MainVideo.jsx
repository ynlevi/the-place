function MainVideo() {
  return (
    <video
      src={
        "https://res.cloudinary.com/dcb9wy3kf/video/upload/v1696493609/main-video.mp4"
      }
      className="h-screen w-screen object-cover -z-20 relative"
      autoPlay
      playing={true}
      muted={true}
      loop={true}
      playsInline
    />
  );
}

export default MainVideo;
