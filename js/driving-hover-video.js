document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".coruse-card");
  const sources = [
    "videos/ocean-drive.mp4",
    "videos/mountain-drive.mp4",
    "videos/lake-drive.mp4"
  ];

  cards.forEach((card, index) => {
    const button = card.querySelector(".course-button");
    const image = card.querySelector(":scope > img");
    if (!button || !image || !sources[index]) return;

    const video = document.createElement("video");
    video.className = "course-hover-video";
    video.src = sources[index];
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    card.appendChild(video);

    const playVideo = async () => {
      if (window.matchMedia("(hover: none)").matches) return;
      card.classList.add("is-video-playing");
      video.currentTime = 0;
      try { await video.play(); } catch (e) { }
    };

    const stopVideo = () => {
      card.classList.remove("is-video-playing");
      video.pause();
      video.currentTime = 0;
    };

    button.addEventListener("mouseenter", playVideo);
    button.addEventListener("mouseleave", stopVideo);
    button.addEventListener("focus", playVideo);
    button.addEventListener("blur", stopVideo);
  });
});
