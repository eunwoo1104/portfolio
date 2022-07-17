import React from "react";
import { tech, techs } from "../constants";

export const Techs: React.FC = () => {
  return (
    <div className="Techs">
      {techs.map((tech) => (
        <TechDescription name={tech.name} image={tech.image} key={tech.name} />
      ))}
    </div>
  );
};

const TechDescription: React.FC<tech> = (tech) => {
  return (
    <div className="TechDesc">
      <div className="TechDesc-img">
        <img
          src={`${process.env.PUBLIC_URL}/techs/${tech.image}`}
          alt={tech.name}
          width={50}
          height={50}
        />
      </div>
      <div className="TechDesc-text">
        <p>{tech.name}</p>
      </div>
    </div>
  );
};
