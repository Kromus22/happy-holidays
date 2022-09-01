import Footer from './components/footer/footer';
import Header from './components/header/header';
import Card from './components/card/card';
import { TextContextProvider } from './context/textContext';
import { ImgContextProvider } from './context/imgContext';
import { HolidaysContextProvider } from './context/holidaysContext';

function App() {
  return (
    <div>
      <HolidaysContextProvider>
        <ImgContextProvider>
          <TextContextProvider>
            <Header />
            <Card />
            <Footer />
          </TextContextProvider>
        </ImgContextProvider>
      </HolidaysContextProvider>
    </div>
  );
};

export default App;
