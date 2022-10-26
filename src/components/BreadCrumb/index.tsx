import React, { memo } from 'react'
import { StyledBreadcrumb } from './Styled'

const Breadcrumb = ({ breadcrumb }: BreadcrumbProps) => {
  return (
    <StyledBreadcrumb>
      {breadcrumb?.map((item, idx) => (
        <StyledBreadcrumb.Item key={idx}>{item}</StyledBreadcrumb.Item>
      ))}
    </StyledBreadcrumb>
  )
}

type BreadcrumbProps = {
  breadcrumb: string[]
}

export default memo(Breadcrumb)
