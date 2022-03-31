const firstNames = ['Jane', 'Roy', 'John', 'Vincent', 'Bill', 'Frank', 'Ray', 'Grayson']
const secondNames = ['Frost', 'Walker', 'Locke', 'Vega', 'Smoke', 'Malcov', 'Shoosmith', 'Hunt']
const locations = ['New York, USA', 'Los Angeles, USA', 'Island, Somewhere', 'Moscow, Russia', 'Sana, Yemen', 'Yekaterinburg, Russia', 'Novosibirsk, Russia', 'Chicago, USA']
const description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
const role = 'Photographer'

const useMockedCreators = () => ({
  creators: [...Array(8)].map((value, index) => ({
    firstName: firstNames[index],
    secondName: secondNames[index],
    location: locations[index],
    role,
    description
  }))
})

export { useMockedCreators }
