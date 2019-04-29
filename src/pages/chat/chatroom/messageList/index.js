import React from 'react'
import { format, parseISO } from 'date-fns'
import {
  InfiniteLoader,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized'
import StyledMessageList from '../../../../components/blocks/StyledMessageList'

const MessageList = React.memo(({ messages }) => {
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
