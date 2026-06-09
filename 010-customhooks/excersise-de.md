# Individuelle Learning Phase: Custom Hooks mit `useToggle` in React 19

## Dein Ziel

Du baust in React 19 eine kleine UI mit wiederverwendbarer Umschalt-Logik auf. Dabei lagerst du mehrfach verwendete Hook-Logik aus Komponenten aus und erstellst einen eigenen Custom Hook mit dem Namen `useToggle`. Am Ende nutzt du den Hook in mehreren Komponenten und hast den Unterschied zwischen lokaler Hook-Logik in Komponenten und ausgelagerter Custom-Hook-Logik praktisch nachvollzogen.

## Das brauchst du

- Einen Rechner mit Node.js und npm
- Ein React-19-Projekt, z. B. mit Vite
- Einen Editor wie VS Code
- Einen Browser zum Testen
- Grundkenntnisse zu `useState`, Komponenten, Props und Events

## Zeitplanung

- 10 Min: Projekt vorbereiten und Zielstruktur anlegen
- 20 Min: Basis-Aufgabe 1
- 20 Min: Basis-Aufgabe 2
- 25 Min: Basis-Aufgabe 3
- 20 Min: Basis-Aufgabe 4
- 15 Min: Basis-Aufgabe 5
- 10 Min: Erweiterungsaufgaben nach Wahl
- 10 Min: Testen, Aufräumen, Reflexion

## Basis-Aufgaben

### Aufgabe 1:

Ausgangsprojekt und UI-Grundgerüst aufbauen  
**Ziel:** Du erstellst ein kleines React-19-Projekt mit mehreren Komponenten, in denen ein sichtbarer Ein-/Aus-Zustand gebraucht wird.  

**Arbeitsauftrag:**  
Erstelle ein neues React-Projekt oder nutze ein bestehendes leeres Projekt. Baue eine kleine Seite mit dem Titel „Custom Hooks Playground“. Erstelle mindestens diese drei Komponenten:

- `FaqItem`
- `NotificationPanel`
- `ThemeSwitch`

Setze alle drei Komponenten zunächst direkt in `App.jsx` ein.  
In jeder Komponente soll ein Zustand umgeschaltet werden können:

- `FaqItem`: Antwort ein-/ausblenden
- `NotificationPanel`: Panel öffnen/schließen
- `ThemeSwitch`: Text zwischen „Hell“ und „Dunkel“ umschalten

Nutze in jeder Komponente zunächst **eigene lokale `useState`-Logik**.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast ein lauffähiges React-19-Projekt mit drei sichtbaren Komponenten. Jede Komponente kann unabhängig einen Boolean-Zustand umschalten.

### Aufgabe 2:

Doppelte Hook-Logik sichtbar machen  
**Ziel:** Du erkennst praktisch, warum sich wiederholende Hook-Logik ausgelagert werden sollte.  

**Arbeitsauftrag:**  
Prüfe deine drei Komponenten und markiere die Stellen, an denen sich Logik wiederholt. Achte besonders auf:

- `useState(false)` oder ähnliche Initialwerte
- Event-Handler wie `setOpen(!open)` oder `setVisible(v => !v)`
- ähnliche Button-Beschriftungen und Statusanzeigen

Notiere direkt im Code als Kommentar an mindestens drei Stellen, wo dieselbe oder sehr ähnliche Logik mehrfach vorkommt. Benenne außerdem kurz in einem Kommentar, warum eine Auslagerung sinnvoll wäre, z. B. bessere Wiederverwendbarkeit, weniger duplizierter Code, klarere Komponenten.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast in mehreren Komponenten erkennbare Wiederholungen markiert und kannst im Code nachvollziehen, welche Logik für einen Custom Hook geeignet ist.

### Aufgabe 3:

Deinen ersten Custom Hook `useToggle` erstellen  
**Ziel:** Du lagerst die wiederholte Umschalt-Logik in einen eigenen Hook aus.  

**Arbeitsauftrag:**  
Lege einen Ordner `src/hooks` an und erstelle darin eine Datei `useToggle.js` oder `useToggle.jsx`. Implementiere einen Custom Hook mit diesem Aufbau:

- Name beginnt mit `use`
- Er verwaltet intern einen Boolean-Zustand
- Er akzeptiert einen optionalen Initialwert
- Er gibt den aktuellen Zustand und eine Funktion zum Umschalten zurück

Verwende im Hook React-Hooks korrekt und achte auf eine klare Benennung. Nutze den Hook noch nicht sofort überall, sondern teste ihn zuerst in **einer** Komponente, z. B. in `FaqItem`.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Es gibt einen eigenen Hook `useToggle`, der technisch korrekt aufgebaut ist, einen Boolean-Zustand kapselt und in mindestens einer Komponente erfolgreich verwendet wird.

### Aufgabe 4:

`useToggle` in mehreren Komponenten einsetzen  
**Ziel:** Du verwendest deinen Custom Hook wiederverwendbar in verschiedenen Komponenten.  

**Arbeitsauftrag:**  
Ersetze in allen drei Komponenten die lokale Toggle-Logik durch deinen Custom Hook. Passe den Code so an, dass die Komponenten weiterhin unabhängig funktionieren. Nutze dabei unterschiedliche Initialwerte, z. B.:

- `FaqItem` startet geschlossen
- `NotificationPanel` startet geöffnet oder geschlossen
- `ThemeSwitch` startet im Hell- oder Dunkel-Modus

Achte darauf, dass jede Komponente weiterhin ihre eigene Darstellung und ihre eigenen Texte hat, aber die Umschalt-Logik nicht mehr dupliziert wird.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Alle drei Komponenten verwenden `useToggle`. Die Komponenten sind kürzer, verständlicher und enthalten keine unnötig doppelte Umschalt-Logik mehr.

### Aufgabe 5:

Hook erweitern und Anwendung abrunden  
**Ziel:** Du machst deinen Custom Hook praktischer für den Einsatz in realistischen React-19-Komponenten.  

**Arbeitsauftrag:**  
Erweitere `useToggle`, sodass der Hook neben dem Zustand und der Toggle-Funktion zusätzlich gezielte Funktionen bereitstellt, um den Zustand explizit zu setzen, z. B.:

- einschalten / öffnen
- ausschalten / schließen

Verwende diese zusätzlichen Möglichkeiten in mindestens zwei Komponenten sinnvoll. Beispiele:

- `NotificationPanel` bekommt Buttons für „Öffnen“, „Schließen“ und „Umschalten“
- `FaqItem` blendet die Antwort über einen einzelnen Toggle-Button ein und aus
- `ThemeSwitch` setzt gezielt auf Hell oder Dunkel

Räume danach deinen Code auf:

- sprechende Variablennamen
- saubere Imports
- keine ungenutzten Zustände oder Funktionen
- kurze Kommentare nur dort, wo sie wirklich helfen

**Erwartetes Ergebnis / Soll-Zustand:**  
Dein Hook ist flexibler als zu Beginn und wird in mehreren Komponenten sinnvoll eingesetzt. Die Komponenten sind klar strukturiert und der Code ist aufgeräumt.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: Gemeinsame Demo-Seite mit realistischem UI

**Ziel:** Du setzt deinen Hook in einer kleinen, zusammenhängenden Oberfläche ein.  

**Arbeitsauftrag:**  
Erweitere `App.jsx` zu einer kleinen Demo-Seite, z. B. für ein Dashboard, ein Support-Center oder eine Einstellungsseite. Nutze `useToggle` in mindestens vier UI-Bausteinen, z. B.:

- FAQ-Antwort
- Seitenmenü
- Hinweisbox
- Theme-Umschalter

Gib jedem Bereich eine klare Überschrift und eine einfache visuelle Struktur.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine kleine, zusammenhängende React-19-Oberfläche, in der `useToggle` mehrfach in realistischen UI-Situationen eingesetzt wird.

### Erweiterungsaufgabe 2: Hook robuster machen

**Ziel:** Du verbesserst die Benutzbarkeit deines Custom Hooks.  

**Arbeitsauftrag:**  
Prüfe deinen Hook auf sinnvolle Nutzung und erweitere ihn so, dass er gut lesbar und einfach einsetzbar bleibt. Mögliche Verbesserungen:

- klarere Rückgabestruktur
- konsistente Funktionsnamen
- besser verständliche Variablennamen
- optionaler Startwert sauber dokumentiert

Teste anschließend deinen Hook in allen vorhandenen Komponenten erneut.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Dein Hook lässt sich sauber lesen und ohne Nachdenken in verschiedenen Komponenten verwenden.

### Erweiterungsaufgabe 3: Zweiten sehr kleinen Custom Hook entwerfen

**Ziel:** Du übst den grundsätzlichen Aufbau eines weiteren Custom Hooks.  

**Arbeitsauftrag:**  
Erstelle zusätzlich einen sehr kleinen Custom Hook eigener Wahl, der zu deiner Demo-Seite passt. Beispiele:

- `useDocumentTitle` für den Seitentitel
- `useInput` für ein einfaches Eingabefeld
- `useCounter` für einen kleinen Zählerbereich

Nutze diesen Hook in genau einer passenden Komponente. Halte den Hook bewusst klein und übersichtlich.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast neben `useToggle` einen zweiten einfachen Custom Hook erstellt und in einer Komponente verwendet.

## Wichtige Hinweise

- Benenne deinen Custom Hook immer mit dem Präfix `use`.
- Verwende React-Hooks nur innerhalb von Funktionskomponenten oder anderen Hooks.
- Lagere nur Logik aus, die sich tatsächlich wiederholt oder wiederverwendbar ist.
- Achte darauf, dass dein Hook allgemeine Logik kapselt und keine zu spezielle UI kennt.
- Prüfe nach jeder Änderung im Browser, ob das Verhalten noch korrekt ist.
- Wenn du schnell fertig bist, investiere die restliche Zeit in saubere Benennung und klaren Code.

## Reflexionsfragen

- Wo genau hat sich Hook-Logik in deinen Komponenten wiederholt?
- Was ist durch den Custom Hook in deinem Code einfacher geworden?
- Woran erkennst du, dass `useToggle` ein sinnvoller Name ist?
- Welche Teile gehören in den Hook und welche bleiben in der Komponente?
- In welchen weiteren React-19-Komponenten könntest du `useToggle` direkt wiederverwenden?
- Wann würdest du Logik **nicht** in einen Custom Hook auslagern?

---