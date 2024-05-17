import React, { useState, useEffect } from "react";
import UsePaginatedFetch from "./usePaginatedFetch";
import Card from './components/Card.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'https://react-mini-projects-api.classbon.com/Programmer/programmers';

function App() {
  const [loading, data] = UsePaginatedFetch(url, 3);
  const [page, setPage] = useState(1);
  const [programmers, setProgrammers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setProgrammers(data[page - 1]);
  }, [loading, data, page]);

  return (
    <div className="container my-5">
      {loading && (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {!loading && (
        <div className="row d-flex justify-content-center">
          {programmers.map(({ id, ...programmer }) => (
            <div className="col-md-6 col-lg-4 mb-4" key={id}>
              <Card {...programmer} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
