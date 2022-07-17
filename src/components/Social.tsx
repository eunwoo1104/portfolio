import React from "react";
import { icons, social, socials } from "../constants";

export const Social: React.FC = () => {
  return (
    <div className="Social">
      <h2>연락은...</h2>
      {socials.map((socialItem) => (
        <SocialItem
          id={socialItem.id}
          value={socialItem.value}
          name={socialItem.name}
          key={socialItem.id}
        />
      ))}
    </div>
  );
};

const SocialItem: React.FC<social> = (socialItem) => {
  return (
    <div className="SocialItem">
      <a href={socialItem.value} target="_blank" rel="noopener noreferrer">
        {icons[socialItem.id]} {socialItem.name}
      </a>
    </div>
  );
};
