import Footer from './components/footer/footer';
import Header from './components/header/header';
import Card from './components/card/card';
import { ImgContextProvider } from './context/imgContext';

function App() {
  return (
    <div>
      <ImgContextProvider>
        <Header />
        <Card />
        <Footer />
      </ImgContextProvider>
    </div>
  );
};

export default App;
