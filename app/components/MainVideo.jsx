function MainVideo() {
  return (
    <video
      muted={true}
      playsInline={true}
      autoPlay={true}
      loop={true}
      src={
        "https://res.cloudinary.com/dcb9wy3kf/video/upload/v1696493609/main-video.mp4"
      }
      className="object-cover -z-20 relative h-screen w-screen"
    />
  );
}

export default MainVideo;
