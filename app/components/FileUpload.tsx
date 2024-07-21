// app/components/FileUpload.tsx
"use client";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";

initializeApp(firebaseConfig);

const FileUpload = ({ onUpload }: { onUpload: (url: string) => void }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      const storage = getStorage();
      const storageRef = ref(storage, `uploads/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      setIsUploading(true);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error("Upload failed", error);
          setIsUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            onUpload(downloadURL);
            setIsUploading(false);
            setProgress(0);
            setFile(null);
          });
        }
      );
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {isUploading && <progress value={progress} max="100" />}
      <button
        type="button"
        onClick={handleUpload}
        disabled={!file || isUploading}
      >
        {isUploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default FileUpload;
