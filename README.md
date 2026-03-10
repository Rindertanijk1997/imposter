# Imposter

Ett mobilanpassat sällskapsspel byggt med React. En spelare är impostorn och känner inte till ordet – alla andra gör det. Diskutera och rösta fram vem ni tror är impostorn.

## Spela

https://rindertanijk1997.github.io/imposter/

## Hur man spelar

1. Fyll i alla spelarnamn (minst 3)
2. Tryck **Starta spelet**
3. Skicka runt mobilen – varje spelare trycker på sitt namn för att se sin roll
4. Lagmedlemmar ser ett hemligt ord, impostorn ser ingenting
5. När alla sett sin roll – diskutera vem impostorn är
6. Rösta – den med mest röster förlorar rundan

## Projektstruktur
```
src/
├── App.jsx        # Huvudkomponent och spellogik
├── App.css        # All styling
└── gameLogic.js   # Ord, shuffle och spelstate
```

