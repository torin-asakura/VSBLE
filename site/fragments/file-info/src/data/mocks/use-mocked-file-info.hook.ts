import * as imageSrcs from './images'

const images = [...Object.values(imageSrcs)]

const useMockedFileInfo = () => ({
  images: [...Array(2)].map((value, index) => ({
    image: images[index]
  }))
})

export { useMockedFileInfo }
