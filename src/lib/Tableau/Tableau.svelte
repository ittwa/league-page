<!-- Tableau.svelte -->

<script>
  // You can define any Svelte variables or logic here if needed.
</script>

<main>
  <h1>ITTWA Tableau Dashboard</h1>
  <iframe src="https://public.tableau.com/views/IThoughtThisWasAmericaFFL/Rosters?:language=en-US&:display_count=n&:origin=viz_share_link"></iframe>
</main>

<style>
  /* Apply custom styles to the iframe page */
  .iframe-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    background-color: #f0f0f0;
  }

  h1 {
    margin-bottom: 20px;
  }

  iframe {
    width: 80%; /* Adjust the width as needed */
    height: 80vh; /* Adjust the height as needed */
    border: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
</style>
