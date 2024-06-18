import { useTranslation } from 'next-i18next';
import { FC, useCallback } from 'react';
import { DropzoneRootProps, useDropzone } from 'react-dropzone';
import styled, { css } from 'styled-components';
import { BreakpointsEnum } from 'types';
import { v4 as uuid } from 'uuid';

import { AttachmentTypes, FileTypes } from '../../pagesComponents/HouseMedias/types';
import { colors } from '../../styles/themes/default/colors';
import { AppText } from '../AppText';
import { Button } from '../Button';
import { ButtonSize, ButtonVariant } from '../Button/Button';

interface Accept {
  [key: string]: string[];
}

const getColor = (props: DropzoneRootProps) => {
  if (props.isDragAccept) {
    return css`
      border-color: ${colors.greyScale[100]};
      background-color: ${colors.greyScale[10]};
    `;
  }

  return css`
    border-color: ${colors.greyScale[40]};
    background-color: ${colors.greyScale[0]};
  `;
};

type DropzoneTypes = {
  maxFiles?: number;
  maxSize?: number;
  isDisabled?: boolean;
  loading?: boolean;
  className?: string;
  accept?: Accept;
  onChangeLoadedFile?: (file: AttachmentTypes) => void;
  buttonText: string;
  onFilesRead: (files: Array<AttachmentTypes>) => void;
  isPlusIcon?: boolean;
  hasFiles?: boolean;
};

const TEN_MB_IN_BYTE = 10485760;

const Dropzone: FC<DropzoneTypes> = ({
  maxFiles,
  maxSize = TEN_MB_IN_BYTE,
  accept = {},
  buttonText,
  isDisabled,
  onFilesRead,
  className,
  isPlusIcon = false,
}) => {
  const { t } = useTranslation('ui', { keyPrefix: 'dropzone' });

  const validateFileSize = (file: File) => {
    if (file.size > maxSize) {
      return {
        code: 'size-too-big',
        message: `Size is larger than ${maxSize} bytes`,
      };
    }
    return null;
  };

  const onDrop = useCallback((acceptedFiles: FileTypes[]) => {
    const readFiles = acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        file.url = reader.result as string;
      };
      reader.readAsDataURL(file);
      return {
        id: uuid(),
        file,
        isLoading: true,
        isError: false,
      };
    });
    onFilesRead(readFiles);
  }, []);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    maxFiles,
    disabled: isDisabled,
    accept,
    validator: validateFileSize,
  });

  const isShowDefaultButton = !isPlusIcon;

  return (
    <Root {...getRootProps({ isFocused, isDragAccept, isDragReject })} className={className}>
      <input {...getInputProps()} />
      <ActionContainer>
        <StyledButton variant={ButtonVariant.SECONDARY} size={ButtonSize.SMALL} isFullWight text={buttonText} />
        {isShowDefaultButton && <Prompt font="caption_16_12_regular">{t('prompt')}</Prompt>}
      </ActionContainer>
    </Root>
  );
};

const Root = styled.div<{ $isDragActive?: boolean }>`
  ${(props) => getColor(props)}
  min-width: 445px;
  min-height: 225px;
  border-width: 1px;
  border-style: dashed;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${({ theme: { colors } }) => colors.greyScale[100]};
  }

  @media (max-width: ${BreakpointsEnum.s}px) {
    border: none;
    min-height: 100px;
    min-width: 100%;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 280px;
  align-items: center;
  width: 100%;
  @media (max-width: ${BreakpointsEnum.s}px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Prompt = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.greyScale[80]};
`;

const StyledButton = styled(Button)`
  &:focus {
    outline: none;
  }
  @media (max-width: ${BreakpointsEnum.s}px) {
    width: 100%;
    height: 100%;
    padding: 15px 36.5px;
  }
`;

export default Dropzone;
