import React, { useState } from 'react'
import StyledForm from '../../../../components/blocks/StyledForm'
import StyledModal from '../../../../components/blocks/StyledModal'

const Join = ({ joinChannel, joinModalOpen, open }) => {
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
        <StyledForm>
          <StyledForm.Label>
            Channel name:
            <StyledForm.Input
              onChange={handleChange}
              value={name}
              placeholder="Channel name"
            />
          </StyledForm.Label>
        </StyledForm>
        <StyledModal.Button
          backgroundColor="lightgreen"
          bottom="-60px"
          type="submit"
          onClick={handleSubmit}
        >
          submit
        </StyledModal.Button>
        <StyledModal.Button bottom="-60px" onClick={closeModal}>
          close
        </StyledModal.Button>
      </StyledModal.PopUp>
    </StyledModal>
  )
}

export default Join
