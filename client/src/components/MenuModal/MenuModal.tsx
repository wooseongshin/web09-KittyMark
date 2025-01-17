import React, { useRef, useEffect } from 'react';
// style
import MenuModalContainer from './MenuModalStyles';

interface MenuModalProps {
  top: number;
  left: number;
  onClickCancel: () => void;
  onClickModify: () => void;
  onClickDelete: () => void;
}

const MenuModal = ({
  top,
  left,
  onClickCancel,
  onClickModify,
  onClickDelete,
}: MenuModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutOfModal = (event: MouseEvent) => {
      event.stopPropagation();
      if (
        event.currentTarget &&
        modalRef.current &&
        !modalRef.current?.contains(event.target as Node)
      )
        onClickCancel();
    };
    document.addEventListener('mousedown', clickOutOfModal);
    return () => {
      document.removeEventListener('mousedown', clickOutOfModal);
    };
  });

  return (
    <MenuModalContainer top={top} left={left} ref={modalRef}>
      <button type="button" onClick={onClickModify}>
        수정하기
      </button>
      <button type="button" onClick={onClickDelete}>
        삭제하기
      </button>
      <button type="button" onClick={onClickCancel}>
        취소
      </button>
    </MenuModalContainer>
  );
};
export default MenuModal;
