import React, { useEffect, useRef } from 'react'
import { format, parseISO } from 'date-fns'
import {
  // InfiniteLoader,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized'
import StyledMessageList from '../../../../components/blocks/StyledMessageList'

const MessageList = React.memo(({ messages }) => {
  const listRef = useRef(null)
  useEffect(
    () => {
      async function scrollToBottom() {
        if (messages.length > 0) await listRef.current.measureAllRows()
        await listRef.current.scrollToRow(messages.length - 1)
      }
      scrollToBottom()
    },
    [messages]
  )
  const cache = new CellMeasurerCache({
    minHeight: 17,
    defaultHeight: 17,
    fixedWidth: true
  })
  const renderRow = ({ index, key, style, parent }) => {
    return (
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <StyledMessageList.LI key={key} style={style}>
          {format(parseISO(messages[index].createdAt), 'kk:mm:ss dd/MM')} &lt;
          {messages[index].author.nickname}
          &gt; {messages[index].text}
        </StyledMessageList.LI>
      </CellMeasurer>
    )
  }
  return (
    <>
      <AutoSizer>
        {({ width, height }) => (
          <StyledMessageList
            ref={listRef}
            estimatedRowSize={17}
            scrollToIndex={messages.length - 1}
            width={width}
            height={height}
            deferredMeasurementCache={cache}
            rowHeight={cache.rowHeight}
            rowWidth={cache.rowWidth}
            rowRenderer={renderRow}
            rowCount={messages.length}
            overscanRowCount={3}
          />
        )}
      </AutoSizer>
    </>
  )
})

export default MessageList
