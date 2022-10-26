import React, { memo, ReactNode } from 'react'
import { StyledResisterButton } from './Styled'

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <StyledResisterButton type={type} onClick={onClick}>
      {children}
    </StyledResisterButton>
  )
}

type ButtonProps = {
  children: ReactNode
  type: string
  onClick: () => void
}

export default memo(Button)
