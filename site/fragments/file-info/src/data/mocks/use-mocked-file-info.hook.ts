import * as imageSrcs from './images'

const images = [...Object.values(imageSrcs)]

const useMockedFileInfo = () => ({
  images: [...Array(1)].map((value, index) => ({
    image: images[index]
  }))
})

export { useMockedFileInfo }
