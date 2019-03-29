import React, { useState } from 'react'
import { connect } from 'react-redux'
import StyledColumn from '../../../../components/blocks/StyledColumn'
import StyledModal from '../../../../components/blocks/StyledModal'
import H1 from '../../../../components/elements/H1'
import P from '../../../../components/elements/P'
import { requestDeleteUser } from '../../../../reducers/userReducer'

const Delete = ({ user, requestDeleteUser }) => {
  const [open, setOpen] = useState(true)
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
          Deleting your user account is permanent and will also remove <br />{' '}
          all channels you have created. Your messages to other channels
          <br /> will stay.
          <button onClick={handleModal}>Delete user account</button>
        </P>
      </StyledColumn>
      <StyledModal open={open}>
        <StyledModal.PopUp>
          <H1>I am modal!</H1>
          <button onClick={handleModal}>close</button>
          <button onClick={remove}>delete user</button>
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
