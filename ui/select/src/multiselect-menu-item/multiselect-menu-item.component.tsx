import styled                       from '@emotion/styled'

import React                        from 'react'
import { FC }                       from 'react'

import { Checkbox }                 from '@ui/checkbox'
import { Layout }                   from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Text }                     from '@ui/text'
import { useHover }                 from '@ui/utils'

import { MultiselectMenuItemProps } from './multiselect-menu-item.interfaces'
import { baseItemStyles }           from './multiselect-menu-item.styles'

const Container = styled.li(baseItemStyles)

const MultiselectMenuItem: FC<MultiselectMenuItemProps> = ({
  children,
  selectedItems,
  addSelectedItem,
  removeSelectedItem,
  ...props
}) => {
  const [hover, hoverProps] = useHover()

  return (
    <Container {...hoverProps} {...props}>
      <Layout flexBasis={16} flexShrink={0} />
      <Column fill>
        <Layout flexBasis={12} flexShrink={0} />
        <Layout fill>
          <Checkbox
            checked={selectedItems.includes(children)}
            onCheck={(newState) => {
              if (newState === true) addSelectedItem(children)
              if (newState === false) removeSelectedItem(children)
            }}
            fill
          >
            <Text fontSize='semiRegular' color={hover ? 'text.purple' : 'text.accent'}>
              {children}
            </Text>
          </Checkbox>
        </Layout>
        <Layout flexBasis={12} flexShrink={0} />
      </Column>
      <Layout flexBasis={16} flexShrink={0} />
    </Container>
  )
}
export { MultiselectMenuItem }
