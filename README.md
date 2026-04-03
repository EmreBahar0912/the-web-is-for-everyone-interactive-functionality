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

## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
