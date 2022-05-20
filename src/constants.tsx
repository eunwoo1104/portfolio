import { MdEmail } from "react-icons/md";
import { FaDiscord, FaGithub, FaGlobe } from "react-icons/fa";
import React from "react";

export type lang = {
  name: string;
  image: string;
};
export const langs: Array<lang> = [
  {
    name: "Python",
    image: "python.png",
  },
  {
    name: "JavaScript",
    image: "js.png",
  },
  {
    name: "TypeScript",
    image: "ts.png",
  },
  {
    name: "C",
    image: "clang.png",
  },
];

export type social = {
  [index: string]: string;
  id: string;
  value: string;
};
export const socials: Array<social> = [
  {
    id: "email",
    value: "choi@eunwoo.dev",
  },
  {
    id: "email",
    value: "eunwoo@codenu.kr",
  },
  {
    id: "github",
    value: "https://github.com/eunwoo1104",
  },
  {
    id: "blog",
    value: "https://blog.eunwoo.dev/",
  },
  {
    id: "discord",
    value: "https://discord.com/users/288302173912170497",
  },
];

export const icons: Record<string, JSX.Element> = {
  email: <MdEmail />,
  github: <FaGithub />,
  blog: <FaGlobe />,
  discord: <FaDiscord />,
  globe: <FaGlobe />,
};

export type projectURL = {
  [index: string]: string;
  id: string;
  value: string;
};

export type project = {
  // [index: string]: string;
  name: string;
  url: projectURL;
  description: string;
};
export const projects: Array<project> = [
  {
    name: "dico-api",
    url: {
      id: "github",
      value: "https://github.com/dico-api/dico",
    },
    description:
      "Discord API 전체를 래핑하는 프로젝트로, 현재 메인테이너로 활동하고 있습니다.",
  },
  {
    name: "한국 디스코드 리스트",
    url: {
      id: "globe",
      value: "https://koreanbots.dev",
    },
    description:
      "국내 디스코드 봇 및 서버를 찾아볼 수 있는 웹사이트로, 현재 팀장으로 활동하고 있습니다.",
  },
  {
    name: "interactions.py",
    url: {
      id: "github",
      value: "https://github.com/interactions-py/library",
    },
    description:
      "Discord의 Interaction을 쉽게 다룰 수 있도록 만들어주는 Python 라이브러리로, 1대 메인테이너였지만 지금은 여기서는 활동하지 않고 있습니다.",
  },
];
