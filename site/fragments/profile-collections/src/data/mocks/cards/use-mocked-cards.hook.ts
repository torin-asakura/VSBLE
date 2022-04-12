import * as imageSrcs from '../images'

const images = [...Object.values(imageSrcs)]

const useMockedCards = () => ({
  cards: [...Array(4)].map((value, index) => ({
    image: images[index]
    }))
})

export { useMockedCards }

