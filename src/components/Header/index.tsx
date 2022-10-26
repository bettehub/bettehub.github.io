import React, { memo } from 'react'
import { StyledHeader } from './Styled'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const Header = ({ children, collapsed, onClick }: HeaderProps) => {
  return (
    <StyledHeader>
      {collapsed ? (
        <MenuUnfoldOutlined onClick={onClick} />
      ) : (
        <MenuFoldOutlined onClick={onClick} />
      )}
      <h1>{children}</h1>
    </StyledHeader>
  )
}

type HeaderProps = {
  children: string
  collapsed: boolean
  onClick: () => void
}

export default memo(Header)
