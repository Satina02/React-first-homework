import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  let logo = "https://lezebre.lu/images/detailed/17/30011-bmw-logo.png"
  let cars = [
    {
      model: "BMW X1",
      image:
        "https://images.91wheels.com//assets/b_images/main/models/profile/profile1629626957.png?width=360",
      id: 1,
    },
    {
      model: "BMW X2",
      image:
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/99-bmw-x2-phev-official-press-hero-front.jpg?itok=WCzSsXlU",
      id: 2,
    },
    {
      model: "BMW X3",
      image: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/faafad35-88a8-4b1d-91cb-ebe24cbb2f87/b6832218-c834-4ac6-b74b-8074a50dd489.png",
      id: 3,
    },
    {
      model: "BMW X4",
      image:
        "https://carsalesbase.com/wp-content/uploads/2014/08/BMW_X4-auto-sales-statistics-Europe.jpg",
      id: 4,
    },
  ];
  return (
    <div>
      <Header logo={logo} cars={cars} />
      <Footer />
    </div>
  );
};

export default App;
 