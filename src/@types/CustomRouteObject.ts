// src/types/CustomRouteObject.ts
import type { RouteObject } from 'react-router-dom'

export type CustomRouteObject = RouteObject & {
  handle?: {
    title?: string
  }
  children?: CustomRouteObject[]
}
