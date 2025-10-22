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
            <div>
               <h2>What do you want to run?</h2>
            </div>
         </main>
      </body>
   </html>
`;

export default createHomepageTemplate;
