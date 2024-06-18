import styled, { css } from 'styled-components';

// const ActiveTabCSS = css`
//   background-color: ${({ theme: { colors } }) => colors.greyScale[100]};
//   color: ${({ theme: { colors } }) => colors.greyScale[0]};
//   border: none;
//   &:hover {
//     background-color: ${({ theme: { colors } }) => colors.greyScale[90]};
//   }
// `;

const InactiveTabCSS = css`
  background-color: ${({ theme: { colors } }) => colors.greyScale[0]};
  color: ${({ theme: { colors } }) => colors.greyScale[100]};
  border-right: ${({ theme: { colors } }) => `1px solid ${colors.greyScale[30]}`};
  padding: 24px;
`;

const getStylesTab = () => {
  // if (isActive) {
  // return ActiveTabCSS;
  // }
  return InactiveTabCSS;
};

export const Tab = styled.button<{ $isSmall: boolean }>`
  ${() => getStylesTab()}

  ${({ $isSmall }) => ($isSmall ? 'padding: 0px 24px;' : 'padding: 16px 25px;')}

  :first-child {
    border-radius: 50px 0 0 50px;
  }

  :last-child {
    border: none;
  }

  ${({ theme: { typography } }) => typography.body_24_14_medium}
`;
