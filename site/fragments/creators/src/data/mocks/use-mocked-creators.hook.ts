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
const description = 'Conceptual & Advertising | Food & Still Life'
const role = 'Photographer'
const images = [...Object.values(imageSrcs)]

const useMockedCreators = () => ({
  creators: [...Array(8)].map((value, index) => ({
    firstName: firstNames[index],
    secondName: secondNames[index],
    location: locations[index],
    role,
    description,
    image: images[index],
  })),
})

export { useMockedCreators }
