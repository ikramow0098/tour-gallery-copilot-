import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';

const url = '/tours.json';


function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  // Prompt: Fetch tours from local JSON, handle loading and error state, allow refreshing
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching data</h2>;

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    );
  }

  return (
    <main>
      <h1>🌍 Tour Gallery</h1>
      <Gallery tours={tours} setTours={setTours} />
    </main>
  );
}

export default App;
