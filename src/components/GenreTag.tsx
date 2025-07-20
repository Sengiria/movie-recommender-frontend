import React from "react";

interface GenreTagProps {
  genre: string;
}

const GenreTag: React.FC<GenreTagProps> = ({ genre }) => {
  return (
    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full mr-1 mb-1">
      {genre}
    </span>
  );
};

export default GenreTag;
