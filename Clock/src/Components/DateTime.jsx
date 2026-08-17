import { useEffect } from "react";
import { useState } from "react";

function DateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Clear Interval !");
    };
  }, []);

  return (
    <>
      <h6 className="dt">
        <strong>Time:</strong> {date.toLocaleTimeString()}
      </h6>
      <h6 className="dt">
        <strong>Date: </strong> {date.toLocaleDateString()}
      </h6>
    </>
  );
}
export default DateTime;
