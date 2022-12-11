function Logo() {
  return <img src="" alt="some-logo" />;
}

function Menu() {
  return (
    <nav className="nav-el">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <Logo />
      <h1>Blog name</h1>
      <Menu />
    </header>
  );
}

export default Header;
