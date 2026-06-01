# Individuelle Learning Phase: Erste React-Komponenten und JSX sicher anwenden

## Dein Ziel

Du erstellst in einem React-19-Projekt eine kleine Startseite aus mehreren eigenen Komponenten. Dabei übst du den Aufbau funktionaler Komponenten, die Organisation in Dateien und den sicheren Umgang mit JSX und dynamischen Inhalten.

## Das brauchst du

- Ein lauffähiges React-19-Projekt
- Einen Editor, z. B. VS Code
- Node.js und npm
- Einen Browser zum Testen
- Optional: DevTools im Browser

## Zeitplanung

- 10 Minuten: Projekt sichten und Ausgangszustand verstehen
- 20 Minuten: Erste eigene Komponente direkt in `App.jsx` erstellen
- 20 Minuten: Komponente in eigene Datei auslagern und importieren
- 25 Minuten: Zweite Komponente mit dynamischen JSX-Inhalten bauen
- 25 Minuten: Mehrere Komponenten zu einer kleinen Seite zusammensetzen
- 20 Minuten: Erweitern, prüfen, aufräumen und reflektieren

## Basis-Aufgaben

### Aufgabe 1:

Projektüberblick und erste Orientierung  
**Ziel:** Du verstehst, wo in deinem React-19-Projekt Komponenten liegen und wie `App.jsx` als Einstieg funktioniert.  

**Arbeitsauftrag:**  
Öffne dein React-Projekt und starte die Anwendung. Sieh dir die Datei `App.jsx` genau an. Finde heraus:

- wo die Hauptkomponente definiert ist
- was die Komponente zurückgibt
- an welchen Stellen JSX verwendet wird
- welche Teile eher wie HTML aussehen, aber JSX sind

Notiere dir anschließend kurz in einer Kommentarzeile in `App.jsx`, welche Aufgabe diese Datei in deiner Anwendung hat. Entferne unnötigen Demo-Inhalt, sodass du mit einer einfachen, sauberen Ausgangsbasis weiterarbeiten kannst.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Die Anwendung läuft, `App.jsx` ist aufgeräumt, und du erkennst klar den Aufbau einer funktionalen Komponente mit `return` und JSX.

### Aufgabe 2:

Deine erste eigene Komponente  
**Ziel:** Du erstellst eine einfache funktionale Komponente und bindest sie in `App.jsx` ein.  

**Arbeitsauftrag:**  
Erstelle in `App.jsx` eine neue Komponente mit dem Namen `WelcomeBox`. Die Komponente soll einen kleinen Begrüßungsbereich anzeigen, z. B. mit:

- einer Überschrift
- einem kurzen Begrüßungstext
- einem Hinweis, dass die Seite mit React erstellt wurde

Binde `WelcomeBox` unterhalb einer Hauptüberschrift in `App.jsx` ein. Achte darauf, dass du gültiges JSX verwendest.  

**Erwartetes Ergebnis / Soll-Zustand:**  
In deiner Anwendung wird eine eigene Komponente korrekt gerendert. Du hast mindestens zwei Komponenten im Einsatz: `App` und `WelcomeBox`.

### Aufgabe 3:

Komponenten in Dateien organisieren  
**Ziel:** Du lagerst eine Komponente in eine eigene Datei aus und importierst sie korrekt.  

**Arbeitsauftrag:**  
Erstelle einen Ordner `components`, falls er noch nicht existiert. Verschiebe `WelcomeBox` in eine eigene Datei, z. B. `components/WelcomeBox.jsx`. Importiere die Komponente anschließend wieder in `App.jsx`.

Erweitere `WelcomeBox` leicht, z. B. durch:

- einen zusätzlichen Absatz
- eine kleine Liste mit 2–3 Punkten
- einen Button ohne Funktion

Achte besonders auf typische JSX-Regeln:

- nur ein gemeinsames Wurzelelement
- `className` statt `class`
- korrekt geschlossene Tags

**Erwartetes Ergebnis / Soll-Zustand:**  
`WelcomeBox` liegt in einer eigenen Datei und wird sauber in `App.jsx` eingebunden. Die Anwendung läuft ohne Fehlermeldung.

### Aufgabe 4:

Dynamische Inhalte mit JSX  
**Ziel:** Du verwendest geschweifte Klammern, um Werte in JSX dynamisch anzuzeigen.  

**Arbeitsauftrag:**  
Erstelle eine zweite Komponente in einer eigenen Datei, z. B. `components/ProfileCard.jsx`. Zeige darin eine kleine Profilkarte an. Verwende innerhalb der Komponente Variablen oder Konstanten für Inhalte wie:

- Name
- Rolle
- Stadt
- Anzahl der abgeschlossenen Übungen
- aktuelles Jahr

Gib diese Werte über geschweifte Klammern im JSX aus. Ergänze zusätzlich mindestens eine einfache berechnete Ausgabe, z. B. einen Text wie „Noch X Übungen bis zum Tagesziel“, wobei `X` aus zwei Zahlen berechnet wird.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Die Profilkarte zeigt mehrere dynamische Inhalte an. Du verwendest JSX-Ausdrücke korrekt und setzt geschweifte Klammern an passenden Stellen ein.

### Aufgabe 5:

Eine kleine Startseite aus mehreren Komponenten bauen  
**Ziel:** Du setzt mehrere Komponenten zu einer realistischen Mini-Seite zusammen.  

**Arbeitsauftrag:**  
Baue in `App.jsx` eine kleine Startseite für ein Lern-Dashboard oder Entwicklerprofil. Nutze dafür mindestens diese Bereiche:

- Seitenüberschrift in `App`
- `WelcomeBox`
- `ProfileCard`

Ergänze zusätzlich eine dritte kleine Komponente, z. B. `TodayFocus`, `NextSteps` oder `InfoBox`. Diese Komponente soll ebenfalls in einer eigenen Datei liegen und mindestens folgende JSX-Elemente enthalten:

- eine Überschrift
- einen kurzen Text
- eine Liste oder einen Abschnitt mit 2–3 Einträgen

Gestalte die Seite so, dass die Inhalte logisch zusammenpassen.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Deine Anwendung besteht aus mehreren funktionalen Komponenten, die in separaten Dateien organisiert und in `App.jsx` zusammengesetzt sind. Die Seite wirkt wie eine einfache, aber vollständige React-Oberfläche.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: JSX-Fehler bewusst finden und beheben

**Ziel:** Du erkennst typische Anfängerfehler in JSX schneller.  

**Arbeitsauftrag:**  
Gehe deine Komponenten bewusst durch und prüfe sie auf typische Fehlerquellen. Achte unter anderem auf:

- nicht geschlossene Tags
- falsche Attributnamen wie `class` statt `className`
- mehrere nebeneinanderstehende JSX-Elemente ohne gemeinsames Wurzelelement
- falsch gesetzte geschweifte Klammern
- Kommentare im JSX

Verbessere alle Stellen, die problematisch oder uneinheitlich wirken.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Dein Code ist konsistent, JSX-konform und gut lesbar. Du kannst typische Fehlerstellen gezielt benennen.

### Erweiterungsaufgabe 2: Kleine Inhaltsvariation einbauen

**Ziel:** Du vertiefst den Umgang mit dynamischen Werten in JSX.  

**Arbeitsauftrag:**  
Erweitere eine deiner Komponenten so, dass sich Inhalte abhängig von Variablen sichtbar verändern. Beispiele:

- ein Begrüßungstext für morgens oder nachmittags
- ein Status wie „Heute aktiv“ oder „Noch nicht gestartet“
- ein Hinweistext, wenn weniger als 2 Übungen offen sind

Nutze dafür einfache Variablen und Ausdrücke direkt in JSX.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Mindestens eine Komponente zeigt einen Inhalt an, der auf einer Bedingung oder Berechnung basiert.

### Erweiterungsaufgabe 3: Struktur und Dateibenennung verbessern

**Ziel:** Du sorgst für eine saubere Projektstruktur.  

**Arbeitsauftrag:**  
Überprüfe deine Dateinamen, Importpfade und Komponentennamen. Vereinheitliche sie nach einem klaren Muster, z. B.:

- Komponentenname in PascalCase
- eine Komponente pro Datei
- sinnvoll benannter `components`-Ordner

Füge in jeder Komponente kurze, aussagekräftige Inhalte ein, sodass man schon beim Lesen der Datei den Zweck erkennt.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Dein Projekt ist übersichtlich strukturiert. Komponenten, Dateinamen und Imports passen sauber zusammen.

## Wichtige Hinweise

- Schreibe Komponentennamen immer mit großem Anfangsbuchstaben.
- Achte in JSX auf genau ein gemeinsames Wurzelelement pro Komponente.
- Verwende `className` statt `class`.
- Nutze geschweifte Klammern nur für JavaScript-Ausdrücke in JSX.
- Schließe alle Tags sauber.
- Arbeite schrittweise: erst Komponente erstellen, dann anzeigen, dann erweitern.
- Prüfe nach jeder Änderung direkt im Browser und in der Konsole, ob Fehler auftreten.

## Reflexionsfragen

- Woran erkennst du, dass etwas JSX und nicht normales HTML ist?
- Welche Unterschiede zwischen HTML und JSX sind dir beim Arbeiten aufgefallen?
- Was hat sich verbessert, als du Komponenten in eigene Dateien ausgelagert hast?
- An welchen Stellen waren geschweifte Klammern in JSX sinnvoll?
- Welche JSX-Fehler musstest du korrigieren?
- Welche deiner Komponenten würdest du als Nächstes weiter ausbauen?

---