// Centralized list of leagues you care about (v3 IDs)
// You can edit this list anytime; screens will update automatically.
export const LEAGUES = [
  // Top European + Global
  { key: 'premier-league', id: 39,  name: 'Premier League',       flag: '🏴' },  // England
  { key: 'la-liga',        id: 140, name: 'La Liga',               flag: '🇪🇸' }, // Spain
  { key: 'serie-a',        id: 135, name: 'Serie A',               flag: '🇮🇹' }, // Italy
  { key: 'bundesliga',     id: 78,  name: 'Bundesliga',            flag: '🇩🇪' }, // Germany
  { key: 'ligue-1',        id: 61,  name: 'Ligue 1',               flag: '🇫🇷' }, // France
  { key: 'saudi-pro-league', id: 307, name: 'Saudi Pro League',    flag: '🇸🇦' }, // Saudi Arabia

  // Europe tournaments
  { key: 'ucl',            id: 2,   name: 'UEFA Champions League', flag: '🏆' },
  { key: 'uel',            id: 3,   name: 'UEFA Europa League',    flag: '🥈' },
  { key: 'ucl-w',          id: 525, name: 'UCL Women',             flag: '👑' },

  // Americas
  { key: 'mls',            id: 253, name: 'MLS',                   flag: '🇺🇸' },
  { key: 'mls-next-pro',   id: 909, name: 'MLS Next Pro',          flag: '🧪' },
  { key: 'liga-mx',        id: 262, name: 'Liga MX',               flag: '🇲🇽' },
  { key: 'liga-profesional-argentina', id: 128, name: 'Liga Profesional Argentina', flag: '🇦🇷' },
  { key: 'colombia-primera-a', id: 239, name: 'Colombia Primera A', flag: '🇨🇴' },
  { key: 'copa-argentina', id: 130, name: 'Copa Argentina',        flag: '🇦🇷', category: 'cup', season: 2024 },
  { key: 'copa-colombia',  id: 241, name: 'Copa Colombia',         flag: '🇨🇴', category: 'cup', season: 2024 },

  // Brazil
  { key: 'brasil-serie-a', id: 71,  name: 'Brazil Serie A',        flag: '🇧🇷' },
  

  // Austria
  { key: 'aut-bundesliga', id: 218, name: 'Austrian Bundesliga',   flag: '🇦🇹' },

  // World cups
  { key: 'world-cup',      id: 1,   name: 'FIFA World Cup',        flag: '🏆', category: 'international', season: 2022 },
  { key: 'club-world-cup', id: 15,  name: 'FIFA Club World Cup',   flag: '🌍' },

  // International tournaments
  { key: 'euro-2024',                id: 4,    name: 'UEFA Euro 2024',                 flag: '🇪🇺', category: 'international', season: 2024 },
  { key: 'afcon-2025',               id: 6,    name: 'Africa Cup of Nations 2025',     flag: '🌍', category: 'international', season: 2025 },
  { key: 'asian-cup-2023',           id: 7,    name: 'AFC Asian Cup 2023',             flag: '🌏', category: 'international', season: 2023 },
  { key: 'fifa-intercontinental-2024', id: 1168, name: 'FIFA Intercontinental Cup 2024', flag: '🌐', category: 'international', season: 2024 },
  { key: 'copa-america-2024',       id: 9,    name: 'Copa America 2024',          flag: '🌎', category: 'international', season: 2024 },
];

// Include 2022 for World Cup, 2023 for Asian Cup, keep ordering newest first for fetch priority
export const SEASONS = [2025, 2024, 2023, 2022]; // fetch 2025 first, then 2024, then 2023, then 2022
export const DEFAULT_TIMEZONE = 'UTC';
