import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './Portfolio.module.css';

interface ProsectCardProps {
  title: string;
  description: string;
  imgUrl: string;
}

export const ProjectCard: React.FC<ProsectCardProps> = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className={styles.proj_imgbx}>
        <img src={imgUrl} />
        <div className={styles.proj_txtx}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
