import { BackgroundImage, Overlay } from '@mantine/core';
import data from '../data.json';
import hero from '../Styles/hero.module.css';

const Hero = () => {
  return (
    <div
      className={hero.container}
      style={{ backgroundImage: `url(${data.cover_image}` }}
    >
      <div className={hero.overlay} />
      <div className={hero.content}>
        <div className={hero.description}>
          <h1>{data.description}</h1>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;