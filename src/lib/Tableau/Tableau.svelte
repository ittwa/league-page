<!-- Tableau.svelte -->

<script>
  // You can define any Svelte variables or logic here if needed.
</script>

<main>
  <h1>ITTWA Tableau Dashboard</h1>
  <div class='tableauPlaceholder' id='viz1693013313373' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;IT&#47;IThoughtThisWasAmericaFFL&#47;Rosters&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='IThoughtThisWasAmericaFFL&#47;Rosters' /><param name='tabs' value='yes' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;IT&#47;IThoughtThisWasAmericaFFL&#47;Rosters&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1693013313373');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';} else { vizElement.style.width='100%';vizElement.style.height='2750px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
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
