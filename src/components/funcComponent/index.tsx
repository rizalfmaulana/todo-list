import { FC, PropsWithChildren, useState } from "react";

interface Props {
  title: string;
}
const FunctionalComponent: FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);

  const addCounter = (params: number): void => {
    setCount(params + 1);
  };
  return (
    <div>
      <h1>{props.title}</h1>
      {count}
      <button onClick={() => addCounter(count)}>add</button>
    </div>
  );
};

export default FunctionalComponent;
