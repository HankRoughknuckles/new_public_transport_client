import TramLine from '../../lib/simulator/TramLine';
import Segment from '../../lib/simulator/Segment';
import {NO_NEIGHBOR} from '../../lib/simulator/common';

export const API_DELNICKA = {
  id: 17,
  name: 'Dělnická',
  simpleName: 'Dělnická',
  outgoingSegments: [],
  trams: [],
};

export const API_MANINY = {
  id: 18,
  name: 'Maniny',
  simpleName: 'Maniny',
  outgoingSegments: [],
  trams: [],
}

export const apiAllStations = [
  {
    id: 1,
    name: 'Sídliště Petřiny',
    simpleName: 'Sídliště Petřiny',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 2,
    name: 'Petřiny',
    simpleName: 'Petřiny',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 3,
    name: 'Větrník',
    simpleName: 'Větrník',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 4,
    name: 'Vojenská nemocnice',
    simpleName: 'Vojenská nemocnice',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 5,
    name: 'Baterie',
    simpleName: 'Baterie',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 6,
    name: 'Ořechovka',
    simpleName: 'Ořechovka',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 7,
    name: 'Sibeliova',
    simpleName: 'Sibeliova',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 8,
    name: 'Vozovna Střešovice (Muzeum MHD)',
    simpleName: 'Vozovna Střešovice (Muzeum MHD)',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 9,
    name: 'Prašný most',
    simpleName: 'Prašný most',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 10,
    name: 'Hradčanská',
    simpleName: 'Hradčanská',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 11,
    name: 'Sparta',
    simpleName: 'Sparta',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 12,
    name: 'Letenské náměstí',
    simpleName: 'Letenské náměstí',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 13,
    name: 'Kamenická',
    simpleName: 'Kamenická',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 14,
    name: 'Strossmayerovo náměstí',
    simpleName: 'Strossmayerovo náměstí',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 15,
    name: 'Vltavská',
    simpleName: 'Vltavská',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 16,
    name: 'Pražská tržnice',
    simpleName: 'Pražská tržnice',
    outgoingSegments: [],
    trams: [],
  },
  API_DELNICKA,
  API_MANINY,
  {
    id: 19,
    name: 'Libeňský most',
    simpleName: 'Libeňský most',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 20,
    name: 'Palmovka (ul. Zenklova)',
    simpleName: 'Palmovka (ul. Zenklova)',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 21,
    name: 'Krejcárek',
    simpleName: 'Krejcárek',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 22,
    name: 'Ohrada',
    simpleName: 'Ohrada',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 23,
    name: 'Vozovna Žižkov',
    simpleName: 'Vozovna Žižkov',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 24,
    name: 'Strážní',
    simpleName: 'Strážní',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 25,
    name: 'Chmelnice',
    simpleName: 'Chmelnice',
    outgoingSegments: [],
    trams: [],
  },
  {
    id: 26,
    name: 'Kněžská luka',
    simpleName: 'Kněžská luka',
    outgoingSegments: [],
    trams: [],
  },
]

export const LINE_1_1 = new TramLine({
  id: 1,
  name: 'Line 1 - direction 1',
  segments: [
    {
      id: 1,
      stationId: 1,
      neighborStationId: 2,
      secondsToNeighbor: 120,
    },
    {
      id: 2,
      stationId: 2,
      neighborStationId: 3,
      secondsToNeighbor: 120,
    },
    {
      id: 3,
      stationId: 3,
      neighborStationId: 4,
      secondsToNeighbor: 120,
    },
    {
      id: 4,
      stationId: 4,
      neighborStationId: 5,
      secondsToNeighbor: 120,
    },
    {
      id: 5,
      stationId: 5,
      neighborStationId: 6,
      secondsToNeighbor: 120,
    },
    {
      id: 6,
      stationId: 6,
      neighborStationId: 7,
      secondsToNeighbor: 120,
    },
    {
      id: 7,
      stationId: 7,
      neighborStationId: 8,
      secondsToNeighbor: 120,
    },
    {
      id: 8,
      stationId: 8,
      neighborStationId: 9,
      secondsToNeighbor: 120,
    },
    {
      id: 9,
      stationId: 9,
      neighborStationId: 10,
      secondsToNeighbor: 120,
    },
    {
      id: 10,
      stationId: 10,
      neighborStationId: 11,
      secondsToNeighbor: 120,
    },
    {
      id: 11,
      stationId: 11,
      neighborStationId: 12,
      secondsToNeighbor: 120,
    },
    {
      id: 12,
      stationId: 12,
      neighborStationId: 13,
      secondsToNeighbor: 120,
    },
    {
      id: 13,
      stationId: 13,
      neighborStationId: 14,
      secondsToNeighbor: 120,
    },
    {
      id: 14,
      stationId: 14,
      neighborStationId: 15,
      secondsToNeighbor: 120,
    },
    {
      id: 15,
      stationId: 15,
      neighborStationId: 16,
      secondsToNeighbor: 120,
    },
    {
      id: 16,
      stationId: 16,
      neighborStationId: 17,
      secondsToNeighbor: 120,
    },
    {
      id: 17,
      stationId: 17,
      neighborStationId: 18,
      secondsToNeighbor: 120,
    },
    {
      id: 18,
      stationId: 18,
      neighborStationId: 19,
      secondsToNeighbor: 120,
    },
    {
      id: 19,
      stationId: 19,
      neighborStationId: 20,
      secondsToNeighbor: 120,
    },
    {
      id: 20,
      stationId: 20,
      neighborStationId: 21,
      secondsToNeighbor: 120,
    },
    {
      id: 21,
      stationId: 21,
      neighborStationId: 22,
      secondsToNeighbor: 120,
    },
    {
      id: 22,
      stationId: 22,
      neighborStationId: 23,
      secondsToNeighbor: 120,
    },
    {
      id: 23,
      stationId: 23,
      neighborStationId: 24,
      secondsToNeighbor: 120,
    },
    {
      id: 24,
      stationId: 24,
      neighborStationId: 25,
      secondsToNeighbor: 120,
    },
    {
      id: 25,
      stationId: 25,
      neighborStationId: NO_NEIGHBOR,
      secondsToNeighbor: -1,
    },
  ].map(s => new Segment(s)),
});

export const LINE_1_2 = new TramLine({
  id: 1,
  name: 'Line 1 - direction 2',
  segments: [
    {
      id: 27,
      stationId: 26,
      neighborStationId: 25,
      secondsToNeighbor: 120,
    },
    {
      id: 28,
      stationId: 25,
      neighborStationId: 24,
      secondsToNeighbor: 120,
    },
    {
      id: 29,
      stationId: 24,
      neighborStationId: 23,
      secondsToNeighbor: 120,
    },
    {
      id: 30,
      stationId: 23,
      neighborStationId: 22,
      secondsToNeighbor: 120,
    },
    {
      id: 31,
      stationId: 22,
      neighborStationId: 21,
      secondsToNeighbor: 120,
    },
    {
      id: 32,
      stationId: 21,
      neighborStationId: 20,
      secondsToNeighbor: 120,
    },
    {
      id: 33,
      stationId: 20,
      neighborStationId: 19,
      secondsToNeighbor: 120,
    },
    {
      id: 34,
      stationId: 19,
      neighborStationId: 18,
      secondsToNeighbor: 120,
    },
    {
      id: 35,
      stationId: 18,
      neighborStationId: 17,
      secondsToNeighbor: 120,
    },
    {
      id: 36,
      stationId: 17,
      neighborStationId: 16,
      secondsToNeighbor: 120,
    },
    {
      id: 37,
      stationId: 16,
      neighborStationId: 15,
      secondsToNeighbor: 120,
    },
    {
      id: 38,
      stationId: 15,
      neighborStationId: 14,
      secondsToNeighbor: 120,
    },
    {
      id: 39,
      stationId: 14,
      neighborStationId: 13,
      secondsToNeighbor: 120,
    },
    {
      id: 40,
      stationId: 13,
      neighborStationId: 12,
      secondsToNeighbor: 120,
    },
    {
      id: 41,
      stationId: 12,
      neighborStationId: 11,
      secondsToNeighbor: 120,
    },
    {
      id: 42,
      stationId: 11,
      neighborStationId: 10,
      secondsToNeighbor: 120,
    },
    {
      id: 43,
      stationId: 10,
      neighborStationId: 9,
      secondsToNeighbor: 120,
    },
    {
      id: 44,
      stationId: 9,
      neighborStationId: 8,
      secondsToNeighbor: 120,
    },
    {
      id: 45,
      stationId: 8,
      neighborStationId: 7,
      secondsToNeighbor: 120,
    },
    {
      id: 46,
      stationId: 7,
      neighborStationId: 6,
      secondsToNeighbor: 120,
    },
    {
      id: 47,
      stationId: 6,
      neighborStationId: 5,
      secondsToNeighbor: 120,
    },
    {
      id: 48,
      stationId: 5,
      neighborStationId: 4,
      secondsToNeighbor: 120,
    },
    {
      id: 49,
      stationId: 4,
      neighborStationId: 3,
      secondsToNeighbor: 120,
    },
    {
      id: 50,
      stationId: 3,
      neighborStationId: 2,
      secondsToNeighbor: 120,
    },
    {
      id: 51,
      stationId: 2,
      neighborStationId: 1,
      secondsToNeighbor: 120,
    },
    {
      id: 52,
      stationId: 1,
      neighborStationId: NO_NEIGHBOR,
      secondsToNeighbor: -1,
    },
  ].map(s => new Segment(s)),
});
