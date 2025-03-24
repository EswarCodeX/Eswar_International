import React, { useState, useEffect, lazy, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { vegetables } from "../Data/vegetable";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasError) {
      const timer = setTimeout(() => navigate("/vegetables"), 3000);
      return () => clearTimeout(timer);
    }
  }, [hasError, navigate]);

  if (hasError) {
    return <div className="text-center p-4">Something went wrong. Redirecting...</div>;
  }

  return children;
};

export default function Vegetable_details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const vegetable = vegetables.find((v) => v.id === id);

  useEffect(() => {
    if (!vegetable) {
      navigate("/vegetables");
      return;
    }
    const img = new Image();
    img.src = vegetable.img;
    img.onload = () => setIsLoading(false);
  }, [vegetable, navigate]);
  if (!vegetable) return null;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <h1 className="flex flex-col items-center justify-center w-full h-40 text-3xl font-bold text-white bg-[url(../../assets/vegetables/allveg.jpg)] bg-cover bg-center">
          {vegetable.name}
        </h1>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center p-6 gap-8">
              <div className="relative w-full sm:w-1/2 aspect-square sm:aspect-video">
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                  </div>
                ) : (
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={vegetable.img}
                    alt={vegetable.name}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">{vegetable.name}</h2>
                <p className="text-gray-600 leading-relaxed">{vegetable.info}</p>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Product Details</h3>
                  <dl className="space-y-4">
                    <div className="flex gap-2">
                      <dt className="font-medium text-gray-700">Packaging :</dt>
                      <dd className=" text-gray-600">{vegetable.package}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-medium text-gray-700">Storage Temperature :</dt>
                      <dd className=" text-gray-600">{vegetable.temp}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-medium text-gray-700">Relative Humidity :</dt>
                      <dd className=" text-gray-600">{vegetable.humidity}%</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-medium text-gray-700">Freezing Temperature :</dt>
                      <dd className=" text-gray-600">{vegetable.freeze}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
