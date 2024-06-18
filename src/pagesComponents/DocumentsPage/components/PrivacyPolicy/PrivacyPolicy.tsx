import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { AppText } from 'ui';

interface PrivacyPolicyProps {
  className?: string;
}

const PrivacyPolicy: FC<PrivacyPolicyProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Helmet>
        <title>Соблюдение конфиденциальности при использовании сайта | Arent</title>
        <meta
          name="title"
          content="Соблюдение конфиденциальности при использовании сайта | Arent"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Правила соблюдения конфиденциальности на сайте arent.app"
          data-react-helmet="true"
        />
      </Helmet>
      <TitleTwo>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</TitleTwo>
      <Paragraph>
        Данная Политика конфиденциальности описывает установленный Компанией порядок обработки персональных данных,
        собранных с помощью Сайта и связанных с ними услуг, и инструментов, позволяющих пользователям регистрироваться
        на Сайте, публиковать или просматривать в режиме реального времени уже опубликованные объявления, использовать
        другой, связанный с вышеперечисленным Сервис.
      </Paragraph>
      <Paragraph>
        Во всех указанных случаях Компания обрабатывает персональные данные пользователей исключительно в рамках
        требований Закона Республики Казахстан «О персональных данных и их защите» и Конвенции о защите лиц в связи с
        автоматизированной обработкой персональных данных. Данная Политика конфиденциальности разработана в соответствии
        с положениями этих документов. Данная Политика конфиденциальности используется для информирования посетителей о
        наших правилах сбора, использования и разглашения личной информации Пользователей. Если вы решите
        воспользоваться нашим Сервисом, вы соглашаетесь на сбор и обработку персональных данных, размещенных на Сайте.
      </Paragraph>
      <OrderedList>
        <ListItem>
          <TitleThree>1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ, ИСПОЛЬЗУЕМЫЕ В ПОЛИТИКЕ КОНФИДЕНЦИАЛЬНОСТИ</TitleThree>
          <OrderedList>
            <ListItem>
              1.1. Компания – «Birdhouse» (БИН 220340038469), юридический адрес: РК, г.Алматы, ул. Байтурсынова 141,
              индекс 050013.
            </ListItem>
            <ListItem>1.2. Пользователь - физическое или юридическое лицо, использующее и посещающее Сайт.</ListItem>
            <ListItem>
              1.3. Сервисы Сайта или Сервисы – комплекс услуг, предоставляемые Пользователю в соответствии с
              функциональными возможностями Сайта.
            </ListItem>
            <ListItem>
              1.4. Сайт – <a href="https://arent.app">https://arent.app</a>.
            </ListItem>
            <ListItem>
              1.5. Учетная запись – совокупность данных о Пользователе Сайта, используемая при Идентификации
              Пользователя и содержащая сведения о Пользователе, в том числе введенные им Персональные данные, и
              служащая для управления сервисами Сайта от имени Пользователя.
            </ListItem>
            <ListItem>1.6. Идентификация Пользователя – установление личности Пользователя, и его данных.</ListItem>
            <ListItem>
              1.7. Логин – данные, вводимые Пользователем для получения доступа к Личному кабинету Пользователя на
              Сайте.
            </ListItem>
            <ListItem>
              1.8. Объявление – предложение о возмездной передаче недвижимого имущества (далее - Объект) во временное
              пользование (включая контактную информацию, фотографии и любую сопутствующую информацию) в сфере рынка
              недвижимого имущества (недвижимости), размещаемое Пользователем на Сайте, адресованное неопределенному
              кругу лиц.
            </ListItem>
            <ListItem>
              1.9. Договор аренды – договор аренды, в т. ч. приложения к нему, размещенные на Сайте заключаемые между
              Собственником и Арендатором.
            </ListItem>
            <ListItem>
              1.10. Сделка – соглашение Пользователей Сайта, а также их действия, направленные на установление
              гражданских прав и обязанностей.
            </ListItem>
            <ListItem>
              1.11. Собственник - Пользователь, размещающий на Сайте Объявление с предложением заключить сделку в
              отношении аренды Объекта.
            </ListItem>
            <ListItem>
              1.12. Арендатор - Пользователь, осуществляющий просмотр размещенного Собственником Объявления,
              взаимодействие с Собственником в отношении аренды Объекта и/или заключающий сделку с Собственником.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <TitleThree>2. СОГЛАСИЕ, СБОР И ИСПОЛЬЗОВАНИЕ ИНФОРМАЦИИ</TitleThree>
          <OrderedList>
            <ListItem>
              2.1. Давая Согласие, Пользователь подтверждает факт ознакомления с Политикой конфиденциальности,
              размещенной на сайте Компании и опубликованной по адресу:{' '}
              <a href="http://arent.app/documents?tab=PRIVACY_POLICY">http://arent.app/documents?tab=PRIVACY_POLICY</a>
            </ListItem>
            <ListItem>
              2.2. Персональные данные Пользователей обрабатываются на территории Республики Казахстан.
            </ListItem>
            <ListItem>
              2.3. В целях улучшения нашего Сервиса мы можем потребовать предоставить нам следующие персональные данные:
              (1) фамилия, имя, отчество (в случае, если указано в Документе, удостоверяющем личность), и (2) дата,
              месяц и год рождения, и (3) место рождения, и (4) индивидуальный идентификационный номер (ИИН), только для
              граждан Казахстана и (или) лиц без гражданства, и (5) выдавший орган, дата выдачи и срок действия, серия и
              номер Документа, удостоверяющего личность (или его заменяющего), и (6) сведения об адресе регистрации по
              месту жительства, и (7) контактные данные, в том числе, но не ограничиваясь, номер мобильного телефона,
              адрес электронной почты, и (8) фотография, и (9) данные о месте работы и занимаемой должности, и (10)
              любые иные персональные данные, связанные или которые могут создаваться в связи с заключением и
              исполнением Пользовательского соглашения, Договора Аренды и (или) соглашения об использовании программного
              обеспечения используемого Компанией. Информация, которую мы запрашиваем, будет сохранена нами и
              использована, как описано в политике конфиденциальности.
            </ListItem>
            <ListItem>
              2.4. Используя Сайт и/или иные связанные сервисы и инструменты, Пользователь предоставляет своё согласие
              Компании на обработку своих персональных данных, таких как имя пользователя; регион проживания, адрес
              электронной почты, контактный телефон, другая контактная информация и по желанию пользователя; ip-адреса,
              другие коммуникационные данные пользователей; сообщения, письма, заявления, передаваемые Пользователю
              другими Пользователями и наоборот, а также даёт своё согласие на передачу своих персональных данных
              третьим лицам, в том числе на передачу персональных данных за границу, в любую третью страну, в случае
              обеспечения этими странами защиты персональных данных, и в соответствии с данной Политикой
              конфиденциальности и с Пользовательским соглашением Компании.
            </ListItem>
            <ListItem>
              2.5. Сайт использует сторонние сервисы, которые могут собирать информацию, используемые для идентификации
              ваших данных.
            </ListItem>
            <ListItem>
              2.6. Во время использования Сервиса, в случае ошибки на Сайте, мы собираем данные и информацию (через
              сторонние продукты) на вашем устройстве. Эти данные могут включать в себя информацию, такую как: адрес
              интернет-протокола вашего устройства («IP»), имя устройства, версию операционной системы, время и дату
              использования Сервиса, и другие статистические данные.
            </ListItem>
            <ListItem>
              2.7. Файлы «cookie», пиксели «pixels», и локального хранилища (как в Вашем браузере, или мобильном
              устройстве), представляют собой файлы с небольшим количеством данных, которые обычно используются как
              анонимные уникальные идентификаторы. Они отправляются в ваш браузер с веб-сайтов, которые вы посещаете, и
              хранятся в памяти вашего устройства. Сайт может использовать сторонний код и библиотеки, которые
              используют «cookie» для сбора информации и улучшения Сервиса. Компания может позволять третьим сторонам,
              таким как поставщики рекламных и/или аналитических услуг, собирать информацию, используя эти типы
              технологий непосредственно на веб-странице Сайта. Данные, которые они собирают, подлежат охране согласно
              действующим политикам конфиденциальности этих третьих сторон.
            </ListItem>
            <ListItem>
              2.8. Компания может предоставлять персональные данные Пользователей на запросы компетентных органов,
              оформленных в соответствии с требованиями законодательства Республики Казахстан.
            </ListItem>
            <ListItem>
              <Paragraph>2.9. Мы можем привлекать к оказанию услуг сторонние компании по следующим причинам:</Paragraph>
              <Paragraph>
                Для улучшения работы Сервиса; Для предоставления услуги от нашего имени; Для оказания услуг, связанных с
                обслуживанием; Помочь нам в анализе использования Сервиса. Уведомляем вас, что сторонние компании могут
                иметь доступ к вашей личной информации. Причиной является выполнение задач, возложенных на них от нашего
                имени. Однако они могут не раскрывать или использовать информацию для каких-либо других целей.
              </Paragraph>
            </ListItem>
            <ListItem>
              2.10. В соответствии с Политикой конфиденциальности, Компания обязуется не передавать в аренду или
              продавать любые персональные данные Пользователя. В случае если бизнес Компании или часть этого бизнеса
              будут проданы или реорганизованы, и Компания передает все, или практически все свои активы новому
              владельцу, то персональные данные пользователей могут быть переданы покупателю, чтобы обеспечить
              непрерывность обслуживания Сайта.
            </ListItem>
            <ListItem>
              2.11. В случаях передачи персональных данных, предусмотренных Политикой конфиденциальности, информирование
              Пользователя о передаче его персональных данных остается на усмотрение Компании.
            </ListItem>
            <ListItem>
              2.12. Пользователь может в любой момент изменить (обновить, дополнить) или уточнять свои Персональные
              данные посредством открытых источников или от третьих лиц на основе договорных отношений с Компанией.
              Кроме того, Пользователь может полностью или частично, требовать уничтожения, блокирования своих
              персональных данных сбор и обработка которых произведены с нарушением законодательства Республики
              Казахстан, а также изменить параметры их конфиденциальности.
            </ListItem>
            <ListItem>
              2.13. Хранение Персональных данных осуществляется Компанией на территории Республики Казахстан в течение
              срока, необходимого для достижения цели их сбора и обработки по Пользовательскому соглашению и трех лет
              после прекращения действия указанного Пользовательского соглашения, если более короткий срок не установлен
              каким-либо применимым законодательством.
            </ListItem>
            <ListItem>
              2.14. Пользователь может отозвать свое согласие на сбор и обработку Персональных данных. Отзыв согласия
              может повлечь приостановление или прекращение Пользовательского соглашения. Для отзыва согласия
              Пользователю необходимо подать письменное заявление в адрес Компании, указанный в Пользовательском
              соглашении.
            </ListItem>
            <ListItem>
              2.15. Пользователь не может отозвать согласие на сбор, обработку Персональных данных в случаях, если это
              противоречит законодательству Республики Казахстан, либо при наличии неисполненного обязательства перед
              Компанией.
            </ListItem>
            <ListItem>
              2.16. Сбор, обработка Персональных данных производятся без согласия субъекта или его законного
              представителя в случаях, установленных законодательством Республики Казахстан.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <TitleThree>3. СБОР И ОБРАБОТКА ИНФОРМАЦИИ ОБ УЧЕТНОЙ ЗАПИСИ</TitleThree>
          <OrderedList>
            <ListItem>
              3.1. При создании Пользователем учетной записи на Сайте, Компания может потребовать определенную
              информацию, такую как действительный адрес электронной почты и пароль. Учетная запись включает в себя
              такую информацию о них, как географическое расположение, имя и фамилию, номер телефона и сопутствующую
              информацию, в том числе фотографии, которые они могут загружать в свою учетную запись. Учетная запись
              позволяет пользователям связываться друг с другом, чтобы выразить заинтересованность в своих предложениях.
              Пользователи несут ответственность за всю информацию, размещаемую ими в общедоступных учетных записях.
            </ListItem>
            <ListItem>
              3.2. Пользователь должен внимательно рассмотреть все риски, связанные с тем, что он делает определённую
              информацию – в частности, адрес или информацию о месте своего точного расположения - общедоступной. Если
              пользователь решил войти на сайт, используя службу аутентификации стороннего оператора, Компания может
              получить дополнительный профиль, или другую информацию, доступ к которой предоставлен таким третьим лицом.
            </ListItem>
            <ListItem>
              <Paragraph>
                3.3. Персональные данные Пользователя подлежат уничтожению Компанией в течение 30 (тридцать) рабочих
                дней в следующих случаях:
              </Paragraph>
              <UnorderedList>
                <ListItem>
                  при получении обращения Пользователя об отзыве согласия Пользователя на сбор и обработку Персональных
                  данных, направленного в адрес Компании;
                </ListItem>
                <ListItem>
                  до истечения указанного периода Пользователь вправе отменить отзыв согласия на сбор и обработку
                  Персональных данных путем авторизации на Сайте с существующей учетной записью или путем направления
                  обращения в адрес Компании.
                </ListItem>
                <ListItem>
                  по истечении срока хранения Персональных данных, определяемого датой достижения целей их сбора и
                  обработки, если иное не предусмотрено законодательством Республики Казахстан;
                </ListItem>
                <ListItem>при прекращении правоотношений между Пользователем и Компанией;</ListItem>
                <ListItem>в иных случаях, установленных законодательством Республики Казахстан.</ListItem>
              </UnorderedList>
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <TitleThree>4. ПРОЧИЕ ПОЛОЖЕНИЯ</TitleThree>
          <OrderedList>
            <ListItem>
              4.1. В рамках деятельности Сайта Компания может размещать информацию, в том числе личного и контактного
              характера, необходимую для совершения сделок между Собственником и Арендатором, для отправки сообщений и
              общения Пользователями между собой, и совершения платежей. Вся информация, необходимая для публикации
              объявлений, требуется при создании учетной записи. Пользователи несут ответственность за всю информацию,
              размещаемую ими на сайте. Пользователь должен внимательно рассмотреть все риски, связанные с тем, что он
              делает определённую информацию – в частности, адрес или другую информацию личного характера -
              общедоступной.
            </ListItem>
            <ListItem>
              4.2. При обращении Пользователей в отдел обслуживания клиентов, Компания может - в рамках операций Сайта -
              собирать личную информацию, необходимую для выполнения запроса Пользователя и получения обратной связи при
              необходимости. Компания может также связаться с Пользователем, используя существующую контактную
              информацию учётной записи, предоставленную для этой цели. Компания может также собирать другую информацию
              об общении с Пользователями, например, любые запросы в службу поддержки, подаваемые Пользователями, или
              любую обратную связь, предоставляемую ими.
            </ListItem>
            <ListItem>
              4.3. Мы ценим ваше доверие, поэтому мы стремимся использовать приемлемые способы защиты Персональных
              данных. Но помните, что ни один способ передачи через Интернет, или метод электронного хранения на 100% не
              является безопасным и надежным, и мы не можем гарантировать его абсолютную безопасность.
            </ListItem>
            <ListItem>
              4.4. Сервис может содержать ссылки на другие сайты. Если вы кликните стороннюю ссылку, вы будете
              перенаправлены на этот сайт. Обратите внимание, что эти внешние сайты не управляются нами. Поэтому мы
              настоятельно рекомендуем вам ознакомиться с Политикой конфиденциальности данных веб-сайтов. Мы не
              контролируем и не несем ответственности за контент, политику конфиденциальности и практику сторонних
              сайтов или сервисов.
            </ListItem>
          </OrderedList>
        </ListItem>
      </OrderedList>
      <Paragraph>
        ВАЖНО! Мы можем время от времени обновлять нашу Политику конфиденциальности. Таким образом, вам рекомендуется
        периодически просматривать эту страницу для различных изменений. Мы сообщим вам о любых изменениях, опубликовав
        новую Политику конфиденциальности на этой странице. Эти изменения вступают в силу сразу же после их публикации
        на этой странице. ВАЖНО! В случае если Компанией были внесены любые изменения в Политику Конфиденциальности, с
        которыми Пользователь не согласен, он обязан прекратить использование сервисов Сайта. Факт не прекращения
        использования Сайта является подтверждением согласия и принятия Пользователем соответствующей редакцией Политики
        Конфиденциальности.
      </Paragraph>
    </Root>
  );
};

const Root = styled.div`
  a {
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.greyScale[80]};
  }
`;

const TitleTwo = styled(AppText).attrs({
  as: 'h2',
})`
  margin: 0 0 16px;
  ${({ theme: { typography } }) => typography.title_36_26_bold};
  color: ${({ theme: { colors } }) => colors.greyScale[100]};
`;

const TitleThree = styled(AppText).attrs({
  as: 'h3',
})`
  margin: 0 0 16px;
  ${({ theme: { typography } }) => typography.body_20_14_medium};
  color: ${({ theme: { colors } }) => colors.greyScale[100]};
`;

const Paragraph = styled(AppText)`
  margin: 0 0 16px;
  ${({ theme: { typography } }) => typography.body_20_14_regular};
  color: ${({ theme: { colors } }) => colors.greyScale[80]};
`;

const UnorderedList = styled.ul`
  margin-bottom: 16px;
  padding-left: 14px;

  & > li {
    list-style-type: disc;
  }
`;

const OrderedList = styled.ol`
  margin-bottom: 16px;

  & > li {
    list-style-type: none;
  }
`;

const ListItem = styled.li`
  position: relative;
  ${({ theme: { typography } }) => typography.body_20_14_regular};
  color: ${({ theme: { colors } }) => colors.greyScale[80]};

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export default PrivacyPolicy;
