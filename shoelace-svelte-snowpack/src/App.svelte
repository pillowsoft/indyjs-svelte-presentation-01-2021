<script lang="typescript">
  import { onMount } from "svelte";
  import AppBar from "./app-bar.svelte";

  let drawer: any;

  // handle browser show/hide navbar in safari
  function setDocHeight() {
    const measuredHeight =
      document.documentElement?.clientHeight || window.innerHeight;

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
</script>

<sl-theme name="light">
  <sl-drawer label="Drawer" bind:this={drawer}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <sl-button slot="footer" type="primary" on:click={drawer.hide()}>
      Close
    </sl-button>
  </sl-drawer>
  <AppBar />
  <sl-button on:click={drawer.show()}>Open Drawer!!!</sl-button>
</sl-theme>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
