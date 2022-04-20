import { styleFn }                        from 'styled-system'

import { createAttachmentBaseStyles }     from '@atls-ui-parts/input'
import { createAttachmentPositionStyles } from '@atls-ui-parts/input'
import { createAddonPositionStyles }      from '@atls-ui-parts/input'
import { createAddonsContainerStyles }    from '@atls-ui-parts/input'
import { createShapeStyles }              from '@atls-ui-parts/input'

export const baseStyles = createAttachmentBaseStyles()

export const positionStyles = createAttachmentPositionStyles(12, 6)

export const addonPositionStyles = createAddonPositionStyles()
export const addonContainerStyles = createAddonsContainerStyles
export const shapeStyles = createShapeStyles

export const cancelButtonStyles = (): styleFn => () => ({
  'input[type="search"]::-webkit-search-cancel-button': {
    '-webkit-appearance': 'none',
  }
})
