function Footer({ nextPage, prevPage, num }) {
  return (
    <footer className="Footer">
      <button onClick={prevPage} className="prevPage" type="button">
        &larr;
      </button>
      <span>{num}</span>
      <button onClick={nextPage} className="nextPage" type="button">
        &rarr;
      </button>
    </footer>
  );
}
export default Footer;
