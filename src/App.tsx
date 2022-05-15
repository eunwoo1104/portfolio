import React from 'react';
import './App.css';
import { FaGithub, FaGlobe, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import {langs, lang, social, socials} from "./constants";

const Hello: React.FC = () => {
    return (
        <div className="Hello">
            <div className="Hello-title">
                <h1>안녕하세요! 👋</h1>
            </div>
            <div className="Hello-desc">
                <p>학생 개발자 최은우 입니다.</p>
            </div>
        </div>
    )
}

const About: React.FC = () => {
  return (
      <div className="About">
        <h2>저는...</h2>
          <p>주로 백엔드/API 관련 개발을 하고 있습니다.</p>
          <p>다음 언어들을 할줄 알아요.</p>
          <Langs/>
      </div>
  )
}

const Langs: React.FC = () => {
    return (
        <div className='Langs'>
            {langs.map(language => (
                < LangDescription name={language.name} image={language.image} />
            ))}
        </div>
    )
}

const LangDescription: React.FC<lang> = (language) => {
    return (
        <div className='LangDesc'>
            <div className='LangDesc-img'>
                <img src={`${process.env.PUBLIC_URL}/langs/${language.image}`} alt={language.name} width={50} height={50} />
            </div>
            <div className='LangDesc-text'>
                <p>{language.name}</p>
            </div>
        </div>
    )
}

const Social: React.FC = () => {
    return (
        <div className='Social'>
            <h2>연락은...</h2>
            {socials.map(socialItem => <SocialItem id={socialItem.id} value={socialItem.value}/>)}
        </div>
    )
}

const SocialItem: React.FC<social> = (socialItem) => {
    let url: string
    let desc: string
    const types: Record<string, string> = {
        github: "GitHub",
        blog: "Blog",
    }
    const icons: Record<string, JSX.Element> = {
        email: <MdEmail/>,
        github: <FaGithub/>,
        blog: <FaGlobe/>,
        discord: <FaDiscord/>
    }
    if(socialItem.id === "email"){
        url = `mailto:${socialItem.value}`
        desc = socialItem.value
    }
    else if(socialItem.id === "discord"){
        url = socialItem.value
        desc = "eunwoo1104#9600"
    }
    else{
        url = socialItem.value
        desc = types[socialItem.id]
    }
    return (
        <div className='SocialItem'>
            <a href={url} target="_blank" rel="noopener noreferrer">{icons[socialItem.id]} {desc}</a>
        </div>
    )
}

function App() {
  return (
    <div className="App">
        <div className="Head">
            <Hello/>
        </div>
        <div className="Content">
            <About/>
            <Social/>
        </div>
    </div>
  );
}

export default App;
