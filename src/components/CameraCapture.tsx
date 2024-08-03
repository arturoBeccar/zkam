import React, { useRef, useState, useEffect } from "react";

const CameraCapture: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          video.play();
        }
      })
      .catch((err) => {
        console.error("Error accessing the camera", err);
      });
  };

  const takePhoto = () => {
    const size = 300; // Size for the square photo

    const video = videoRef.current;

    if (video) {
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;

      const context = canvas.getContext("2d");
      if (context) {
        const aspectRatio = videoWidth / videoHeight;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (aspectRatio > 1) {
          // If the video is wider than it is tall
          drawHeight = size;
          drawWidth = size * aspectRatio;
          offsetX = (drawWidth - size) / 2;
          offsetY = 0;
        } else {
          // If the video is taller than it is wide
          drawWidth = size;
          drawHeight = size / aspectRatio;
          offsetX = 0;
          offsetY = (drawHeight - size) / 2;
        }

        context.drawImage(video, -offsetX, -offsetY, drawWidth, drawHeight);
        const dataUrl = canvas.toDataURL("image/png");
        setPhoto(dataUrl);

        const data = context.getImageData(0, 0, canvas.width, canvas.height);
        // Array pixels by RGBA
        console.log("array", data.data);
      }
    }
  };

  const closePhoto = () => {
    setPhoto(null);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[300px] h-[300px] overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
      </div>
      <button
        onClick={takePhoto}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Take Photo
      </button>
      <div
        className={`flex flex-col items-center mt-4 ${
          photo ? "block" : "hidden"
        }`}
      >
        <img
          src={photo || ""}
          alt="Captured"
          className="border border-black w-[300px] h-[300px]"
        />
        <button
          onClick={closePhoto}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CameraCapture;
