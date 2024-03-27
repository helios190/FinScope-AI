"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import BrowseFile from "@/components/upload_page/BrowseFile";
import DropFile from "@/components/upload_page/DropFile";
import Link from "next/link";
import QuestionCircle from "@/components/icons/QuestionCircle";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | undefined>(undefined);

  const handleFileSelect = (file: File | undefined) => {
    setFile(file);
  };
  const handleFileDrop = (files: FileList) => {
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file && file.type === "application/pdf") {
        setFile(file);
        return;
      }
    }
  };
  const handleSubmit = async () => {
    if (!file) return;
    if (process.env.NEXT_PUBLIC_BACKEND_API_ORIGIN === undefined) {
      alert("Error uploading file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_ORIGIN + "/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) router.push("/result");
      else alert("Upload failed");

    } catch (e) {
      console.error("Error:", e);
      alert("Error uploading file");
    }
  };

  return (
    <div className="flex flex-col p-12 gap-y-2">
      <p className="font-bold text-lg">Upload Financial Report</p>
      <BrowseFile file={file} onFileSelect={handleFileSelect} />
      <DropFile onFileDrop={handleFileDrop} />
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-x-8">
          <div className="flex flex-row gap-x-2">
            <input type="checkbox" className="w-4 accent-neutral-800"></input>
            <p className="text-lg">Option 1</p>
          </div>
          <div className="flex flex-row gap-x-2">
            <input type="checkbox" className="w-4 accent-neutral-800"></input>
            <p className="text-lg">Option 2</p>
          </div>
        </div>
        {/* example pdf if needed */}
        <Link href="#">
          <div className="flex flex-row gap-x-2 items-center">
            <QuestionCircle width={20} height={20} />
            {/* <Image src="./icons/question-circle.svg" width={20} height={20} alt="question-mark" /> */}
            <p className="text-lg">Example PDF</p>
          </div>
        </Link>
      </div>
      <button
        className="text-white bg-neutral-800 w-full py-2 rounded-lg enabled:hover:bg-neutral-900 disabled:opacity-50"
        disabled={file == undefined}
        onClick={handleSubmit}
      >
        Upload
      </button>
    </div>
  );
}
