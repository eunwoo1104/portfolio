import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { MdEmail } from "react-icons/md";
import { FaDiscord, FaGithub, FaGlobe, FaInstagram } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const icons: Record<string, JSX.Element> = {
  email: <MdEmail />,
  github: <FaGithub />,
  discord: <FaDiscord />,
  globe: <FaGlobe />,
  external: <HiOutlineExternalLink />,
  instagram: <FaInstagram />,
};

interface Social {
  name: string;
  url: string;
  type: string;
}

const socials: Array<Social> = [
  {
    name: "choi@eunwoo.dev",
    url: "mailto:choi@eunwoo.dev",
    type: "email",
  },
  {
    name: "eunwoo@codenu.kr",
    url: "mailto:eunwoo@codenu.kr",
    type: "email",
  },
  {
    name: "@eunwoo1104",
    url: "https://github.com/eunwoo1104",
    type: "github",
  },
  {
    name: "@eunwoo1104",
    url: "https://discord.com/users/288302173912170497",
    type: "discord",
  },
  {
    name: "@silvercow1104",
    url: "https://www.instagram.com/silvercow1104/",
    type: "instagram",
  },
];

export const Contact: React.FC = () => (
  <InView>
    {({ ref, inView }) => (
      <div className="flex flex-col py-36 justify-center space-y-2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="text-white text-5xl font-bold"
        >
          <h2>연락</h2>
        </motion.div>
        <div className="flex flex-col space-y-1 text-light-white text-2xl font-light px-2">
          {socials.map((social, index) => (
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.3 }}
              ref={ref}
              key={social.url}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-1"
              >
                {icons[social.type]}
                <p>{social.name}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    )}
  </InView>
);
