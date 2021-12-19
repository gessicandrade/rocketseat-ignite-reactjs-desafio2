import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import { useState } from 'react';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const handleClickButton = (selectedGenreId:number) : void => {
    setSelectedGenreId(selectedGenreId)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} handleClickButton={handleClickButton} />
      <Content selectedGenreId={selectedGenreId}/>
    </div>
  )
}