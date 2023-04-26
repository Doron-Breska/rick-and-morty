function Footer({ nextPage, prevPage, num }) {
  return (
    <footer className="Footer">
      <button onClick={prevPage} className="prevPage page-btn" type="button">
        &larr;
      </button>
      <span className="page-btn">{num}</span>
      <button onClick={nextPage} className="nextPage page-btn" type="button">
        &rarr;
      </button>
    </footer>
  );
}
export default Footer;
