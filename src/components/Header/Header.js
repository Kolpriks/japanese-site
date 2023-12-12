import React, { useState } from "react";
import profile from './profile_img.png';
import '../Header/Header.css';
import HiraganaCard from "../HiraganaCard/HiraganaCard";
import KatakanaCard from "../KatakanaCard/KatakanaCard";

function Header() {
  const [selectedComponent, setSelectedComponent] = useState('hiragana');

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div>
      <header className="header">
        <div className="header__wraper">
          <div className="header__logo">
            <a href="#">Logo</a>
          </div>
          <div className="header__languages">
            <a href="#" onClick={() => handleButtonClick('hiragana')}>Hiragana</a>
            <a href="#" onClick={() => handleButtonClick('katakana')}>Katakana</a>
            <a href="#">Kanji</a>
          </div>
          <div className="profile">
            <img className="profile__img" src={profile} width="20px" alt="Profile"/>
            <a href="#">Profile</a>
          </div>
        </div>
      </header>
      {selectedComponent === 'hiragana' && <HiraganaCard />}
      {selectedComponent === 'katakana' && <KatakanaCard />}
    </div>
  );
}

export default Header;
