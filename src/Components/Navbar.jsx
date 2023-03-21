function Navbar({ filterNames }) {
  return (
    <nav className="Navbar">
      <input onChange={filterNames} type="Search" placeholder="Search" />
    </nav>
  );
}

export default Navbar;
