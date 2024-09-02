import { css } from '@emotion/react';
import delItems from '../images/trash.png';
import List from './List';
function ListSection({
  title,

  onToggleSel,

  onDelAll,
  onSelAll,
}) {
  return (
    <span style={{ fontSize: '20px', fontWeight: '900' }}>
      {title}
      <img
        src={isSelecting ? checkbox2 : selItem}
        css={{
          margin: '10px 10px 0 0',
          width: '17px',
          height: '17px',
          cursor: 'pointer',
          float: 'right',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.15)',
          },
        }}
        onClick={onToggleSel}
      />
        <span>
          <img
            src={delItems}
            css={{
              margin: '10px 10px 0 0',
              width: '20px',
              height: '20px',
              cursor: 'pointer',
              float: 'right',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.15)',
              },
            }}
            onClick={onDelAll}
          />
          <Button
            isActive={selectedItems.length === activeItems.length} // 조건부 스타일 적용
            onClick={onSelAll}
          >
            전체 선택
          </Button>
        </span>
      )
      <List />
    </span>
  );
}
export default ListSection;
