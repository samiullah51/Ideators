import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { useState, useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./App.css";
export default function App() {
  const recorderControls = useAudioRecorder();
  const [audioURL, setAudioURL] = useState("");
  const totalTimeRef = useRef(0);

  const getFile = (blob) => {
    console.log("file");
    console.debug("getting file: ", blob);
    console.debug("recorderControls: ", {
      blob: recorderControls.recordingBlob,
      time: recorderControls.recordingTime,
    });
    const modifiedBlob = new Blob([blob], { type: "audio/ogg" });
    console.debug("modifiedBlob: ", blob);

    const url = URL.createObjectURL(modifiedBlob);
    setAudioURL(url);
  };

  function formatTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    var formattedTime =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      remainingSeconds.toString().padStart(2, "0");

    return formattedTime;
  }

  return (
    <div className="App">
      <AudioRecorder
        className="customAudioRecorder" // Apply custom class name
        recorderControls={recorderControls}
        onRecordingComplete={getFile}
        showVisualizer
        visualizationCanvasClassName="customVisualizerCanvas"
      />
      <button onClick={() => setAudioURL("")}>cancel</button>
      {audioURL && (
        <AudioPlayer
          className="myCustomAudioPlayer" // Add a custom class name
          defaultDuration={formatTime(totalTimeRef.current)}
          src={audioURL}
          autoPlay={false}
          showJumpControls={false}
          volumeJumpStep={false}
          showFilledVolume={false}
        />
      )}
    </div>
  );
}
