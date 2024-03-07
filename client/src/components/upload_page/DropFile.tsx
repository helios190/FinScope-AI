import { useState } from "react";
import Image from "next/image";

const FileDrop: React.FC<{ onFileDrop: (files: FileList) => void }> = ({ onFileDrop }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    onFileDrop(files);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      onFileDrop(files);
    }
  };

  return (
    <div
      className="w-full h-64 border-2 border-dashed border-neutral-800 rounded-md flex flex-col items-center justify-center"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="hidden"
        onChange={handleFileInputChange}
        accept=".pdf"
      />
      <Image src="./icons/cloud-arrow-up-fill.svg" width={64} height={64} alt="upload"/>
      <p className="text-lg">Drag and drop file here</p>
    </div>
  );
};

export default FileDrop;
