import React, { useState, useEffect, useCallback } from "react";
import { db } from "./firebase"; 
import { collection, query, orderBy, limit, getDocs, startAfter } from "firebase/firestore";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  
  const fetchVideos = useCallback(async () => {
    try {
      let q;

     
      if (lastDoc) {
        q = query(
          collection(db, "videos"),
          orderBy("title", "asc"),
          limit(5),
          startAfter(lastDoc)
        );
      } else {
        q = query(
          collection(db, "videos"),
          orderBy("title", "asc"),
          limit(5)
        );
      }

      const querySnapshot = await getDocs(q);
      const videoList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

     
      setVideos(prevVideos => [...prevVideos, ...videoList]);

      
      if (querySnapshot.docs.length < 5) {
        setHasMore(false);
      }

      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching videos: ", error);
      setLoading(false);
    }
  }, [lastDoc]); 

 
  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]); 

  
  const handleLoadMore = () => {
    if (hasMore) {
      fetchVideos();
    }
  };

  if (loading) {
    return <p>Loading videos...</p>;
  }

  return (
    <div>
      <h2>Videos</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <h3>{video.title}</h3>
            <video width="320" height="240" controls>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul>
      {hasMore && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
};

export default VideoList;
