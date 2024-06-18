import { useDisableScrollBody } from 'hooks/useDisableScroll';
import React, { FC, ReactNode } from 'react';

interface ApartamentListWrapperProps {
  className?: string;
  children: ReactNode;
  onClose: () => void;
  isVisible: boolean;
}

export const ApartamentListWrapper: FC<ApartamentListWrapperProps> = ({ className, isVisible, children }) => {
  useDisableScrollBody(isVisible);

  // if (isWidthSm) {
  // return (
  //   <BaseModal className={className} title={title} onClose={onClose} isVisible={isVisible} isBottomMobile>
  //     <Content>{children}</Content>
  //   </BaseModal>
  // );
  // }

  return <div className={className}>{children}</div>;
};

// const Content = styled.div`
//   @media (max-width: ${BreakpointsEnum.sm}px) {
//     overflow-y: auto;
//     width: 100%;
//     height: calc(100vh - 100px);
//     height: calc(var(--100vh) - 100px);
//   }

//   @media (max-width: ${BreakpointsEnum.s}px) {
//     height: calc(100vh / 1.3 - 100px);
//     height: calc(var(--100vh) / 1.3 - 100px);
//   }
// `;
