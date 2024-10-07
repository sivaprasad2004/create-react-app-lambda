import React, { useState } from "react";
import { storage, db } from "./firebase";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 

const VideoUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate(); 

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return; 

    const storageRef = ref(storage, `videos/${file.name}`); 
    try {
      await uploadBytes(storageRef, file); 
      const url = await getDownloadURL(storageRef); 

      await db.collection("videos").add({
        title,
        url,
        likes: 0,
      });

      setMessage("Video uploaded successfully!"); 

      
      setTimeout(() => {
        navigate("/videos"); 
      }, 2000); 
    } catch (error) {
      console.error("Error uploading video: ", error);
      setMessage("Error uploading video. Please try again."); 
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleUpload}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter video title"
          required
        />
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
      {message && <p style={{ color: message.includes("Error") ? "red" : "green" }}>{message}</p>} {/* Display success or error message */}
    </div>
  );
};

export default VideoUpload;
