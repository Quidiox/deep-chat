import React, { useState } from 'react'
import { connect } from 'react-redux'
import StyledForm from '../../../../components/blocks/StyledForm'
import StyledModal from '../../../../components/blocks/StyledModal'
import { requestUserJoinChannel } from '../../../../reducers/channelReducer'

const Join = ({ requestUserJoinChannel, joinModalOpen, open }) => {
  const [name, setName] = useState('')
  const handleChange = e => {
    setName(e.target.value)
  }
  const handleSubmit = async e => {
    e.preventDefault()
    await requestUserJoinChannel(name)
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

const mapDispatchToProps = { requestUserJoinChannel }

export default connect(
  null,
  mapDispatchToProps
)(Join)
