import { useEffect, useState } from "react";

const baseWords = [
  "System Design",
  "Backend",
  "Artificial Intelligence",
  "Distributed Systems",
  "APIs",
  "Cloud Infrastructure",
];

const words = [...baseWords, baseWords[0]];

export default function FlippingWords() {
  const [index, setIndex] = useState(0);
  const wordHeight = 56; // h-14

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      const timeout = setTimeout(() => setIndex(0), 500);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="inline-flex items-center h-14 overflow-hidden px-4 m-7 rounded-[40px] bg-transparent border-gray-600 shadow-sm">
      <div
        className="flex flex-col transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${index * wordHeight}px)` }}
      >
        {words.map((word, i) => (
          <div
            key={i}
            className="h-14 flex items-center select-none justify-center text-[18px] font-goth text-gray-300 whitespace-nowrap"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}
