import { useSelect }                       from '@atls-ui-parts/select'

import React                               from 'react'
import { FC }                              from 'react'
import { FormattedMessage }                from 'react-intl'
import { useMultipleSelection }            from 'downshift'
import { useSelect as useDownshiftSelect } from 'downshift'

import { Button }                          from '@ui/button'
import { Condition }                       from '@ui/condition'
import { ArrowDownIcon }                   from '@ui/icons'
import { Layout }                          from '@ui/layout'
import { Row }                             from '@ui/layout'
import { Column }                          from '@ui/layout'
import { Text }                            from '@ui/text'

import { ArrowContainer }                  from './arrow-container'
import { Menu }                            from './menu'
import { MenuItem }                        from './menu-item'
import { MultiselectMenuItem }             from './multiselect-menu-item'
import { SelectProps }                     from './select.interface'

const Select: FC<SelectProps> = ({
  items,
  multiselect,
  multiselectDivider,
  requestAddition,
  label,
  value,
  onChange,
  placeholder,
  disabled,
}) => {
  const { addSelectedItem, removeSelectedItem, selectedItems } = useMultipleSelection()

  const {
    isOpen,
    buttonProps,
    menuProps,
    getMenuItemProps,
    renderMenu,
    selectedItem,
    highlightedIndex,
  } = useSelect({
    items,
    onChange,
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges
      if (multiselect && type === useDownshiftSelect.stateChangeTypes.ItemClick) {
        return {
          ...changes,
          isOpen: true,
        }
      }

      return changes
    },
    onStateChange: ({ type, selectedItem: selected }) => {
      if (multiselect && type === useDownshiftSelect.stateChangeTypes.ItemClick) {
        if (selected) {
          addSelectedItem(selected)
        }
      }
    },
  })

  return (
    <Row>
      <Column fill>
        <Condition match={label !== ''}>
          <Text
            color={disabled ? 'text.lightGray' : 'text.semiBlack'}
            fontWeight='semiBold'
            fontSize='semiRegular'
          >
            {label}
          </Text>
          <Layout flexShrink={0} flexBasis={8} />
        </Condition>
        <Button
          variant='quaternary'
          isSelected={!!selectedItem}
          disabled={disabled}
          {...buttonProps}
          style={{ backgroundColor: isOpen ? 'white' : '' }}
        >
          <Row>
            <Text fontSize='semiRegular' color={disabled ? 'text.semiGray' : 'text.accent'}>
              {value ||
                selectedItems?.join(multiselectDivider || ', ') ||
                selectedItem ||
                placeholder}
            </Text>
            <Layout flexGrow={1} />
            <ArrowContainer isOpen={isOpen}>
              <ArrowDownIcon width={6.5} height={14} color={isOpen ? 'black' : 'steel'} />
            </ArrowContainer>
          </Row>
        </Button>
        {renderMenu(
          <>
            <Condition match={!multiselect}>
              <Menu {...menuProps}>
                {items.map((item, index) => (
                  <MenuItem
                    {...getMenuItemProps(item, index)}
                    highlighted={index === highlightedIndex}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </Condition>
            <Condition match={!!multiselect}>
              <Menu {...menuProps}>
                {items.map((item, index) => (
                  <MultiselectMenuItem
                    selectedItems={selectedItems}
                    addSelectedItem={addSelectedItem}
                    removeSelectedItem={removeSelectedItem}
                  >
                    {item}
                  </MultiselectMenuItem>
                ))}
                <Condition match={!!requestAddition}>
                  <Layout flexBasis={16} />
                  <Row>
                    <Layout flexBasis={16} flexShrink={0} />
                    <Button variant='secondary' size='small'>
                      <FormattedMessage
                        id='select.request_addition'
                        defaultMessage='Request Addition'
                      />
                    </Button>
                  </Row>
                  <Layout flexBasis={16} />
                </Condition>
              </Menu>
            </Condition>
          </>
        )}
      </Column>
    </Row>
  )
}

export { Select }
