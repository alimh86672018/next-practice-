"use client";

import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface cloudinaryResults {
  public_id: string;
}

const UpLoadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="a nature image"
        />
      )}
      <CldUploadWidget
        uploadPreset="ddufkaw4"
        onUpload={(results, widget) => {
          if (results.event !== "success") return;
          const info = results.info as cloudinaryResults;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UpLoadPage;
