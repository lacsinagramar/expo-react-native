import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GiftedChat } from 'react-native-gifted-chat'

import useTrainerChat from './hooks'

const TrainerChatScreen = ({ navigation, session }) => {
  navigation.setOptions({
    title: session.name
  })
  session.roomId = 'HwN11bjlBt79GVU4FRqs'
  const {
    currUser,
    handleMessageSend,
    messages
  } = useTrainerChat(session)

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => handleMessageSend(messages)}
      scrollToBottom
      user={currUser}
    />
  )
}

const mapStateToProps = ({ auth }) => ({
  session: auth.session
})

const mapDispatchToProps = () => ({})

TrainerChatScreen.propTypes = {
  session: PropTypes.object,
  navigation: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerChatScreen)
