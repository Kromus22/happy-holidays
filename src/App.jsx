import Footer from './components/footer/footer';
import Header from './components/header/header';
import Card from './components/card/card';
import { TextContextProvider } from './context/textContext';
import { ImgContextProvider } from './context/imgContext';

function App() {
  return (
    <div>
      <ImgContextProvider>
        <TextContextProvider>
          <Header />
          <Card />
          <Footer />
        </TextContextProvider>
      </ImgContextProvider>
    </div>
  );
};

export default App;
