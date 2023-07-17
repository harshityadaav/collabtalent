import React, { useState, useRef, useEffect } from "react";
import "./functanality.css";

const Functanality = () => {
  const [activityType, setActivityType] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [progress, setProgress] = useState([]);
  const [timer, setTimer] = useState(0);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const timerRef = useRef(null);
  const chunksRef = useRef([]);

  const handleActivityTypeChange = (e) => {
    setActivityType(e.target.value);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      mediaStreamRef.current = stream;
      videoRef.current.srcObject = stream;
      videoRef.current.play();

      const options = { mimeType: "video/webm" };
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = handleDataAvailable;
      mediaRecorder.start();

      setIsRecording(true);
      setTimer(0);
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } catch (error) {
      console.error("Error accessing webcam: ", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    }
    setIsRecording(false);
    clearInterval(timerRef.current);
  };

  const saveRecording = () => {
    clearInterval(timerRef.current);
    const blob = new Blob(chunksRef.current, { type: "video/webm" });
    const videoURL = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = videoURL;
    a.download = `${activityType}_${new Date().toISOString()}.webm`;
    a.click();

    setProgress([...progress, { activityType, duration: timer, videoURL }]);
    setTimer(0);
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      chunksRef.current.push(event.data);
    }
  };

  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="App">
      <div className="activityContainer">
        <label className="activityLabel">
          Select Activity Type:
          <select
            className="activitySelect"
            value={activityType}
            onChange={handleActivityTypeChange}
          >
            <option value="">-- Select Activity --</option>
            <option value="interview">Interview</option>
            <option value="presentation">Presentation</option>
          </select>
        </label>
      </div>
      {activityType && (
        <div>
          <h2 className="activityType">Activity Type: {activityType}</h2>
          <div className="videoContainer">
            <video className="videoPreview" ref={videoRef}></video>
            <div className="buttonContainer">
              {!isRecording ? (
                <button className="startButton" onClick={startRecording}>
                  Start {activityType === "interview" ? "Interview" : "Presentation"}
                </button>
              ) : (
                <>
                  <button className="stopButton" onClick={stopRecording}>
                    Stop Recording
                  </button>
                  <button className="saveButton" onClick={saveRecording}>
                    Save Recording
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {isRecording && (
        <div className="timerContainer">
          <p>Recording Duration: {timer} seconds</p>
        </div>
      )}
      {progress.length > 0 && (
        <div className="progressContainer">
          <h2>Progress</h2>
          {progress.map((entry, index) => (
            <div key={index} className="progressEntry">
              <span>Activity Type: {entry.activityType}</span>
              <span>Duration: {entry.duration} seconds</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Functanality;

