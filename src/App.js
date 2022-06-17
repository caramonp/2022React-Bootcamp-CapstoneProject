import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Header from "./components/header/header";
import Home from "./Screems/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
