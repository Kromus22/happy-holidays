import { createContext, useState } from 'react';
import { useHolidays } from '../hooks/useHolidays';

export const holidaysContext = createContext({});

export const HolidaysContextProvider = ({ children }) => {
  const [holiday, setHoliday] = useState('');
  const [holidays] = useHolidays();

  const handleChangeHoliday = (title) => {
    setHoliday(title);
  };

  return (
    <holidaysContext.Provider value={{ holidays, holiday, handleChangeHoliday }}>
      {children}
    </holidaysContext.Provider>
  )
}