import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const icons: Record<string, JSX.Element> = {
  github: <FaGithub />,
  globe: <FaGlobe />,
  external: <HiOutlineExternalLink />,
};

interface Experience {
  name: string;
  links: Array<{
    name: string;
    url: string;
    id: string;
  }>;
  position: string;
  description: string;
}

interface Project {
  name: string;
  links: Array<{
    name: string;
    url: string;
    id: string;
  }>;
  summary: string;
  stack: string;
  description: string;
}

const experiences: Array<Experience> = [
  {
    name: "CodeNU",
    links: [
      {
        name: "홈페이지",
        url: "https://codenu.github.io/",
        id: "external",
      },
      {
        name: "GitHub",
        url: "https://github.com/codenu/",
        id: "github",
      },
    ],
    position: "팀장 (2020.04.13 ~)",
    description: `사용자를 위해 새로운 도전을 멈추지 않는다는 의미의 "당신을 위해, 항상 새롭게."라는 슬로건을 바탕으로, 온라인 채팅 서비스인 디스코드에서 편리하게 사용할 수 있는 챗봇을 개발하는 팀입니다.`,
  },
  {
    name: "한국 디스코드 리스트",
    links: [
      {
        name: "홈페이지",
        url: "https://koreanbots.dev",
        id: "external",
      },
      {
        name: "GitHub",
        url: "https://github.com/koreanbots/",
        id: "github",
      },
    ],
    position:
      "팀장 (2022.03.20 ~), 공식봇 개발자 (2021.08.21 ~), 개발 부서장 (2021.12.14 ~ 2022.03.20), 봇 리뷰어 1기 (2021.02.13 ~)",
    description: `온라인 채팅 플랫폼인 디스코드에서 사용할 수 있는 챗봇 및 커뮤니티 서버를 홍보할 수 있는 서비스를 제공하고 있으며, 현재 622개 이상의 챗봇 및 552개 이상의 서버가 사용하고 있습니다.`,
  },
  {
    name: "Project eTe",
    links: [
      {
        name: "홈페이지",
        url: "https://etebot.io",
        id: "external",
      },
      {
        name: "GitHub",
        url: "https://github.com/project-ete/",
        id: "github",
      },
    ],
    position: "봇 개발자 (2021.12.12 ~)",
    description: `Project End To End; 사용자의 편의성을 우선으로 생각하는 봇을 만듭니다.`,
  },
  {
    name: "interactions.py",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/interactions-py",
        id: "github",
      },
    ],
    position:
      "설립자, 초기 개발자 (2020.12.11 ~ 2021.06.05), 한국어 커뮤니티 관리자 (2020.12.11 ~ 2021.09.04)",
    description: `interaction.py 라이브러리를 유지보수하고, 라이브러리 사용자들에게 개발 관련 도움을 줍니다.`,
  },
];

const projects: Array<Project> = [
  {
    name: "Laythe",
    links: [
      {
        name: "홈페이지",
        url: "https://laythe.codenu.kr/",
        id: "external",
      },
      {
        name: "GitHub",
        url: "https://github.com/codenu/laythe-v2",
        id: "github",
      },
    ],
    summary: "사용자 친화적 UI를 갖춘 강력한 다기능 관리봇.",
    stack: "Python (봇), TypeScript + Next.js (웹)",
    description: `온라인 채팅 플랫폼인 디스코드 내의 커뮤니티 서버를 쉽게 관리할 수 있도록 채팅 로깅, 서버 멤버 경고/추빙/차단 등 다양한 기능을 제공하는 챗봇입니다. 또한, 웹 대시보드를 통해 쉽게 봇을 설정할 수도 있습니다.`,
  },
  {
    name: "dico-api",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/dico-api/",
        id: "github",
      },
    ],
    summary: "For everything using Discord API.",
    stack: "Python",
    description: `디스코드 API 전체를 래핑하는 파이썬 라이브러리 프로젝트 입니다. 단순히 래핑에서 끝나는 것이 아닌, 추가 모듈을 통해 인터렉션 등의 기능도 쉽게 사용 가능하도록 만들어졌고, 봇을 만들 때 뿐만 아니라 디스코드 API가 필요한 API 서버 등 다른 프로젝트에 자유롭게 붙여 쓸 수 있도록 만드는 것이 목표입니다. 또한, 비동기/동기 모두 지원한다는 것도 특징입니다.`,
  },
  {
    name: "interactions.py",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/interactions-py/library",
        id: "github",
      },
    ],
    summary:
      "Easy, simple, scalable and modular: a Python API wrapper for interactions.\n",
    stack: "Python",
    description: `과거에는 파이썬에서 가장 많이 쓰이는 디스코드 API 래퍼인 discord.py에 Interaction API를 추가하는 확장 라이브러리였으나, 소유권 이전 후 Interaction API에 최적화된 API 래퍼로 변경되었습니다. 개발 당시 해당 API가 정식 출시되기 전 미리 공개된 문서를 기반으로 빠르게 제작해 관련 라이브러리 중 가장 높은 인지도를 얻을 수 있었습니다.`,
  },
];

export const Resume: React.FC = () => (
  <div className="flex flex-col min-h-screen justify-center space-y-8 py-36 box-content">
    <InView>
      {({ ref, inView }) => (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="flex flex-col space-y-2"
        >
          <h2 className="text-white text-5xl font-bold">Résumé</h2>
          <p className="text-neutral-400 text-lg">
            | 제대로 된 이력서가 아닌, 참고용으로 작성했습니다.
          </p>
        </motion.div>
      )}
    </InView>
    <InView>
      {({ ref, inView }) => (
        <div className="flex flex-col space-y-4 snap-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            ref={ref}
            className="text-white text-4xl font-bold"
          >
            <h3>경력 / 팀</h3>
          </motion.div>
          {experiences.map((experience, index) => (
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.5 }}
              ref={ref}
              className="flex flex-col space-y-1"
              key={experience.name}
            >
              <h4 className="text-white text-3xl font-semibold">
                {experience.name}
              </h4>
              <div className="flex flex-row items-center text-neutral-400 text-xl">
                <p>{experience.position}</p>
              </div>
              <ul className="list-disc list-outside items-center align-middle text-light-white text-xl px-6">
                <li>
                  <div className="flex flex-row space-x-2 items-center">
                    {experience.links.map((link) => (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center space-x-0.5 hover:opacity-75"
                        key={link.url}
                      >
                        {icons[link.id]}
                        <p>{link.name}</p>
                      </a>
                    ))}
                  </div>
                </li>
                <li>{experience.description}</li>
              </ul>
            </motion.div>
          ))}
        </div>
      )}
    </InView>

    <InView>
      {({ ref, inView }) => (
        <div className="flex flex-col space-y-4 snap-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            ref={ref}
            className="text-white text-4xl font-bold"
          >
            <h3>프로젝트</h3>
          </motion.div>
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.5,
              }}
              ref={ref}
              className="flex flex-col space-y-1"
              key={project.name}
            >
              <h4 className="text-white text-3xl font-semibold">
                {project.name}
              </h4>
              <div className="flex flex-row items-center text-neutral-400 text-xl">
                <p>{project.summary}</p>
              </div>
              <ul className="list-disc list-outside items-center align-middle text-light-white text-xl px-6">
                <li>
                  <div className="flex flex-row space-x-2 items-center">
                    {project.links.map((link) => (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center space-x-0.5 hover:opacity-75"
                        key={link.url}
                      >
                        {icons[link.id]}
                        <p>{link.name}</p>
                      </a>
                    ))}
                  </div>
                </li>
                <li>{project.stack}</li>
                <li>{project.description}</li>
              </ul>
            </motion.div>
          ))}
        </div>
      )}
    </InView>
  </div>
);
