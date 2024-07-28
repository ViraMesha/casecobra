"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

import Dropzone, { FileRejection } from "react-dropzone";

const Page = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const onDropRejected = () => {};
  const onDropAccepted = () => {
    console.log("accepted");
  };
  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex-center flex-col",
        {
          "ring-blue-900/25 bg-blue-900/10": isDragOver,
        }
      )}
    >
      <div className="relative flex-center flex-1 flex-col  w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="h-full w-full flex-center flex-1 flex-col"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              asd
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default Page;
