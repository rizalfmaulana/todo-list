import { useEffect, useState } from "react";
import "./unsplash.css";

export default function Unsplash() {
  const [photo, setPhoto] = useState<any>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        "https://api.unsplash.com/photos/random/?client_id=lF57Y_QPx2vDGIfzd94_xYHu6RLQV09uAAOnoqp-AHg&count=10"
      );
      const data = await res.json();
      console.log(data);
      setPhoto(data);
    };
    fetchApi();
  }, []);
  return (
    <div className="section">
      {photo &&
        photo.map((item: any) => (
          <div key={item.id} className="item">
            <img height="500" src={item.urls.full} alt="aa" />
          </div>
        ))}
    </div>
  );
}
