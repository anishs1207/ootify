'use client';

import { useState, ChangeEvent, useRef } from "react";
import axios from "axios";
// import { useUser } from "@/context/userContext";


// todo => uploads good but once uploaded, when user wants to uaplod again first upload doesnt go away
export default function UploadClothes() {
  const userId = 'test123';

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploaded, setUploaded] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Select file
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  // Remove file
  const handleRemove = () => {
    setFile(null);
    setPreview(null);

    // ✅ Reset file input
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  // Upload file
  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/add-clothes",
        formData,
        {
          headers: {
            "userId": userId,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUploaded(data);
      setFile(null);
      setPreview(null);
      if (inputRef.current) inputRef.current.value = "";
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto mt-10 border border-gray-100">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center tracking-tight">
        Upload Your Clothes
      </h2>

      <div className="flex flex-col items-center gap-4">
        <label className="w-full cursor-pointer flex flex-col items-center py-6 px-4 border-2 border-dashed border-blue-300 rounded-xl bg-blue-50 hover:bg-blue-100 transition">
          <span className="text-blue-700 font-medium mb-2">
            Select image to upload
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={inputRef} // ✅ ref lagaya
            className="hidden"
          />
          <span className="text-xs text-gray-500">(One file at a time)</span>
        </label>

        {preview && (
          <div className="w-full mt-4">
            <h3 className="text-base font-semibold text-gray-700 mb-2">
              Selected Image
            </h3>
            <div className="relative bg-gray-50 rounded-xl shadow p-2 flex flex-col items-center">
              <img
                src={preview}
                alt="preview"
                className="rounded-xl object-cover w-full h-40 mb-2"
              />
              <button
                type="button"
                onClick={handleRemove}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 transition"
                title="Remove"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={loading || !file}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-[1.03] hover:from-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {uploaded && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Uploaded Cloth Info
          </h3>
          <div className="bg-gray-50 rounded-xl shadow p-4">
            <img
              src={uploaded.link}
              alt={uploaded.name}
              className="rounded-xl object-cover w-full h-40 mb-4"
            />
            <p className="font-bold text-gray-800">{uploaded.name}</p>
            <p className="text-gray-600 text-sm mb-1">{uploaded.description}</p>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-md">
              {uploaded.type}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
