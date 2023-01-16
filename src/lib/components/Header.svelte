<header>
	<a href="/" class="home">Home</a>

	<nav>
		<ul>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		padding: 1rem;
		background-color: #282a36;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);
		font-size: 20px;
	}
	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}
	a {
		text-decoration: none;
		color: inherit;
		padding: 5px;
		transition: 0.5s;
		border: 1px solid #282a36;
	}
	a:hover {
		background-color: #6272a4;
		border-radius: 5px;
	}
	.home {
		background-color: #50fa7b;
		color: #282a36;
		border-radius: 5px;
		transition: 0.5s;
	}
	.home:hover {
		background-color: #282a36;
		color: #50fa7b;
		border: 1px solid #50fa7b;
	}
</style>
