import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { Tag } from "./Tag";

const tags: Array<string> = [
  "프론트엔드",
  "백엔드",
  "API",
  "애플리케이션",
  "챗봇",
  "오픈소스",
];

const langs: { [index: string]: string } = {
  py: "Python",
  js: "JavaScript",
  ts: "TypeScript",
  clang: "C",
};

const stacks: { [index: string]: string } = {
  react: "React / React Native",
  next: "Next.js",
  flask: "Flask",
  sanic: "Sainc",
  mariadb: "MariaDB / MySQL",
  docker: "Docker",
  aws: "Amazon Web Service",
};

interface ImageCardProps {
  id: string;
  name: string;
  type: "langs" | "stacks";
}

export const ImageCard: React.FC<ImageCardProps> = ({ id, name, type }) => (
  <div className="flex flex-row items-center space-x-2">
    <div className="">
      <img
        src={`${process.env.PUBLIC_URL}/${type}/${id}.png`}
        alt={name}
        width={40}
        height={40}
      />
    </div>
    <div className="text-white text-2xl font-normal">
      <p>{name}</p>
    </div>
  </div>
);

export const Intro: React.FC = () => {
  const [langCardOpen, setLangCardOpen] = useState<boolean>(false);
  const [stackCardOpen, setStackCardOpen] = useState<boolean>(false);
  return (
    <InView>
      {({ ref, inView }) => (
        <div className="flex flex-col py-36 justify-center space-y-8 snap-center">
          <div className="flex flex-col space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              ref={ref}
              className="text-white text-5xl font-bold"
            >
              <h2>저는...</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              ref={ref}
              className="text-white text-5xl font-bold"
            >
              <p className="text-white text-3xl font-light">
                다양한 분야에 관심이 많고, 새로운 시도를 좋아해요.
              </p>
            </motion.div>
            <div className="flex flex-row space-x-3">
              {tags.map((tag, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.3 }}
                  ref={ref}
                  key={tag}
                >
                  <Tag name={tag} />
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 + tags.length * 0.3 }}
            ref={ref}
            className="flex flex-col space-y-4"
          >
            <button
              className="flex flex-row text-white text-4xl font-bold hover:opacity-75"
              onClick={() => setLangCardOpen(!langCardOpen)}
            >
              {langCardOpen ? <BiChevronDown /> : <BiChevronRight />}
              <h3>언어</h3>
            </button>
            <div className="pl-9 flex flex-col space-y-5">
              {langCardOpen ? (
                Object.keys(langs).map((id) => (
                  <ImageCard id={id} name={langs[id]} type="langs" key={id} />
                ))
              ) : (
                <div />
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.5 + tags.length * 0.3 }}
            ref={ref}
            className="flex flex-col space-y-5"
          >
            <button
              className="flex flex-row text-white text-4xl font-bold hover:opacity-75"
              onClick={() => setStackCardOpen(!stackCardOpen)}
            >
              {stackCardOpen ? <BiChevronDown /> : <BiChevronRight />}
              <h3>기술</h3>
            </button>
            <div className="pl-9 flex flex-col space-y-4">
              {stackCardOpen ? (
                Object.keys(stacks).map((id) => (
                  <ImageCard id={id} name={stacks[id]} type="stacks" key={id} />
                ))
              ) : (
                <div />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </InView>
  );
};
