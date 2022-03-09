# Urlaubs-Kalendar API

Wir wollen eine API bauen, die Urlaubs-Zeiträume von Mitarbeitern speichern kann.

Zum Validieren benutzen wir diesmal express-validator:  
[https://express-validator.github.io/docs/index.html]  

mit den regeln von validator.js:  
[https://github.com/validatorjs/validator.js]

### Daten
Die Route `POST /dates` soll ein JSON Objekt mit Kalender daten bekommen.
z.B.:  
```
{
    "person": "Ulrike"
    "title": "Sommerurlaub",
    "startDate": "2022-06-23",
    "endDate": "2022-07-07"
}
```
Das Datum (en: Date) ist immer im Format: Jahr-Monat-Tag (YYYY-MM-DD)
### Validierung
Der Server soll testen ob die Daten den vorgegebenen Regeln entsprechen.

* Der Server soll mit **Success** antworten, wenn alles in Ordnung ist.  
* Wenn es invalide Daten gibt, sollen alle Fehler-Meldungen zurückgegeben werden.

### Regeln
#### person
* Required
* Ein String
* Mindestens 2 Zeichen
* Höchstens 30 Zeichen
#### title
* Required
* Ein String
* Mindestens 5 Zeichen
* Höchstens 30 Zeichen
#### startDate
* Required
* Ein Datum
#### Favorites
* Required
* Ein Datum
* Muss NACH dem ersten Datum sein (startDate < endDate)