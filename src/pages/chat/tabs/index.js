import React, { useState } from 'react'
import StyledTabRow from '../../../components/blocks/StyledTabRow'

const Tabs = ({ tabs }) => {
  const [selected, setSelected] = useState(tabs[0].id)
  const changeSelected = id => () => {
    setSelected(id)
  }

  return (
    <StyledTabRow>
      {tabs.map(tab => {
        return (
          <StyledTabRow.LI
            key={tab.id}
            onClick={changeSelected(tab.id)}
            selected={tab.id === selected ? true : false}
          >
            <StyledTabRow.A>{tab.title}</StyledTabRow.A>
          </StyledTabRow.LI>
        )
      })}
    </StyledTabRow>
  )
}

export default Tabs
