import TourCard from './TourCard';

// Prompt: Create a gallery component that maps over tours and renders TourCard for each

function Gallery({ tours, setTours }) {
  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <section className="gallery">
      {tours.map(tour => (
        <TourCard key={tour.id} {...tour} onRemove={removeTour} />
      ))}
    </section>
  );
}

export default Gallery;

