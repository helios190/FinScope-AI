import { useRef, useState } from "react";

export default function BrowseFile({ file, onFileSelect }: { file: File | undefined, onFileSelect: (file: File | undefined) => void }) {
  const inputFile = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    onFileSelect(selectedFile);
  };

  return (
    <div className="flex">
      <input
        type="file"
        accept="application/pdf"
        id="file"
        ref={inputFile}
        className="hidden"
        onChange={handleFileChange}
      />
      <input
        type="text"
        placeholder="Choose file to upload"
        value={file ? file.name : ""}
        className="py-2 px-4 w-full border-2 border-neutral-800 rounded-l-md focus:outline-none"
        readOnly
        onClick={() => inputFile.current?.click()}
      />
      <button
        onClick={() => inputFile.current?.click()}
        className="py-2 px-16 bg-neutral-800 text-white rounded-r-md hover:bg-neutral-900 focus:outline-none"
      >
        Browse
      </button>
    </div>
  );
}
