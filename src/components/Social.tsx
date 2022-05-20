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
          key={socialItem.id}
        />
      ))}
    </div>
  );
};

const SocialItem: React.FC<social> = (socialItem) => {
  let url: string;
  let desc: string;
  const types: Record<string, string> = {
    github: "GitHub",
    blog: "Blog",
  };
  if (socialItem.id === "email") {
    url = `mailto:${socialItem.value}`;
    desc = socialItem.value;
  } else if (socialItem.id === "discord") {
    url = socialItem.value;
    desc = "eunwoo1104#9600";
  } else {
    url = socialItem.value;
    desc = types[socialItem.id];
  }
  return (
    <div className="SocialItem">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icons[socialItem.id]} {desc}
      </a>
    </div>
  );
};
