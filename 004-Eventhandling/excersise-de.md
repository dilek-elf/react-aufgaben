# Individuelle Learning Phase: Interaktive Produktliste mit Props und Eventhandling

## Dein Ziel

Du baust eine kleine React-19-Anwendung, in der du Produkte anzeigst, per Props an Kind-Komponenten übergibst und Benutzerinteraktionen mit Event-Handlern verarbeitest. Am Ende hast du eine interaktive Produktliste mit Suchfeld, Auswahlfunktion und einer Auswertung in der übergeordneten Komponente.

## Das brauchst du

- Ein lauffähiges React-19-Projekt, z. B. mit Vite
- Einen Code-Editor
- Einen Browser
- Grundstruktur mit `App.jsx` und einem `components`-Ordner
- Optional: einfache CSS-Datei für bessere Lesbarkeit

## Zeitplanung

- 10 Minuten: Projekt starten und Struktur anlegen
- 20 Minuten: Basis-Aufgabe 1
- 20 Minuten: Basis-Aufgabe 2
- 20 Minuten: Basis-Aufgabe 3
- 25 Minuten: Basis-Aufgabe 4
- 15 Minuten: Basis-Aufgabe 5
- 10 Minuten: Erweiterungsaufgaben oder Feinschliff

## Basis-Aufgaben

### Aufgabe 1:

Produktdaten vorbereiten und erste Props nutzen  
**Ziel:** Du übergibst statische und dynamische Props von einer übergeordneten Komponente an eine Kind-Komponente.  
**Arbeitsauftrag:** Erstelle in `App.jsx` eine kleine Produktliste als Array von Objekten, z. B. mit `id`, `name`, `price` und `inStock`. Lege zusätzlich eine Kind-Komponente `ProductCard` an. Übergib zunächst einzelne statische Props an `ProductCard`, z. B. einen fest definierten Titel. Übergib danach dynamische Props aus deinem Produktobjekt. Zeige in der Karte mindestens Name, Preis und Verfügbarkeitsstatus an.  
**Erwartetes Ergebnis / Soll-Zustand:** Du siehst mindestens eine Produktkarte im Browser, die Daten über Props erhält und korrekt anzeigt. Du hast sowohl statische als auch dynamische Props verwendet.

### Aufgabe 2:

Mehrere Kind-Komponenten mit Props rendern  
**Ziel:** Du liest Props in Komponenten aus und nutzt sie für mehrere Datensätze.  
**Arbeitsauftrag:** Rendere jetzt nicht nur ein Produkt, sondern alle Produkte aus deinem Array. Verwende dafür `map()` in `App.jsx` und übergib jedem `ProductCard` die benötigten Props. Ergänze in `ProductCard` eine gut lesbare Darstellung, z. B. Preis mit Euro-Zeichen und einen Text wie „Auf Lager“ oder „Nicht verfügbar“.  
**Erwartetes Ergebnis / Soll-Zustand:** Mehrere Produkte werden als Liste oder Kartenansicht dargestellt. Jede Karte liest ihre Props korrekt aus und zeigt individuelle Inhalte an.

### Aufgabe 3:

Klick-Event in einer Kind-Komponente auslösen  
**Ziel:** Du nutzt einfache Event-Handler für Benutzerinteraktionen mit `onClick`.  
**Arbeitsauftrag:** Ergänze in `ProductCard` einen Button „Auswählen“. Lege in `App.jsx` einen State an, der speichert, welches Produkt zuletzt ausgewählt wurde. Übergib eine Funktion als Prop an `ProductCard`, die beim Klick auf den Button aufgerufen wird. Die Kind-Komponente soll also das Event auslösen, die Verarbeitung soll aber in `App.jsx` stattfinden. Zeige oberhalb der Produktliste den Namen des zuletzt ausgewählten Produkts an.  
**Erwartetes Ergebnis / Soll-Zustand:** Beim Klick auf „Auswählen“ in einer Produktkarte wird in der übergeordneten Komponente der aktuelle Zustand aktualisiert. Der zuletzt ausgewählte Produktname wird sichtbar angezeigt.

### Aufgabe 4:

Suchfeld mit onChange umsetzen  
**Ziel:** Du verarbeitest Eingaben mit `onChange` und steuerst damit die Anzeige.  
**Arbeitsauftrag:** Erstelle eine Komponente `SearchBar` mit einem Eingabefeld. Übergib den aktuellen Suchtext und eine Änderungsfunktion als Props. Verwalte den State für den Suchtext in `App.jsx`. Filtere die Produktliste so, dass nur Produkte angezeigt werden, deren Name den eingegebenen Text enthält. Achte darauf, dass die Filterung bei jeder Eingabe direkt reagiert.  
**Erwartetes Ergebnis / Soll-Zustand:** Du kannst Text in ein Suchfeld eingeben und die Produktliste wird live gefiltert. Die Eingabe wird über `onChange` verarbeitet, und die Funktion dafür kommt aus der übergeordneten Komponente.

### Aufgabe 5:

Auswertung als eigene Komponente mit Props anzeigen  
**Ziel:** Du nutzt Props, um berechnete Informationen an eine weitere Komponente weiterzugeben.  
**Arbeitsauftrag:** Erstelle eine Komponente `ProductSummary`. Übergib ihr per Props mindestens folgende Informationen: Gesamtanzahl aller Produkte, Anzahl der aktuell sichtbaren Produkte nach Filterung und Name des zuletzt ausgewählten Produkts. Zeige diese Daten übersichtlich an. Wenn noch kein Produkt ausgewählt wurde, soll ein sinnvoller Hinweistext erscheinen.  
**Erwartetes Ergebnis / Soll-Zustand:** Über der oder unter der Produktliste wird eine Zusammenfassung angezeigt, die ausschließlich über Props versorgt wird und sich bei Such- oder Klick-Aktionen sichtbar aktualisiert.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: Auswahlzähler pro Produkt

**Ziel:** Du verarbeitest wiederholte Events und aktualisierst Daten in der übergeordneten Komponente.  
**Arbeitsauftrag:** Ergänze in `App.jsx` eine Logik, mit der gezählt wird, wie oft jedes Produkt ausgewählt wurde. Zeige in jeder `ProductCard` die aktuelle Anzahl der Auswahlen an. Die Zählung soll in der Parent-Komponente verwaltet und per Props an die Kind-Komponenten zurückgegeben werden.  
**Erwartetes Ergebnis / Soll-Zustand:** Jeder Klick auf „Auswählen“ erhöht den Zähler des passenden Produkts. Die Anzeige pro Produkt wird korrekt aktualisiert.

### Erweiterungsaufgabe 2: Nicht verfügbare Produkte anders behandeln

**Ziel:** Du verknüpfst Props mit Event-Verhalten und Darstellung.  
**Arbeitsauftrag:** Sorge dafür, dass Produkte mit `inStock: false` deutlich erkennbar sind, z. B. durch einen Hinweistext oder eine andere Darstellung. Deaktiviere zusätzlich den „Auswählen“-Button für diese Produkte.  
**Erwartetes Ergebnis / Soll-Zustand:** Nicht verfügbare Produkte sind optisch unterscheidbar und können nicht ausgewählt werden.

### Erweiterungsaufgabe 3: Filter zurücksetzen

**Ziel:** Du kombinierst mehrere Event-Handler in einer kleinen Benutzeroberfläche.  
**Arbeitsauftrag:** Ergänze einen Button „Filter zurücksetzen“. Beim Klick soll das Suchfeld geleert werden und wieder die vollständige Produktliste erscheinen.  
**Erwartetes Ergebnis / Soll-Zustand:** Nach dem Klick ist das Eingabefeld leer und alle Produkte werden wieder angezeigt.

## Wichtige Hinweise

- Arbeite Schritt für Schritt und teste jede Aufgabe direkt im Browser.
- Verwende für jede Komponente klare Props-Namen, z. B. `name`, `price`, `onSelect`, `searchTerm`.
- Achte darauf, dass der State dort liegt, wo die Daten verwaltet werden sollen.
- Übergib Funktionen an Kind-Komponenten als Props und rufe sie dort bei Events auf.
- Halte deine Komponenten klein und übersichtlich.
- Wenn etwas nicht funktioniert, prüfe zuerst die Props-Namen, die Event-Handler und die Konsole im Browser.

## Reflexionsfragen

- Wo hast du statische Props verwendet, wo dynamische?
- Welche Daten hast du direkt in einer Komponente genutzt, welche über Props erhalten?
- Warum ist es sinnvoll, den ausgewählten Produktnamen in `App.jsx` zu verwalten?
- Wie funktioniert der Weg eines Events von einer Kind-Komponente zur übergeordneten Komponente?
- Was hat sich in deiner Anwendung verändert, als du `onChange` für das Suchfeld eingebaut hast?
- Welche Komponente hat in deiner Lösung welche Verantwortung?

---