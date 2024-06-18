import { ApartmentRentPeriodType, UserChatRole } from '__generated__/types';
import { useGetApartmentIdentificatorByApId } from 'graphql/queries/Advert/__generated__/getApartmentAdIdentificatorByApId.query';
import { useGetChatById } from 'graphql/queries/Chat/__generated__/getChatById';
import { useGetLightMe } from 'graphql/queries/User/__generated__/getLightMe.query';
import { useClientSize, useToggle } from 'hooks';
import { ExpiredPaymentModal } from 'pagesComponents/BookingPage/components';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { getStorageById, resetStorageById } from 'utils/storage-service';

import { ChatTextarea } from '../ChatTextarea';
import { HeaderCard } from '../HeaderCard';
import { ChatHeader, MessagesList } from './components';
import { HeaderTimer } from './components/HeaderTimer';

type ChatBodyProps = {
  chatId: string;
  isIncomingMessage: boolean;
  chatRole: UserChatRole;
};

const ChatBody: FC<ChatBodyProps> = ({ chatId, chatRole, isIncomingMessage }) => {
  const [scrollToInitialPosition, setScrollToInitialPosition] = useState<{ scrollToInitialPosition?: () => void }>({});
  const { data, loading } = useGetChatById({ variables: { input: { id: chatId } } });
  const { data: meData } = useGetLightMe();

  const chat = data?.chat__byId;
  const apartmentAd = chat?.contract.apartmentAd;
  const { data: apartmentAdIdentificator } = useGetApartmentIdentificatorByApId({
    variables: {
      input: {
        id: apartmentAd?.id!,
      },
    },
  });

  const isShowHeaderCard = !loading && apartmentAd;

  const myId = meData?.user__me.id;

  const { title, address } = chat?.contract?.baseApartmentAdData || {};

  const { numberOfAdult = 0, numberOfChildren = 0, numberOfPets = 0 } = chat?.contract.guests || {};
  const numberOfGuests = numberOfAdult + numberOfChildren + numberOfPets;

  const companion = chat?.members.find((member) => member.id !== myId);
  const avatar = companion?.avatarKey;
  const isLongTerm = chat?.contract.apartmentRentPeriodType === ApartmentRentPeriodType.LongTerm;
  const id = isLongTerm ? chat?.apartmentAdIds.longTermRentId : chat?.apartmentAdIds.shortTermRentId;

  const isTenant = chatRole === UserChatRole.Tenant;
  const isNotChatActive = chat && !chat?.isActive;

  const lastContractData = getStorageById(chatId);
  const hasPaymentTimer = isTenant && !!lastContractData;
  const slug = `${apartmentAdIdentificator?.rentAdIdentificator__findByRentId.adSearchId}-${apartmentAdIdentificator?.rentAdIdentificator__findByRentId?.titleSeo}`;
  const coords = {
    lat: address?.geoPoint.lat!,
    lng: address?.geoPoint?.lng!,
  };
  const { getIsBreakpoint } = useClientSize();
  const isMobile = getIsBreakpoint('sm');

  const {
    isOpened: isExpiredPaymentModalOpen,
    open: openExpiredPaymentModal,
    toggle: toggleExpiredPaymentModal,
  } = useToggle();

  const { isOpened: isStickyTopHeaderPaymentTimerOpen, close: closeStickyTopHeaderPaymentTimerOpen } = useToggle(true);

  const handleToggleExpiredModal = () => {
    resetStorageById(chat?.id as string);
    openExpiredPaymentModal();
    closeStickyTopHeaderPaymentTimerOpen();
  };

  return (
    <Root>
      <LeftContainer>
        <ChatHeader username={companion?.firstName} companionId={companion?.id || ''} avatar={avatar} />
        {hasPaymentTimer && chat && isStickyTopHeaderPaymentTimerOpen && (
          <HeaderTimer chatId={chat?.id} onExpiredPaymentTimer={handleToggleExpiredModal} />
        )}
        {isShowHeaderCard && isMobile && (
          <HeaderCard
            image={chat?.apartmentAdPhotos?.[0].fileKey}
            name={title}
            numberOfGuests={numberOfGuests}
            price={chat?.contract?.cost || ''}
            numberOfRooms={apartmentAd?.details?.numberOfRooms}
            rentPeriodType={chat.contract.apartmentRentPeriodType}
            city={address?.city}
            houseNumber={address?.houseNumber}
            street={address?.street}
            id={id || ''}
            type={chat.contract.apartmentRentPeriodType}
            slug={slug}
            coords={coords}
          />
        )}

        <MessagesList
          chatRole={chatRole}
          isIncomingMessage={isIncomingMessage}
          setScrollToInitialPosition={setScrollToInitialPosition}
          hasContinuePayment={hasPaymentTimer}
        />
        <TextareaContainer>
          <ChatTextarea
            disabled={isNotChatActive}
            scrollToInitialPosition={scrollToInitialPosition.scrollToInitialPosition}
          />
        </TextareaContainer>
      </LeftContainer>
      <RightContainer>
        {isShowHeaderCard && !isMobile && (
          <HeaderCard
            image={chat?.apartmentAdPhotos?.[0].fileKey}
            name={title}
            numberOfGuests={numberOfGuests}
            price={chat?.contract?.cost || ''}
            numberOfRooms={apartmentAd?.details?.numberOfRooms}
            rentPeriodType={chat.contract.apartmentRentPeriodType}
            city={address?.city}
            houseNumber={address?.houseNumber}
            street={address?.street}
            id={id || ''}
            type={chat.contract.apartmentRentPeriodType}
            slug={slug}
            coords={coords}
          />
        )}
      </RightContainer>

      <ExpiredPaymentModal isVisible={isExpiredPaymentModalOpen} onClose={toggleExpiredPaymentModal} />
    </Root>
  );
};

export default ChatBody;

const Root = styled.div`
  display: flex;
  height: inherit;
`;

const TextareaContainer = styled.div`
  width: 100%;
  height: fit-content;
  align-self: flex-end;

  padding: 16px 24px;
  border-top: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};

  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 16px;
  }
`;

const LeftContainer = styled.div`
  width: 100%;
  height: inherit;
  min-height: 480px;

  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const RightContainer = styled.div`
  height: inherit;
  overflow-y: scroll;
`;
