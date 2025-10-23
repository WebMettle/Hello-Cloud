//
// Copyright (c) 2025 by WebMettle Systems.
//

const createHomepageTemplate = () => `
   <html>
      <head>
         <title>Hello Cloud Project</title>
         <link rel = "stylesheet" href = "styles.css">
         <script src = "https://cdn.jsdelivr.net/npm/htmx.org@2.0.7/dist/htmx.min.js"
                 integrity = "sha384-ZBXiYtYQ6hJ2Y0ZNoYuI+Nq5MqWBr+chMrS/RkXpNzQCApHEhOt2aY8EJgqwHLkJ"
                 crossorigin = "anonymous">
         </script>
      </head>
      <body>
         <header>
            <h1>Hello Cloud Project</h1>
         </header>
         <main>
            <button hx-get = "/when"  hx-swap = "innterHTML" hx-target = ".when-output"><b>Show When</b></button><br><br>
            <div class = "when-output"><i>Click the button to get a result from the /when API.</i></div>
         </main>
      </body>
   </html>
`;

export default createHomepageTemplate;
