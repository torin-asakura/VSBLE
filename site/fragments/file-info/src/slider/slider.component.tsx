import React                  from 'react'
import { FC }                 from 'react'
import { useState }           from 'react'

import { Button }             from '@ui/button'
import { ArrowLeftLongIcon }  from '@ui/icons'
import { ArrowRightLongIcon } from '@ui/icons'
import { Box }                from '@ui/layout'
import { Row }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Column }             from '@ui/layout'
import { useHover }           from '@ui/utils'

const Slider: FC = ({ children }) => {
  const [arrowLeftHover, setArrowLeftHover] = useHover()
  const [arrowRightHover, setArrowRightHover] = useHover()

  const [active, setActive] = useState<number>(0)
console.log(active)
  const handleLeftArrow = () => {
    if (Array.isArray(children)) {
      if (active === 0) {
        setActive(children.length - 1)
      }

      setActive(Math.max(active - 1, 0))
    }
  }

  const handleRightArrow = () => {
    if (Array.isArray(children)) {
      if (active === children.length - 1) {
        setActive(0)
      }

      setActive(Math.min(active + 1, children.length - 1))
    }
  }

  const slide = Array.isArray(children) ? children[active] : children

  return (
    <Layout justifyContent='center' width={['100%', '100%', 928]}>
      <Box>
        <Layout>
          <Button size='ghost' variant='ghost' onClick={handleLeftArrow}>
            <Box
              width={40}
              height={40}
              backgroundColor='background.beige'
              justifyContent='center'
              alignItems='center'
              borderRadius='full'
              {...setArrowLeftHover}
            >
              <ArrowLeftLongIcon color={arrowLeftHover ? 'purple' : 'black'} />
            </Box>
          </Button>
        </Layout>
        <Layout flexShrink={0} flexBasis={8} />
        <Row justifyContent='center'>
          <Box
            width={['100%', '100%', 928]}
            height={['100%', '100%', 648]}
            justifyContent='center'
            alignItems='center'
            overflow='hidden'
          >
            <Column justifyContent='center'>
              <Box width='100%' justifyContent='center'>
                {slide}
              </Box>
            </Column>
          </Box>
        </Row>
        <Layout flexShrink={0} flexBasis={8} />
        <Layout>
          <Button size='ghost' variant='ghost' onClick={handleRightArrow}>
            <Box
              width={40}
              height={40}
              backgroundColor='background.beige'
              justifyContent='center'
              alignItems='center'
              borderRadius='full'
              {...setArrowRightHover}
            >
              <ArrowRightLongIcon color={arrowRightHover ? 'purple' : 'black'} />
            </Box>
          </Button>
        </Layout>
      </Box>
    </Layout>
  )
}

export { Slider }
