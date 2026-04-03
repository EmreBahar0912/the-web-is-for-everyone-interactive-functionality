# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual of video toe 📸 -->
<!-- Voeg een link toe naar GitHub Pages 🌐-->

Tijdens deze sprint heb ik me gefocust op de collectiepagina en de feedback van de opdrachtgever uit de vorige sprint. Ik heb een POST interactie gemaakt doormiddel van een artikel op te slaan in de collectiepagina. Hierbij heb ik verschillende states gemaakt, zoals een empty state, error state & success state.

Live URL website: https://the-web-is-for-everyone-interactive-cvq1.onrender.com/

<img width="365" height="603" alt="image" src="https://github.com/user-attachments/assets/ae771aee-50b7-4362-b1ec-4e1c29a0d66a" />
<img width="367" height="604" alt="image" src="https://github.com/user-attachments/assets/85221293-c3c9-4dd2-a47e-bfc44e581f67" />

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

Ik heb voor mijn POST interactie als eerst een user story gemaakt. Hierin beschrijf ik de user story, een kleine documentatie, een scenario voor de testers, de testresultaten en tot slot mijn commits met de verwerkte feedback. Mijn user story kun je vinden in de volgende issue: . Hieronder zal ik het ook kort even doornemen wat je ermee kunt doen.

Ik heb ervoor gekozen om onder elk artikel een bewaar-knop toe te voegen. Hiermee kunnen gebruikers artikelen bewaren die ze interessant vonden en later terug willen lezen. De knop bestaat uit een hover & active state. Nadat je op de knop hebt geklikt om het desbetreffende artikel te bewaren, wordt het artikel gePOSTe naar de collectiepagina. In de collectiepagina krijg je dan een vereenvoudigde versie te zien van het opgeslagen artikel, namelijk de cover, title & date. Hier heb ik bewust voor gekozen voor het geval een gebruiker meerdere artikelen heeft bewaard en hij/zij snel wil navigeren hierdoorheen om een specifiek artikel te vinden. Je kunt een artikel ook verwijderen, maar deze functionaliteit heb ik voor nu niet permanent toegevoegd. Dit komt doordat deze nog geen styling heeft en ook nog niet de juiste positie ervoor heeft. Voor nu staat het alleen in code uitgecomment. En tot slot heb ik ook verschillende soorten states toegevoegd voor de interactie, namelijk een empty, error en success state.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->

Tijdens deze sprint heb ik ook de focus gelegd op Progressive Enhancement. Deze heb ik toegepast op de dropdown in het hamburger menu & op darkmode.

Ik heb gebruik gemaakt van een `<detail>` element met een `<summary>` erbij voor mijn dropdown in het hamburger menu. Standaard in HTML is dit al een dropdown, maar zonder styling en een basic animatie die er niet uitzien.
https://github.com/EmreBahar0912/the-web-is-for-everyone-interactive-functionality/blob/999ebcc0f9a308b93bbb87374c7114e880ccec21/views/partials/menu.liquid#L9-L16

Dit was stap 1 van Progressive Enhancement, stap 2 bestaat uit het stylen met CSS. Dat heb ik gedaan door toegankelijk CSS properties te gebruiken om een styling te geven aan de dropdown.
De laatste stap bestaat uit het enhancen (verbeteren) van de functionaliteit, zodat het toegankelijk is voor (bijna) iedereen. Het probleem bij mijn dropdown in het hamburger menu was dat de animatie ervan het maar een keer deed en daarna niet meer. Dit probleem heb ik opgelost door gebruik te maken van nieuwe technieken, namelijk `interpolate-size: allow-keywords`, `content-visibility` en `transition-behavior`. Deze technieken zijn nu nog Newly Available (behalve `interpolate-size: allow-keywords`), dit betekent dat het breed wordt ondersteund door grote browser-engines. Deze drie technieken die ik heb benoemd, heb ik dus toegepast om de animatie van de dropdown te verbeteren. Ook heb ik `@media (prefers-reduced-motion: no preference)` toegevoegd voor de gebruikers die wel een animatie willen. Degenen die dat niet willen krijgen dus geen animatie.
https://github.com/EmreBahar0912/the-web-is-for-everyone-interactive-functionality/blob/999ebcc0f9a308b93bbb87374c7114e880ccec21/public/style.css#L11-L12
https://github.com/EmreBahar0912/the-web-is-for-everyone-interactive-functionality/blob/999ebcc0f9a308b93bbb87374c7114e880ccec21/public/style.css#L267-L271

Het mooie aan Progressive Enhancement is dat als de nieuwe technieken die hier gebruikt worden niet worden ondersteund door browsers, dat er dan een fallback is. Want het `<detail>` element is al een dropdown opzich, dus gebruikers kunnen er dan nog steeds gebruik van maken.

Progressive Enhancement heb ik ook toegepast tijdens het maken van de darkmode versie van de website. De fallback is de standaard `color`/`background-color` bijvoorbeeld en `@media (prefers-color-scheme: dark)`, deze technieken zijn Widely Available. De nieuwe techniek die ik hier heb toegepast is `light-dark` (Newly Available). Als een browser-engine `light-dark` wel ondersteund dan gebruikt hij die en als het niet wordt ondersteund dan worden `color`/`background-color` en `@media (prefers-color-scheme: dark)` toegepast.
https://github.com/EmreBahar0912/the-web-is-for-everyone-interactive-functionality/blob/999ebcc0f9a308b93bbb87374c7114e880ccec21/public/style.css#L152-L164

<img width="366" height="520" alt="image" src="https://github.com/user-attachments/assets/87a687c2-4fdc-4cf7-ba54-b8cfb50d769f" />

## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->
Volg deze stappen om de development omgeving in te richten om aan deze repository te kunnen werken:

Stap 1) Installeer de [NodeJS ontwikkelomgeving](https://nodejs.org/en/download). Kies voor NodeJS 24.13.0 (LTS, long-term support), download het installatiebestand en doorloop het installatieproces.

Stap 2) Fork deze repository, clone deze op jouw computer en open het in VSCodium/ een code editor.

Stap 3) Open de Terminal in VSCodium, Voer in de terminal het commando npm install uit door het in te typen en op enter te drukken.

Stap 4 ) Na de installatie is de map node_modules aangemaakt, en gevuld met allerlei packages. Start de website door in de terminal het comando npm start uit te voeren. Als het goed is, komt hier een melding te staan over het opstarten van de server: Application started on http://localhost:8000 — Open deze URL in je browser.

## Bronnen
- [Content-visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/content-visibility)
- [Transition-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transition-behavior)
- [Interpolate-size](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/interpolate-size)
- [Window: history property](https://developer.mozilla.org/en-US/docs/Web/API/Window/history)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
