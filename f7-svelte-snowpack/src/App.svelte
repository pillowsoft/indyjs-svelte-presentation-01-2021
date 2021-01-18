<script lang="typescript">
	import "framework7/framework7-bundle.min.css";

	import { onMount } from "svelte";
	import Framework7 from "framework7/lite-bundle";
	import Framework7Svelte from "framework7-svelte";

	console.log("window:", window);
	// Init F7 Svelte Plugin
	Framework7.use(Framework7Svelte);

	import {
		Page,
		Navbar,
		App,
		Panel,
		Block,
		View,
		Segmented,
		Button,
		List,
		ListItem,
	} from "framework7-svelte";

	// handle browser show/hide navbar in safari
	function setDocHeight() {
		const measuredHeight =
			document.documentElement?.clientHeight || window.innerHeight;

		console.log("measured height:", measuredHeight);
		document.documentElement.style.setProperty(
			"--vh",
			`${measuredHeight / 100}px`
		);
	}

	onMount(() => {
		setDocHeight();
		// set body to window.innerHeight to fix iOS 100 vh issue
		window.addEventListener("resize", setDocHeight);
		window.addEventListener("orientationchange", setDocHeight);
	});

	if ((window.navigator as any)?.standalone) {
		document.body.classList.add("standalone");
	}

	const f7Params = {
		id: "io.framework7.testapp",
		// theme,
		// routes,
		// store,
		popup: {
			closeOnEscape: true,
		},
		sheet: {
			closeOnEscape: true,
		},
		popover: {
			closeOnEscape: true,
		},
		actions: {
			closeOnEscape: true,
		},
	};
</script>

<style>
	:global(html) {
		margin: 0;
		overflow-y: hidden;
		padding: 0;
	}
</style>

<App {...f7Params}>
	<Panel left cover themeDark>
		<Navbar title="Left Panel" />
		<Block>Left panel content</Block>
	</Panel>

	<Panel right reveal>
		<Navbar title="Right Panel" />
		<Block>Right panel content</Block>
	</Panel>

	<View main>
		<Page>
			<Navbar title="My App" />
			<Block>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
					eleifend, elit vitae scelerisque vulputate, tortor velit tempus dui,
					et luctus tellus justo nec velit. Duis scelerisque in tellus et
					pretium. Ut faucibus fringilla risus, ut dapibus nunc vehicula sit
					amet. Donec posuere nunc non fermentum commodo!!!!
				</p>
			</Block>
			<Block>
				<Segmented>
					<Button panelOpen="left">Left Panel</Button>
					<Button panelOpen="right">Right Panel</Button>
				</Segmented>
			</Block>
			<List>
				{#each [1, 2, 3] as n}
					<ListItem title={`Item ${n}`} />
				{/each}
			</List>
		</Page>
	</View>
</App>
