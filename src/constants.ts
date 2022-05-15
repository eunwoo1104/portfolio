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
