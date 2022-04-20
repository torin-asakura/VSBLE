import { useState } from 'react'
import { useLayer } from 'react-laag'

const useTooltip = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const close = () => setOpen(false)

  const { layerProps, triggerProps, renderLayer } = useLayer({
    isOpen,
    placement: 'bottom-center',

    onOutsideClick: close,
    onDisappear: close,
    triggerOffset: -10,
  })

  const render = (children) => renderLayer(isOpen && children)

  return {
    triggerProps: {
      ...triggerProps,
      onMouseEnter: () => setOpen(true),
      onMouseLeave: () => setOpen(false),
    },
    layerProps: {
      ...layerProps,
      style: {
        ...layerProps.style,
        zIndex: 3000,
      },
    },
    render,
    isOpen,
  }
}

export { useTooltip }
