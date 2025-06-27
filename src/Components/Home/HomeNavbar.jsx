function NavBar(props) {
  return (
    <div className={props.Style}>
      <nav className={props.NavStyle}>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Education">Education</a>
        <a href="#Projects">Projects</a>
        <a href="#Resume">Resume</a>
        <a href="#Contact">Contact</a>
      </nav>
    </div>
  );
}

export default NavBar;
