import Link from "next/link";

const Navbar = () => {
	return (
		<header>
			{/*logo*/}
			<div>
				<Link heref="/">
					<h1 className="text-2xl font-comfortaa font-extrabold">
						<span className="text-[#be3400] text-3xl font-yellowtail font-extrabold">
							nth
						</span>
						African
					</h1>
				</Link>
			</div>

			{/*md-menu*/}
			<div>
				<ul>
					<li>
						<Link heref="/"></Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
