import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';

export const StyledToastContainer = styled(ToastContainer)`
  max-width: 321px;
  width: 100%;
  margin-top: 94px;

  @media (max-width: ${BreakpointsEnum.md}px) {
    margin-top: 83px;
  }
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-top: 68px;
  }
  @media (max-width: ${BreakpointsEnum.s}px) {
    margin-top: 65px;
  }
  @media (max-width: 480px) {
    max-width: 100%;
    margin-top: 94px;
  }

  .Toastify__toast {
    padding: 0;
    background: transparent;
    box-shadow: none;
    border-radius: 12px;
    @media (max-width: ${BreakpointsEnum.s}px) {
      padding: 0 16px;
    }

    .Toastify__toast-body {
      padding: 0;
    }
  }
`;
