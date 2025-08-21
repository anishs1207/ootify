'use client';

import { useState, ChangeEvent } from "react";
import axios from "axios";

export default function UploadClothes() {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploaded, setUploaded] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle file selection and preview
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setPreviews(selectedFiles.map((file) => URL.createObjectURL(file)));
  };

  // Remove a selected image
  const handleRemove = (idx: number) => {
    const newFiles = files.filter((_, i) => i !== idx);
    setFiles(newFiles);
    setPreviews(newFiles.map((file) => URL.createObjectURL(file)));
  };

  // Upload selected images
  const handleUpload = async () => {
    if (!files.length) return;
    setLoading(true);

    const formData = new FormData();
    files.forEach((file) => formData.append("clothes", file));

    try {
      const { data } = await axios.post<{ urls: string[] }>(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setUploaded(data.urls);
      setFiles([]);
      setPreviews([]);
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
            Select images to upload
          </span>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <span className="text-xs text-gray-500">
            (You can select multiple images)
          </span>
        </label>

        {previews.length > 0 && (
          <div className="w-full mt-4">
            <h3 className="text-base font-semibold text-gray-700 mb-2">
              Selected Images
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {previews.map((src, idx) => (
                <div
                  key={idx}
                  className="relative group bg-gray-50 rounded-xl shadow p-2 flex flex-col items-center transition hover:shadow-lg"
                >
                  <img
                    src={src}
                    alt={`preview-${idx}`}
                    className="rounded-xl object-cover w-full h-32 mb-2 transition duration-300 ease-in-out group-hover:scale-105"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemove(idx)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 transition"
                    title="Remove"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={loading || !files.length}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-[1.03] hover:from-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-600"></span>
              </span>
              Uploading...
            </span>
          ) : (
            "Upload"
          )}
        </button>
      </div>

      {uploaded.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Uploaded Images
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {uploaded.map((url, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl shadow p-2 flex flex-col items-center transition hover:shadow-lg"
              >
                <img
                  src={url}
                  alt={`cloth-${idx}`}
                  className="rounded-xl object-cover w-full h-40 mb-2 transition duration-300 ease-in-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
