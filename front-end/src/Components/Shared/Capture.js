export const trashCansData = [  {    id: 1,    name: 'HAAV Sample Can 1',    status: 'safe',    lastUpdated: '2023-04-17 10:30am',    history: [      { timestamp: '2023-04-17 10:30am', status: 'safe' },      { timestamp: '2023-04-17 10:15am', status: 'warning' },      { timestamp: '2023-04-17 10:00am', status: 'danger' },    ],
  },
  {
    id: 2,
    name: 'Trash Can Demo #2',
    status: 'danger',
    lastUpdated: '2023-04-17 10:25am',
    history: [
      { timestamp: '2023-04-17 10:25am', status: 'danger' },
      { timestamp: '2023-04-17 10:10am', status: 'warning' },
      { timestamp: '2023-04-17 9:55am', status: 'safe' },
    ],
  },
  {
    id: 3,
    name: 'Raspberry pi can demo #3',
    status: 'safe',
    lastUpdated: '2023-04-17 10:20am',
    history: [
      { timestamp: '2023-04-17 10:20am', status: 'safe' },
      { timestamp: '2023-04-17 10:05am', status: 'safe' },
      { timestamp: '2023-04-17 9:50am', status: 'warning' },
    ],
  },
  {
    id: 4,
    name: 'Vrushs living room can',
    status: 'warning',
    lastUpdated: '2023-04-17 10:15am',
    history: [
      { timestamp: '2023-04-17 10:15am', status: 'warning' },
      { timestamp: '2023-04-17 10:00am', status: 'safe' },
      { timestamp: '2023-04-17 9:45am', status: 'safe' },
    ],
  },
  {
    id: 5,
    name: 'Garage Room Can',
    status: 'safe',
    lastUpdated: '2023-04-17 10:10am',
    history: [
      { timestamp: '2023-04-17 10:10am', status: 'safe' },
      { timestamp: '2023-04-17 9:55am', status: 'safe' },
      { timestamp: '2023-04-17 9:40am', status: 'safe' },
    ],
  },
];
export default trashCansData;
