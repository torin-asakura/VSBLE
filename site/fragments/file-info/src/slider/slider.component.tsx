import React                  from 'react'
import { FC }                 from 'react'
import { useState }           from 'react'
import { useEffect }          from 'react'
import { Children }           from 'react'
import { cloneElement }       from 'react'

import { Box }                from '@ui/layout'
import { Row }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Column }             from '@ui/layout'
import { ArrowLeftLongIcon }  from '@ui/icons'
import { ArrowRightLongIcon } from '@ui/icons'

const SLIDE_WIDTH = 868

const Slider: FC = ({ children }) => {
  const [slide, setSlide] = useState<any>([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setSlide(
      Children.map(children, child => {
        // @ts-ignore
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${SLIDE_WIDTH}px`,
            maxWidth: `${SLIDE_WIDTH}px`
          }
        })
      })
    )
  }, [])

  const handleLeftArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + SLIDE_WIDTH

      return Math.min(newOffset, 0)
    })
  }

  const handleRightArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - SLIDE_WIDTH
      const maxOffset = -(SLIDE_WIDTH * (slide.length - 1))

      return Math.max(newOffset, maxOffset)
    })
  }

  return (
    <Layout justifyContent='center' width={['100%', '100%', 928]}>
      <Box>
        <Layout justifyContent='flex-start' alignItems='center'>
          <Box
            width={40}
            height={40}
            backgroundColor='background.beige'
            justifyContent='center'
            alignItems='center'
            borderRadius='full'
            // @ts-ignore
            cursor='pointer'
            onClick={handleLeftArrow}
          >
            <ArrowLeftLongIcon/>
          </Box>
        </Layout>
        <Layout flexShrink={0} flexBasis={8}/>
        <Row justifyContent='center'>
          <Box
            width={['100%', '100%', 928]}
            height={['100%', '100%', 648]}
            justifyContent='center'
            alignItems='center'
            overflow='hidden'
          >
            <Column justifyContent='center'>
              <Box width='100%' backgroundColor='background.gray' justifyContent='center'
                   style={{ transform: `translateX(${offset}px)` }}>
                {children}
              </Box>
            </Column>
          </Box>
        </Row>
        <Layout flexShrink={0} flexBasis={8}/>
        <Layout justifyContent='flex-end' alignItems='center'>
          <Box
            width={40}
            height={40}
            backgroundColor='background.beige'
            justifyContent='center'
            alignItems='center'
            borderRadius='full'
            // @ts-ignore
            cursor='pointer'
            onClick={handleRightArrow}
          >
            <ArrowRightLongIcon/>
          </Box>
        </Layout>
      </Box>
    </Layout>
  )
}

export { Slider }
