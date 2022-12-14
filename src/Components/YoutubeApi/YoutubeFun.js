import React, { useState, useEffect } from "react";
import OneVideo from "./OneVideo";
import "./U2beRelated.css";

const joya = {
  textAlign: "center",
  margin: "2rem 0 -1rem 0",
};

export default function YoutubeFun() {
  var [VidList, setVidList] = useState([]);

  useEffect(() => {
    fetch(
      // `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC_q9lP_mD6r98bdm_UuzwoXR8mJJKbI4I&channelId=UC59ZRYCHev_IqjUhremZ8Tg&part=snippet,id&order=date&maxResults=8`
    )
      .then((res) => res.json())
      .then((data) => {
        const ReturnedList = data.items;
        setVidList(ReturnedList);
      });
  }, []);
  //   console.log(VidList);

  return (
    <>
      <h1 style={joya}>Latest videos</h1>
      <div className="youtube-videos-wrapper container row">
        {VidList.map((x) => {
          return (
            <OneVideo
              VidId={x.id.videoId}
              VidTumbnail={x.snippet.thumbnails.high.url}
              VidTitle={x.snippet.title}
              VidDescription={x.snippet.description}
            />
          );
        })}
      </div>
    </>
  );
}
