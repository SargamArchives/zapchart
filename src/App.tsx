import React, { useEffect, useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { Header } from './components/Header';
import { InputSection } from './components/InputSection';
import { ResultsSection } from './components/ResultsSection';
import { DATA_BUILDINGS } from './gameData';

function App() {
  const [zapLevel, setZapLevel] = useState(
    Number(localStorage.getItem('zapLevel')) || 9
  );
  const [quakeLevel, setQuakeLevel] = useState(
    Number(localStorage.getItem('quakeLevel')) || 5
  );
  const [randomPlaceHolder] = useState(
    DATA_BUILDINGS.map((b) => b.name)[
      Math.floor(Math.random() * DATA_BUILDINGS.length)
    ] + '...'
  );
  const [filterText, setFilterText] = useState('');
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || false
  );
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);
  useEffect(() => {
    localStorage.setItem('zapLevel', zapLevel.toString());
  }, [zapLevel]);
  useEffect(() => {
    localStorage.setItem('quakeLevel', quakeLevel.toString());
  }, [quakeLevel]);
  return (
    <div className={`h-full ${darkMode ? 'dark' : ''}`}>
      <div className="h-full bg-gray-200 dark:bg-gray-600">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <InputSection
          zapLevel={zapLevel}
          setZapLevel={setZapLevel}
          quakeLevel={quakeLevel}
          setQuakeLevel={setQuakeLevel}
        />
        <FilterBar
          placeholder={randomPlaceHolder}
          onChange={(value) => setFilterText(value)}
        />
        <ResultsSection
          zapLevel={zapLevel}
          quakeLevel={quakeLevel}
          filterText={filterText}
        />
      </div>
    </div>
  );
}

export default App;
