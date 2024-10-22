import { useEffect, useState } from "react";
import { useConfig } from "../context/ConfigContext";


export function HeightDisplay() {
  const { baseURL, torBaseURL } = useConfig();
  const [height, setHeight] = useState<number | null>(null);

  let targetUrl = baseURL;
  if (window.location.origin.includes(".onion")) {
    targetUrl = torBaseURL;
  }

  useEffect(() => {
    const fetchHeight = () => {
      fetch(`${targetUrl}/block-height`)
        .then((response) => response.json())
        .then((data) => {
          setHeight(data.block_height);
        })
        .catch((error) => {
          console.error('Error fetching height:', error);
        });
    };
    const interval = setInterval(fetchHeight, 10000); 
    return () => clearInterval(interval);
  }, [targetUrl]);

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold">Current Height</h2>
      <p>{height !== null ? height : 'Loading...'}</p>
    </div>
  );
}
