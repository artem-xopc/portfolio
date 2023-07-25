import React from 'react';
import styles from './Portfolio.module.css';

interface ProsectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}

export const ProjectCard: React.FC<ProsectCardProps> = ({ title, description, imgUrl, link }) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.proj_imgbx}>
        <img src={imgUrl} alt="Project preview" />
        <div className={styles.proj_txtx}>
          <a href={link} target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
            <h4>{title}</h4>
            <span>{description}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
