import React from "react";
import { lang, langs } from "../constants";

export const Langs: React.FC = () => {
  return (
    <div className="Langs">
      {langs.map((language) => (
        <LangDescription name={language.name} image={language.image} />
      ))}
    </div>
  );
};

const LangDescription: React.FC<lang> = (language) => {
  return (
    <div className="LangDesc">
      <div className="LangDesc-img">
        <img
          src={`${process.env.PUBLIC_URL}/langs/${language.image}`}
          alt={language.name}
          width={50}
          height={50}
        />
      </div>
      <div className="LangDesc-text">
        <p>{language.name}</p>
      </div>
    </div>
  );
};
