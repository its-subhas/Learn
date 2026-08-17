import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { CountVal } = useSelector((store) => store.counter);

  return (
    <p className="lead mb-4">
      Counter Current Value: {CountVal}
    </p>
  );
};

export default DisplayCounter;