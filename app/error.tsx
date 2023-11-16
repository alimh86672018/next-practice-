"use client";

import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  //   console.log("Error", error);
  return (
    <div>
      <div>Some Error was occured</div>
      <button onClick={() => reset()} className="btn">
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
