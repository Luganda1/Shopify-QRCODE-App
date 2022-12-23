import React from 'react'
import {
  Card,
  SkeletonBodyText,
} from "@shopify/polaris";
import { Loading } from '@shopify/app-bridge-react'

export function LoadingMarkup() {
  return (
    <Card sectioned>
    <Loading />
    <SkeletonBodyText />
  </Card>
  )
}
