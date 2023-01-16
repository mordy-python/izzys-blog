<script>
	import { config } from '$lib/utils/config';
</script>

<svelte:head>
	<title>Contact - {config.title}</title>
	<meta property="og:title" content="Contact - {config.title}" />
</svelte:head>

<main>
	<h1>Contact Me</h1>
	<form name="netlify-contact-form" method="POST" data-netlify="true" autocomplete="off">
		<input type="hidden" name="form-name" value="netlify-contact-form" />
		<div class="form-group">
			<label for="name">Name</label>
			<input name="name" id="name" required placeholder="Name" type="text" />
		</div>
		<div class="form-group">
			<label for="email">Email</label>
			<input name="email" id="email" required placeholder="Email" type="email" />
		</div>
		<div class="form-group">
			<label for="message">Message</label>
			<textarea name="message" id="message" required placeholder="Message" rows="10" />
		</div>
		<button type="submit">Submit</button>
	</form>
</main>

<style>
	main {
		margin: -30px auto;
	}
	h1 {
		text-align: center;
	}
	form {
		background-color: #44475a;
		padding: 10px;
		border-radius: 10px;
	}
	.form-group {
		margin: 5px 0;
	}
	input[type='text'],
	input[type='email'],
	textarea {
		padding: 10px;
		margin: 10px 0;
		border: none;
		outline: none;
		background-color: #44475a;
		box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.14);
		width: 100%;
		color: #f8f8f2;
		border-radius: 10px;
		font-family: inherit;
		font-size: inherit;
	}
	textarea {
		resize: none;
	}
	button {
		background-color: #50fa7b;
		color: #44475a;
		border-radius: 5px;
		transition: 0.5s;
		padding: 5px;
		transition: 0.5s;
		border: 1px solid #44475a;
		font-size: 18px;
	}
	button:hover {
		background-color: #44475a;
		color: #50fa7b;
		border: 1px solid #50fa7b;
	}
</style>
