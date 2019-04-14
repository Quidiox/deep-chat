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
        <StyledForm>
          <StyledForm.Input onChange={handleChange} value={name} />
          <StyledForm.Button type="submit" onClick={handleSubmit}>
            submit
          </StyledForm.Button>
          <StyledForm.Button onClick={closeModal}>close</StyledForm.Button>
        </StyledForm>
      </StyledModal.PopUp>
    </StyledModal>
  )
}

export default Join
