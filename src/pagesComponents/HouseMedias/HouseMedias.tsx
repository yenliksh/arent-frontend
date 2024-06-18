import { ApartmentCategory } from '__generated__/types';
import { Accepts } from 'constains/input';
import { Routes } from 'constains/routes';
import { useCreateRentIdentificator } from 'graphql/mutations/Advert/__generated__/createApartmentIdentificator.mutation';
import { useSendToApproveRentAdvert } from 'graphql/mutations/Advert/__generated__/sendToApproveAdvert.mutation';
import { useClientSize } from 'hooks';
import { AdvertLayout } from 'layouts';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { FC, useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { StepProps } from 'types/advert';
import { AppText, Button, Dropzone } from 'ui';
import { getCookie, setCookie } from 'utils';
import { v4 } from 'uuid';

import { useSetRentPhoto } from '../../graphql/mutations/Advert/__generated__/SetHousesMedia.mutation';
import { useGetFifthStep } from '../../graphql/queries/Advert/__generated__/getFifthStep.query';
import { ButtonVariant } from '../../ui/Button/Button';
import { Attachment } from './components';
import { AttachmentTypes } from './types';

const MAX_SIZE = 51;
const MAX_IMAGE_COUNT = 5;

const HouseMedias: FC<StepProps> = ({ step }) => {
  const router = useRouter();
  const [attachments, setAttachments] = useState<Array<AttachmentTypes>>([]);
  const [fetchHousesPhoto] = useSetRentPhoto();
  const { getIsBreakpoint } = useClientSize();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('houseMediasPage', { keyPrefix: 'page' });

  const advertId = getCookie('advertId');

  const { data } = useGetFifthStep({ variables: { input: { id: advertId! } } });
  const [publishAdvert] = useSendToApproveRentAdvert();
  const [addApartmentIdentificator] = useCreateRentIdentificator();
  const photos = data?.rentAd__myRentAd.photos;
  const category = data?.rentAd__myRentAd.apartmentCategory;

  const hasFiles = attachments?.length > 0;

  const isValid = attachments.find((elem) => elem?.isLoading || elem.isError);

  const handleCheckUniqueses = () => {
    const defaultUrls = photos?.map((el) => el.fileKey);
    const actualUrls = attachments.map((el) => el.file.url);
    return JSON.stringify(defaultUrls) === JSON.stringify(actualUrls);
  };

  const setMediasInDraft = () => {
    if (attachments?.length >= 5 && !isValid) {
      setMedias();
    }
  };

  const setMedias = async () => {
    if (!handleCheckUniqueses()) {
      const urls = attachments.map((attachment) => {
        return attachment.signedUrl!;
      });
      await fetchHousesPhoto({
        variables: {
          input: {
            id: advertId!,
            photos: urls,
          },
        },
      });
    }
  };

  const publishAdverAndRedirect = async () => {
    await publishAdvert({
      variables: {
        input: {
          id: advertId!,
        },
      },
    });
    await addApartmentIdentificator({
      variables: {
        input: {
          apartmentId: advertId!,
          titleSeo: data?.rentAd__myRentAd.adDescription?.name!,
        },
      },
    });
    setIsLoading(false);
    setCookie('advertId', '');
    await router.push({
      pathname: Routes.myAds,
      query: {
        advertId,
      },
    });
  };

  const onSubmit = async () => {
    setIsLoading(true);
    await setMedias();
    setIsLoading(false);
    if (
      category === ApartmentCategory.Commercial ||
      category === ApartmentCategory.Area ||
      category === ApartmentCategory.Industrial ||
      category === ApartmentCategory.Otherrealestate
    ) {
      publishAdverAndRedirect();
    } else {
      await router.push(Routes.adDescriptionHouse);
    }
  };

  const handleSetFiles = (newFiles: Array<AttachmentTypes>) => {
    setAttachments((state) => [...state, ...newFiles]);
  };

  const handleDeleteAttachment = (id: string) => {
    const filteredFiles = attachments.filter((attachment) => attachment.id !== id);
    setAttachments(filteredFiles);
  };

  const handleChangesFile = useCallback((newFile: AttachmentTypes) => {
    setAttachments((state) =>
      [...state].map((elem) => {
        if (elem.id === newFile.id) {
          elem = newFile;
        }
        return elem;
      }),
    );
  }, []);

  useEffect(() => {
    const photos = data?.rentAd__myRentAd.photos;
    if (photos) {
      const newFiles = photos?.map((file) => {
        return {
          id: v4(),
          file: {
            url: file.fileKey,
          },
          signedUrl: file.fileKey,
          isLoaded: true,
        };
      });
      setAttachments([...newFiles] as unknown as AttachmentTypes[]);
    }
  }, [data]);

  const isWidthSm = getIsBreakpoint('sm');
  const buttonText = isWidthSm ? t('longMediaChoice') : t('shortMediaChoice');
  const isDisabledSubmitButton = attachments?.length < MAX_IMAGE_COUNT || !!isValid;

  const goBack = () => {
    if (category === ApartmentCategory.Foreign) {
      router.push(Routes.adCreateHouseType);
    } else {
      router.push(Routes.adCreateAddress);
    }
  };

  return (
    <AdvertLayout step={step} onSaveDraft={setMediasInDraft}>
      <Root>
        <Title variant={TextVariants.SECONDARY} font="title_36_26_bold">
          {t('titleText')}
        </Title>
        <SubTitle font="body_24_16_regular" variant={TextVariants.SECONDARY} $hasFiles={hasFiles}>
          {t('subtitleText')}
        </SubTitle>

        <DropzoneContainer>
          <StyledDropzone
            accept={{
              [`${Accepts.image}`]: ['.jpeg', '.png'],
            }}
            maxFiles={MAX_SIZE - attachments.length}
            isDisabled={attachments.length === MAX_SIZE}
            $hasFiles={hasFiles}
            hasFiles={hasFiles}
            buttonText={buttonText}
            onFilesRead={handleSetFiles}
            isPlusIcon={isWidthSm}
          />
        </DropzoneContainer>

        {hasFiles && (
          <AttachmentsContainer>
            {attachments.map((attachment) => (
              <Attachment
                key={`${attachment.id}`}
                file={attachment.file}
                url={attachment.file.url!}
                onSetFiles={handleSetFiles}
                changeFile={handleChangesFile}
                deleteAttachment={handleDeleteAttachment}
                fileKey={attachment.fileKey || ''}
                category={attachment.category || ''}
                id={attachment.id}
                isLoaded={attachment?.isLoaded!}
              />
            ))}
          </AttachmentsContainer>
        )}

        <Footer>
          <StyledBackButton
            onClick={goBack}
            isFullWight
            text={t('back')}
            type="button"
            variant={ButtonVariant.SECONDARY}
          />
          <StyledButton
            type="submit"
            onClick={onSubmit}
            isLoading={isLoading}
            disabled={isDisabledSubmitButton}
            isFullWight
            text={t('continue')}
            variant={ButtonVariant.VIOLET}
          />
        </Footer>
      </Root>
    </AdvertLayout>
  );
};

export default HouseMedias;

const Root = styled.div`
  padding: 40px;
  max-width: 900px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 24px 16px 16px;
  }
`;

const Title = styled(AppText)`
  margin-bottom: 16px;
`;

const SubTitle = styled(AppText)<{ $hasFiles: boolean }>`
  margin-bottom: 32px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    ${({ $hasFiles }) =>
      $hasFiles &&
      css`
        margin-bottom: 18px;
      `}
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 283px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    width: 167px;
  }
  @media (max-width: ${BreakpointsEnum.xxs}px) {
    width: 140.5px;
  }
`;

const StyledBackButton = styled(Button)`
  width: max-content;
  background-color: #fff;
  ${({ theme: { typography } }) => typography.body_20_14_medium};

  @media (max-width: ${BreakpointsEnum.sm}px) {
    max-width: 100%;
  }
`;

const Footer = styled.div`
  padding: 31px 73px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 1000;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    flex-direction: column;
    align-items: center;
    padding: 16px 12px;
  }
`;

const AttachmentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 36px;
  margin-top: 20px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    gap: 8px;
    margin-bottom: 0;
  }
`;

const DropzoneContainer = styled.div`
  margin: 2px;
  @media (max-width: ${BreakpointsEnum.s}px) {
    // min-height: 344px;
    // div {
    //   width: 100%;
    //   min-width: 24px;
    // }
    height: min-content;
    width: 100%;
  }
`;

const StyledDropzone = styled(Dropzone)<{ $hasFiles?: boolean }>`
  min-height: ${({ $hasFiles }) => ($hasFiles ? '174px' : '362px')};
  @media (max-width: ${BreakpointsEnum.s}px) {
    min-height: max-content;
    min-swidth: max-content;
  }
`;
