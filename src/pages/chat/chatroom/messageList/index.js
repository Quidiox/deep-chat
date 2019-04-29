import React, { useRef, useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import {
  InfiniteLoader,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized'
import StyledMessageList from '../../../../components/blocks/StyledMessageList'

const MessageList = React.memo(({ messages }) => {
  const listRef = useRef(null)
  useEffect(
    () => {
      console.log(listRef)
      listRef.current.scrollToRow(messages.length)
    },
    [messages.length]
  )
  const cache = new CellMeasurerCache({
    minHeight: '17',
    defaultHeight: '30',
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
          {format(parseISO(messages[index].created), 'kk:mm:ss dd/MM')} &lt;
          {messages[index].author.name}
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
