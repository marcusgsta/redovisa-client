import React from 'react';

const LandingPage = () => (
    <div>
        <h1>Landing Page</h1>
        <h2>Projektet: React-Express Chat</h2>

        <p>Projektet består av en Express.js-server och en klient gjord i React.js.</p>

        <p>Projektet är en realtids-chatt där man kan skapa en egen användare, med namn, nick, email och lösenord. Från epostadressen genereras en gravatar från <a href="https://sv.gravatar.com/">https://sv.gravatar.com/</a>. Om man inte har konto där så visas ändå upp en genererad unik bild för varje användare.</p>

        <p>Appen har också admin-sidor. Logga in med admin/admin för att få tillgång till att uppdatera och radera användare. Vanliga användare kan enbart lägga till användarprofil.</p>

        <p>För att återställa databasen kan man köra kommandot npm run reset-database, i terminalen.</p>

        <p>Instruktioner för att ladda ner appen från github och starta den finns här: <a href="https://github.com/marcusgsta/ramverk2-app">https://github.com/marcusgsta/ramverk2-app</a></p>

        <p>React-Express Chat finns i drift på <a href="http://chat-bth.space">chat-bth.space</a></p>

        <h2>Modulen Mongodb-api</h2>
        <p>En modul på npm vilken innehåller ett api med enkla CRUD-operationer att köras mot en Mongodb-databas.</p>
        <p>Du finner den här: <a href='https://www.npmjs.com/package/@marcusgsta/mongodb-api'>https://www.npmjs.com/package/@marcusgsta/mongodb-api</a></p>
    </div>
);

export default LandingPage;
