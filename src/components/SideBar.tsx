import { useState } from 'react';
import '../styles/sidebar.scss';
import { Button } from '../components/Button';

interface IGenre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SibeBarProps {
  genres: IGenre[];
  selectedGenreID: number;
  handleClick: (id: number) => void;
}


export function SideBar(props: SibeBarProps) {
  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClick(genre.id)}
            selected={props.selectedGenreID === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}