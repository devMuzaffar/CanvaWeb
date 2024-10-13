import {
  Banner,
  Landing,
  Navbar,
  About,
  FeatureCards,
  ToppersList,
  Statistics,
  CountryMap,
  OurBooks,
  Quote,
  Blogs,
  Testimonial,
  FAQ,
  Footer,
  SignIn,
  SignUp,
} from "./components/index";

import { Routes, Route } from "react-router-dom";

const MainSections = () => {
  return (
    <div>
      <Landing />
      <About />
      <FeatureCards />
      <ToppersList />
      <Statistics />
      <CountryMap />
      <OurBooks />
      <Quote />
      <Testimonial />
      <Blogs />
      <FAQ />
    </div>
  )
}

const App = () => {



  return (
    <div className="font-[Poppins]">
      <Banner />
      <Navbar />
      <Routes>

        <Route path="/" element={<MainSections />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    
      <Footer />
    </div>
  );
};

export default App;
