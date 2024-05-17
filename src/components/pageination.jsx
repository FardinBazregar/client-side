import _ from "lodash";
const PageInation = ({ pages, setPage, activePage }) => {
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = pages;
      }
      return prevPage;
    });
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage < 1) {
        nextPage = 1;
      }
      return nextPage;
    });
  };
  return (
    <nav>
      <ul className="pagination d-flex justify-content-center mt-5" dir="rtl">
        <li className="page-item" onClick={prevPage}>
          <a href="#" className="page-link">
            قبلی
          </a>
        </li>
        {_.times(pages, (index) => (
          <li
            key={`pageination-` + index}
            className={`page-item ${index + 1 === activePage ? "active" : ""}`}
            onClick={() => setPage(index + 1)}
          >
            <a href="#" className="page-link">
              {index + 1}
            </a>
          </li>
        ))}
        <li className="page-item" onClick={nextPage}>
          <a href="#" className="page-link">
            بعدی
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default PageInation;
