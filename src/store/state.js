export const state = {
  all: [],
  selections: {
    accessorySelected: { name: '', value: '' },
    categorySelected: { name: '', value: '' },
    clubSelected: { name: '', value: '' },
    garmentSelected: { name: '', value: '' },
    seasonSelected: { name: '', value: '' },
    yearSelected: { name: '', value: '' }
  },
  categories: [
    { name: 'Mens', value: 'M' },
    { name: 'Ladies', value: 'L' },
    { name: 'Kids', value: 'K' },
    { name: 'Baby', value: 'B' }
  ],
  accessories: [
    { name: 'Bag', value: '1' },
    { name: 'Bedding', value: '2' },
    { name: 'Car Merchandise', value: '3' },
    { name: 'Flask', value: '4' },
    { name: 'Football', value: '5' },
    { name: 'Footwear', value: '6' },
    { name: 'Goal Keeper Gloves', value: '7' },
    { name: 'Hat', value: '8' },
    { name: 'Key Ring', value: '9' },
    { name: 'Miscellaneous Accessories', value: '10' },
    { name: 'Mug', value: '11' },
    { name: 'Pin Badge', value: '12' },
    { name: 'Scarf', value: '13' },
    { name: 'Shin Guards / Pads', value: '14' },
    { name: 'Stationary', value: '15' },
    { name: 'Tie', value: '16' },
    { name: 'Towel', value: '17' },
    { name: 'Wallet', value: '18' },
    { name: 'Water bottle', value: '19' }
  ],
  garments: [
    { name: 'T-Shirt', value: '1' },
    { name: 'Polo', value: '2' },
    { name: 'Sweatshirt', value: '3' },
    { name: 'Hoodie', value: '4' },
    { name: 'Track Jacket', value: '5' },
    { name: 'Shorts', value: '6' },
    { name: 'Leggings', value: '7' },
    { name: 'Jog pants', value: '8' },
    { name: 'Shirt', value: '9' },
    { name: 'Knitwear', value: '10' },
    { name: 'Pyjamas', value: '11' },
    { name: 'Retro Shirt', value: '12' }
  ],
  clubs: [
    { name: 'Atlético Madrid', value: 'ADM' },
    { name: 'Blackburn Rovers F.C.', value: 'BBR' },
    { name: 'Brighton and Hove Albion', value: 'BHA' },
    { name: 'Burnley F.C.', value: 'BURN' },
    { name: 'Crystal Palace F.C.', value: 'CPFC' },
    { name: 'Exeter City F.C.', value: 'EXFC' },
    { name: 'Ipswich Town F.C.', value: 'IPS' },
    { name: 'Leeds United', value: 'LUFC' },
    { name: 'Leicester City F.C.', value: 'LCFC' },
    { name: 'Luton Town F.C.', value: 'LUTFC' },
    { name: 'Malaga C.F.', value: 'MAL' },
    { name: 'Middlesbrough United', value: 'MID' },
    { name: 'Millwall Football Club', value: 'MILL' },
    { name: 'Nottingham Forest F.C.', value: 'NOTF' },
    { name: 'Portsmouth Argyle F.C.', value: 'PAFC' },
    { name: 'Queens Park Rangers', value: 'QPR' },
    { name: 'Real Madrid C.F.', value: 'RM' },
    { name: 'Southampton F.C.', value: 'STH' },
    { name: 'Sunderland A.F.C.', value: 'SUN' },
    { name: 'Tottenham Hotspur', value: 'THFC' },
    { name: 'West Ham United', value: 'WHU' }
  ],
  seasons: [
    { name: 'Spring/Summer', value: 'SS' },
    { name: 'Autumn/Winter', value: 'AW' }
  ],
  years: [
    { name: '2021', value: '21' },
    { name: '2022', value: '22' },
    { name: '2023', value: '23' },
    { name: '2024', value: '24' }
  ]
}
