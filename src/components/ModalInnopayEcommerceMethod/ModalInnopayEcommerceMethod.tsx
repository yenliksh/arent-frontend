import { FC } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';

type ModalInnopayProps = {
  iframeSrc?: string;
};

export const ModalInnopayEcommerceMethod: FC<ModalInnopayProps> = ({ iframeSrc }) => {
  // TODO: здесь должна быть ошибка, потому что ситуация когда есть несколько открытых временных контрактов, но переменную мы изменяем только одну и по её изменению отображаем успех или фейл, но в других открытых модалках не должно быть апдейта

  return <Root src={iframeSrc} />;
};

const Root = styled.iframe`
  width: 100%;
  height: 75vh;
  @media (min-width: ${BreakpointsEnum.sm}px) {
    height: 563px;
    max-height: 563px;
  }
`;
