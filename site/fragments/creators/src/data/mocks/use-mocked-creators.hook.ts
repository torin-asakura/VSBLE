import * as imageSrcs from './images'

const firstNames = ['Jane', 'Roy', 'John', 'Vincent', 'Bill', 'Frank', 'Ray', 'Grayson']
const secondNames = ['Frost', 'Walker', 'Locke', 'Vega', 'Smoke', 'Malcov', 'Shoosmith', 'Hunt']
const locations = [
  'New York, USA',
  'Los Angeles, USA',
  'Island, Somewhere',
  'Moscow, Russia',
  'Sana, Yemen',
  'Yekaterinburg, Russia',
  'Novosibirsk, Russia',
  'Chicago, USA',
]
const followers = [100, 200, 300, 400, 500, 600, 700, 800]
const description = 'Conceptual & Advertising | Food & Still Life'
const roles = [
  'Photographer',
  'Model',
  'MakeUp Artist',
  'Stylist',
  'Illustrator',
  'Photographer',
  'Model',
  'MakeUp Artist',
]
const images = [...Object.values(imageSrcs)]

const useMockedCreators = () => ({
  creators: [...Array(8)].map((value, index) => ({
    firstName: firstNames[index],
    secondName: secondNames[index],
    location: locations[index],
    role: roles[index],
    followers: followers[index],
    description,
    image: images[index],
  })),
})

export { useMockedCreators }
