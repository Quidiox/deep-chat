import React from 'react'
import { format, parseISO } from 'date-fns'
import {
  List,
  InfiniteLoader,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized'
import StyledMessageList from '../../../../components/blocks/StyledMessageList'

const MessageList = React.memo(({ messages }) => {
  const renderRow = ({ index, key, style }) => (
    <StyledMessageList.LI key={key} style={style}>
      <StyledMessageList.P>
        {format(parseISO(messages[index].created), 'kk:mm:ss dd/MM')} &lt;
        {messages[index].author.name}
        &gt; {messages[index].text}
      </StyledMessageList.P>
    </StyledMessageList.LI>
  )
  return (
    <StyledMessageList>
      <List
        width={600}
        height={500}
        rowHeight={14}
        rowCount={messages.length}
        rowRenderer={renderRow}
      />
    </StyledMessageList>
  )
})

export default MessageList
