import React, { useState } from 'react'
import StyledRow from '../../../components/blocks/StyledRow'

const Tabs = ({ tabs }) => {
  const [selected, setSelected] = useState(tabs[0].id)
  const changeSelected = id => () => {
    setSelected(id)
  }

  return (
    <StyledRow>
      {tabs.map(tab => {
        return (
          <StyledRow.LI
            key={tab.id}
            onClick={changeSelected(tab.id)}
            selected={tab.id === selected ? true : false}
          >
            <StyledRow.A>{tab.title}</StyledRow.A>
          </StyledRow.LI>
        )
      })}
    </StyledRow>
  )
}

export default Tabs
