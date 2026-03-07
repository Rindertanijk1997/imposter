# Imposter

Ett mobilanpassat sällskapsspel byggt med React. En spelare är impostorn och känner inte till ordet – alla andra gör det. Diskutera och rösta fram vem ni tror är impostorn.

## Kom igång

### Krav
- Node.js v22+
- npm

### Installation
```bash
git clone https://github.com/ditt-repo/imposter.git
cd imposter
npm install
npm run dev
```

Öppna `http://localhost:5173` i webbläsaren.

## Hur man spelar

1. Fyll i alla spelarnamn (minst 3)
2. Tryck **Starta spelet**
3. Skicka runt mobilen – varje spelare trycker på sitt namn för att se sin roll
4. Lagmedlemmar ser ett hemligt ord, impostorn ser ingenting
5. När alla sett sin roll – diskutera vem impostorn är
6. Rösta – den med mest röster förlorar rundan
7. Tryck **Ny runda** för att spela igen

## Projektstruktur
```
src/
├── App.jsx        # Huvudkomponent och spellogik
├── App.css        # All styling
└── gameLogic.js   # Ord, shuffle och spelstate
```

