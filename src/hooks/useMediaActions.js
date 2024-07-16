import { useState } from "react";

const useMediaActions = () => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const toggleLike = () => setLiked(!liked);
  const toggleBookmark = () => setBookmarked(!bookmarked);
  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Sharing failed", error));
    } else {
      alert("Sharing is not supported in your browser.");
    }
  };

  return {
    liked,
    bookmarked,
    toggleLike,
    toggleBookmark,
    share,
  };
};

export default useMediaActions;
