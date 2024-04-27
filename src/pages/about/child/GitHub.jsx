import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHub = () => {
  return (
    <div className="flex flex-col pt-4 pb-10 text-gray-800 items-center justify-center gap-8">
      <h1 className="text-center text-2xl font-bold">My GitHub Stats.</h1>
      <GitHubCalendar
        username="sheharyarcodes"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
};

export default GitHub;
