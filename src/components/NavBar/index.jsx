import './styles.css'

function NavBar() {  
  return (
    <div className="navbar">
    <h1>Thiago Store</h1>
     
    <nav className='menu'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Novidades</a></li>
            <li><a href="#">Descontos</a></li>
        </ul>
    </nav>


    </div>
  )
}

export default NavBar
