## Mein Blog

Eine Blog-Website bestehend aus Frontend und Backend, die eine Übersicht aller Blogbeiträge zeigt und durch Anklicken eines Beitrags eine Detailansicht ermöglicht. Des weiteren ist über eine separate Seite für den Admin das Erstellen und Veröffentlichen von neuen Beiträgen möglich. Aktuell nicht gesichert (keine Guarded Route), da ohne Authentifizierung.

FRONTEND  
Besonderheiten:  
– react app  
– Routing per BrowserRouter, Routes, Route (react router dom)  
– Erstellen von z.B. Arrays anhand eines States mit useState() (react)  
– useEffect() (react hook) mit fetch() und promises  
– sinnvolle Aufteilung in pages und components (wie z.B. im atomic design)

BACKEND  
Besonderheiten:  
– Node.js (asynchrone, event-basierte JavaScript-Laufzeitumgebung)  
– express (Backend Framework für Node.js)  
– Verwendung von verschiedenen middlewares:  
. multer (node.js middleware) für das Hochladen von Dateien  
. cors (node.js package) cors (node.js-Paket) für den Zugriff auf und die Validierung von Requests von remote hosts / verschiedenen Quellen  
. morgan (http request logger)  
– Routing methods (hier: GET und POST)  
– fs-module-Funktionen wie readFile(), writeFile() etc.  
– promises  

Das Design ist in diesem Projekt erst einmal unwichtig, da die Entwicklung / Umsetzung der Funktionalitäten im Vordergrund stand.

Das Projekt ist noch nicht fertig gestellt und weiterhin in Bearbeitung.

/

*A blog website consisting of frontend and backend, that displays an overview of all blog posts and allows a detail view by clicking on a post. Furthermore, the creation and publication of new contributions is possible via a separate page for the admin. Currently not protected (no guarded route), as without authentication.*

*FRONTEND  
Specifics:  
– react app  
– Routing per BrowserRouter/Routen/Route (react router dom)  
– Creating e.g. arrays based on a state with useState() (react)  
– useEffect() (react hook) with fetch() und promises  
– meaningful segmentation into pages and components (as e.g. in atomic design)*

*BACKEND  
Specifics:  
– Node.js (asynchronous, event-based JavaScript runtime environment)  
– express (Backend Framework for Node.js)  
– Use of various middlewares:  
. multer (node.js middleware) to handle uploading files  
. cors (node.js package) to access and validate requests from remote hosts / different origins  
. morgan (http request logger)  
– Routing methods (hier: GET und POST)  
– fs module functions such as readFile(), writeFile() etc.  
– promises*

*The design wasn't important in this project, as the development / implementation of the functionalities was the main focus.*

*The project has not yet been completed and is still in progress.*
