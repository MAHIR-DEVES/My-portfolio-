import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AboutSection from '../../Components/AboutSection/AboutSection';
import SkillSection from '../../Components/SkillsSection/SkillSection';
import Projects from '../../Components/Projects/Projects';

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <AboutSection></AboutSection>
      <SkillSection></SkillSection>
      <Projects></Projects>
    </div>
  );
};

export default Home;
