import React, { useState } from 'react'
import { connect } from 'react-redux'
import StyledColumn from '../../../../components/blocks/StyledColumn'
import StyledModal from '../../../../components/blocks/StyledModal'
import H1 from '../../../../components/elements/H1'
import P from '../../../../components/elements/P'
import Button from '../../../../components/elements/Button'
import { requestDeleteUser } from '../../../../reducers/userReducer'

const Delete = ({ user, requestDeleteUser }) => {
  const [open, setOpen] = useState(false)
  const remove = () => {
    setOpen(false)
    requestDeleteUser(user.id)
  }
  const handleModal = () => {
    setOpen(!open)
  }
  return (
    <>
      <StyledColumn>
        <H1>Delete user</H1>
        <P>
          Deleting your user account is permanent. Messages you have written
          won't be deleted.
        </P>
        <Button onClick={handleModal}>Delete user account</Button>
      </StyledColumn>
      <StyledModal open={open}>
        <StyledModal.PopUp>
          <H1>Delete user account confirmation</H1>
          <StyledModal.P>
            To permanently delete your user account press the delete button.
          </StyledModal.P>
          <StyledModal.Button onClick={remove} backgroundColor="red">
            Delete
          </StyledModal.Button>
          <StyledModal.Button onClick={handleModal}>Close</StyledModal.Button>
        </StyledModal.PopUp>
      </StyledModal>
    </>
  )
}

const mapStateToProps = state => ({ user: state.user })
const mapDispatchToProps = { requestDeleteUser }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Delete)
