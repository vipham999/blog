"use client";

import { useState } from "react";

export default function LikeButton() {
  const [like, setLike] = useState(false);

  const handleLikeChange = () => {
    const newLike = !like;
    setLike(newLike);
  };

  return (
    <button
      onClick={handleLikeChange}
      className={`px-3 py-1 rounded ${like ? " text-white" : "text-gray-500"}`}
    >
      {like ? "❤️" : "🤍"}
    </button>
  );
}
