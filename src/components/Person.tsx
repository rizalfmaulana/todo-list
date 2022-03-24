import { ChangeEvent, FC, useState } from "react";

export enum HairColor {
  brown = "you are american",
  black = "you are nigga",
  blue = "you are youtuber",
}
interface Props {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
}

const Person: FC<Props> = ({ name, age, email }) => {
  const [country, setCountry] = useState<string | null>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <span>{name}</span>
      <span>{age}</span>
      <span>{email}</span>
      <input
        type="text"
        placeholder="enter your country"
        onChange={handleChange}
      />
      {country}
      {HairColor.black}
    </div>
  );
};

export default Person;
