import food from '../food.png'

const Navbar = () => {
	return ( 
		<nav>
			<div className="logo">
				<img src={food} alt="logo" />
				<h1> Food Spider</h1>
			</div>
			
			<div className="navlinks">
				<a href="/">Add food</a>
				<a href="/">Orders</a>
			</div>

		</nav>
		
	 );
}
 
export default  Navbar;
