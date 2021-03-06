import { useRef }    from 'react'
import { useEffect } from 'react'

import { doNothing } from '@shared/utils'

const useIntersectionObserver = (
  onIntersection: (id: string) => void = doNothing,
  stepOrder: Array<string | any>
) => {
  const observers: Map<string, any> = new Map()

  const getObserverOptions = (id: string): { ref: any } => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef(null)

    observers.set(id, ref)

    return {
      ref,
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries) {
          let latestEntry: any

          entries.forEach(({ target }) => {
            if (
              !latestEntry ||
              stepOrder.indexOf((target as any).observerId) >
                stepOrder.indexOf(latestEntry.observerId)
            ) {
              latestEntry = (target as any).observerId
              onIntersection(latestEntry)
            }
          })
        }
      },
      { threshold: 1 }
    )

    for (const key of observers.keys() as any) {
      const observerRef = observers.get(key)

      observerRef.current.observerId = key

      observer.observe(observerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    getObserverOptions,
  }
}

export { useIntersectionObserver }
