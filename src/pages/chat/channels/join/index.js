import React, { useState } from 'react'
import StyledModal from '../../../../components/blocks/StyledModal'

const Join = React.memo(({ joinChannel, joinModalOpen, open }) => {
  const [name, setName] = useState('')
  const handleChange = e => {
    setName(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    joinChannel(name)
    setName('')
    joinModalOpen()
  }
  const closeModal = e => {
    e.preventDefault()
    joinModalOpen()
  }
  return (
    <StyledModal open={open}>
      <StyledModal.PopUp>
        <StyledModal.H2>Join channel</StyledModal.H2>
        <StyledModal.Form>
          <StyledModal.Label>
            Channel name:
            <StyledModal.Input
              onChange={handleChange}
              value={name}
              placeholder="Channel name"
            />
          </StyledModal.Label>
          <StyledModal.Button
            backgroundColor="lightgreen"
            type="submit"
            onClick={handleSubmit}
          >
            Join
          </StyledModal.Button>
          <StyledModal.Button type="button" onClick={closeModal}>
            Close
          </StyledModal.Button>
        </StyledModal.Form>
      </StyledModal.PopUp>
    </StyledModal>
  )
})

export default Join
