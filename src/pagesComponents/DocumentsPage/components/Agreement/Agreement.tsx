import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from 'ui';

interface AgreementProps {
  className?: string;
}

const Agreement: FC<AgreementProps> = ({ className }) => {
  return (
    <Root className={className}>
      <TitleTwo>ДОГОВОР АРЕНДЫ</TitleTwo>
      <HeaderTable>
        <tr>
          <td>
            <p>АРЕНДОДАТЕЛЬ</p>
          </td>
          <td>
            <p>
              Место для ввода текста., Место для ввода текста. года рождения, документ, удостоверяющий личность: Место
              для ввода текста., кем выдан Место для ввода текста., дата выдачи Место для ввода текста.,
              зарегистрированный по адресу: ___________, ИИН
            </p>
            <p>
              Место для ввода текста. (если применимо) в лице Гражданина Республики Казахстан
              __________________________, __ __________ _____ года рождения, место рождения:
              ___________________________, удостоверение личности: ____ номер _____, выдан
              ___________________________________________________ __ ____________ _____ года, ИИН: _____ - _____,
              действующего на основании доверенности от __ ____ ___ года, удостоверенной нотариусом города ___________ —
              ___________, номер в реестре нотариуса _____________________________
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>АРЕНДАТОР</p>
          </td>
          <td>
            <p>
              Место для ввода текста., Место для ввода текста. года рождения, удостоверение личности: Местодля ввода
              текста., выдан Место для ввода текста., ИИН Место для ввода текста., зарегистрированный по адресу:
              ___________,
            </p>
          </td>
        </tr>
      </HeaderTable>
      <Paragraph>
        совместно именуемые «Стороны», а по отдельности – «Сторона», заключили настоящий Договор аренды помещения для
        проживания № и дата Место для ввода текста. (далее – «Договор») о нижеследующем:
      </Paragraph>
      <OrderedList>
        <ListItem>
          <TitleThree>ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ</TitleThree>
          <OrderedList>
            <ListItem>
              <Paragraph>
                Арендная плата – сумма за аренду одного Расчетного периода, оплачиваемая Арендатором Арендодателю, без
                учета размера компенсации коммунальных услуг и иных услуг.
              </Paragraph>
              <Paragraph>
                Дата оплаты – день и время внесения Арендатором Арендной платы, установленные Договором.
              </Paragraph>
              <Paragraph>
                Объект – помещение: квартира или апартаменты, расположенное по адресу:{' '}
                <a href="https://arent.app">https://arent.app</a>, которое Арендодатель передает Арендатору для
                проживания за плату во временное владение и пользование (аренду).
              </Paragraph>
              <Paragraph>
                Опись имущества – перечень имущества, находящегося в Объекте с описанием состояния и дефектов такого
                имущества, с приложением фотографий этого имущества. Опись имущества согласовывается и подписывается
                сторонами в Сервисе.
              </Paragraph>
              <Paragraph>
                Расчетный период – период равный месяцу и исчисляемый с «__» числа одного месяца по «___» число
                следующего месяца. В случае, если число месяца начала и/или конца Расчетного периода отсутствует в
                соответствующем календарном месяце, то число начала и/или конца Расчетного периода сдвигаются на
                следующий календарный день.
              </Paragraph>
              <Paragraph>
                Сервис – сервис <a href="https://arent.app">https://arent.app</a>, принадлежащий Компании и размещенный
                в сети интернет по адресу: <a href="https://arent.app">https://arent.app</a>
              </Paragraph>
              <Paragraph>
                Условия – Пользовательское соглашение по использованию Сервиса, размещенное в сети интернет по адресу:{' '}
                <a href="https://arent.app/documents?tab=TERMS_OF_USE">https://arent.app/documents?tab=TERMS_OF_USE</a>
              </Paragraph>
              <Paragraph>
                ЭЦП – простая электронная подпись, которая подтверждает факт подписания Договора, Описи имущества и иных
                документов Сторонами, посредством использования кодов, направленных на номера мобильных телефонов
                Сторон, указанных в Сервисе, и которая является аналогом собственноручной подписи Сторон.
              </Paragraph>
              <Paragraph>Компания – ТОО «_______» БИН ______, Адрес: _____________________.</Paragraph>
              <Paragraph>
                Термины, выделяемые с прописной буквы и которым не дается определения в Договоре, используются в
                значениях, указанных в Условиях.
              </Paragraph>
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <TitleThree>1. ПРЕДМЕТ ДОГОВОРА</TitleThree>
          <OrderedList>
            <ListItem>
              1.1. Арендодатель передает, а Арендатор принимает в аренду Объект для проживания без права его передачи в
              субаренду.
            </ListItem>
            <ListItem>1.2. Срок аренды: 11 (одиннадцать) месяцев начиная с «___» _______20__г. </ListItem>
            <ListItem>1.3. Дата заезда: с «___» _______20__г. </ListItem>
            <ListItem>
              1.4. Вместе с Арендатором в Объекте могут проживать следующие лица: _____________________________, а также
              ___ детей. Лица, проживающие вместе с Арендатором, имеют равные с ним права по пользованию Объектом. За
              все действия вышеуказанных лиц, причинивших ущерб Объекту либо иным образом нарушивших права и законные
              интересы третьих лиц (соседи, ТСЖ, снабжающие организации и т.д.), ответственность перед Арендодателем, а
              также третьими лицами несет Арендатор.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <TitleThree>2. ПОРЯДОК ЗАКЛЮЧЕНИЯ ДОГОВОРА </TitleThree>
          <OrderedList>
            <ListItem>
              2.1. Договор заключается с использованием Сервиса. Помимо обязательств, предусмотренных Договором, Стороны
              обязуются соблюдать обязанности, предусмотренные Условиями. Компания не выступает представителем ни одной
              из сторон по Договору.
            </ListItem>
            <ListItem>
              <Paragraph>2.2. Договор формируется в Сервисе и подписывается ЭП Сторон в следующем порядке:</Paragraph>
              <OrderedList>
                <ListItem>
                  1. при оформлении Договора Стороны получают одноразовый код на абонентский номер своего мобильного
                  телефона, указанного в Сервисе.
                </ListItem>
                <ListItem>2. каждая Сторона вводит полученный код в окне для ввода кода;</ListItem>
                <ListItem>
                  3. после введение верного кода каждой из Сторон Договор считается подписанным обеими Сторонами, при
                  этом датой подписания Договора считается дата подписания последней Стороной (более поздняя дата).
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>
              2.3 Стороны пришли к соглашению, что оплата Арендатором Арендной платы за первый Расчетный период,
              является существенным условием необходимым для заключения Договора. В случае несовершения Арендатором
              оплаты в срок, установленный пунктом 4.4. Договора, Договор не считается заключенным.
            </ListItem>
            <ListItem>
              2.4 Договор вступает в силу и считается заключенным с момента совершения обеими Сторонами действий,
              указанных в пунктах 2.2.-2.3. Договора, при этом датой заключения договора считается дата совершения
              Арендатором оплаты Арендной платы за первый Расчетный период.
            </ListItem>
            <ListItem>
              2.5 Объект считается переданным Арендодателем Арендатору в первый день Срока аренды, указанный в пункте
              1.2. Договора. Договор одновременно является и Актом приема-передачи Объекта.
            </ListItem>
            <ListItem>
              2.6 Настоящий Договор может быть также заключен путем обмена Сторонами его скан - копиями по электронной
              почте в формате jpeg или pdf. Стороны обмениваются скан - копиями настоящего Договора по электронной
              почте, указанного в Сервисе. Направленные таким образом документы считаются подписанными простой
              электронной подписью и признаются Сторонами равнозначными бумажным, подписанным собственноручной подписью
              сторон. Стороны гарантируют, что указанные в Сервисе адреса электронной почты действительно принадлежат
              каждой из Сторон.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <TitleThree>3. ПРАВА И ОБЯЗАННОСТИ </TitleThree>
          <OrderedList>
            <ListItem>
              <Paragraph>3.1. Арендатор обязан:</Paragraph>
              <OrderedList>
                <ListItem>
                  1. получить ключи не позднее Даты передачи ключей Арендатору, указанной в пункте 1.3. Договора.
                </ListItem>
                <ListItem>
                  2. в течение 24 (двадцати четырех) часов с Даты передачи ключей, указанной в пункте 1.3. проверить
                  Опись имущества и согласовать ее либо заявить свои возражения. В случае несогласования Описи имущества
                  и не заявления возражений в указанный срок Опись имущества считается согласованной Арендатором.
                </ListItem>
                <ListItem>
                  3. после заключения Договора осуществлять с Компанией всю коммуникацию и обмен информацией по
                  вопросам, связанным с арендой Объекта.
                </ListItem>
                <ListItem>4. использовать Объект в соответствии с условиями Договора и по прямому назначению.</ListItem>
                <ListItem>
                  5. содержать Объект в технически исправном, надлежащем санитарном и соответствующем противопожарном
                  состоянии.
                </ListItem>
                <ListItem>
                  6. не курить на территории Объекта и соблюдать права соседей, в том числе права на тишину.
                </ListItem>
                <ListItem>
                  7. не содержать на территории Объекта животных, без предварительного согласования с Арендодателем.
                </ListItem>
                <ListItem>
                  8. не осуществлять ремонт Объекта (включая перенос инженерных сетей и коммуникаций, сверление
                  отверстий в стенах и т.д.), а также любые перепланировки или переустановки без предварительного
                  письменного согласия Арендодателя.
                </ListItem>
                <ListItem>
                  9. письменно сообщить Арендодателю (не позднее, чем за 30 календарных дней) о предстоящем освобождении
                  Объекта как в связи с окончанием Срока аренды, так и при досрочном освобождении, и передать Объект
                  Арендодателю (или его представителю) в исправном техническом состоянии и санитарном состоянии (чистым,
                  свободным от мусора и т.д.).
                </ListItem>
                <ListItem>
                  10. ежемесячно в соответствии с условиями, предусмотренными Договором и согласованными Сторонами в
                  Сервисе, вносить показания счетчиков, добавлять фото квитанций, подтверждение оплаты коммунальных и
                  иных услуг в Сервис, а также оплачивать счета за коммунальные и иные услуги, если эти обязательства
                  лежат на Арендаторе.
                </ListItem>
                <ListItem>
                  11. допускать в Объект Арендодателя (или его представителей) для контроля соблюдения условий Договора,
                  при условии соблюдения срока предупреждения Арендодателем, установленного в п. 3.4.2 Договора.
                </ListItem>
                <ListItem>
                  12. незамедлительно уведомить Арендодателя и Компанию о наступлении страхового случая.
                </ListItem>
                <ListItem>
                  13. в трехдневный срок сообщить Арендодателю и Компании свои новые реквизиты, а также контактные
                  данные в случае их изменения.
                </ListItem>
                <ListItem>
                  14. при прекращении Договора по любым основаниям вернуть Объект Арендодателю в том состоянии, в
                  котором он его получил с учетом естественного износа и предусмотренных Договором изменений.
                </ListItem>
                <ListItem>
                  15. исполнять иные обязательства, предусмотренные Договором и определенные в Сервисе.
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>
              <Paragraph>3.2. Арендодатель обязан:</Paragraph>
              <OrderedList>
                <ListItem>
                  1. передать во временное владение и пользование Объект на условиях, определенных Договором, в
                  состоянии, соответствующем условиям Договора.
                </ListItem>
                <ListItem>
                  2. в случае аварии отопления, водоснабжения, электроснабжения, кровли и иных экстренных ситуациях,
                  произошедших не по вине Арендатора, немедленно принимать все необходимые меры по их устранению и
                  минимизации ущерба, осуществлять взаимодействие с государственными и муниципальными органами и
                  предпринимать все иные требующиеся от него действия.
                </ListItem>
                <ListItem>
                  3. своевременно, посредством Компании, информировать Арендатора о любых событиях, связанных с
                  исполнением Договора, которые могут существенным образом затронуть его интересы.
                </ListItem>
                <ListItem>
                  4. оказывать Арендатору, посредством Компании, консультационную, информационную и иную помощь в целях
                  наиболее эффективного и грамотного использования Объекта.
                </ListItem>
                <ListItem>
                  5. в трехдневный срок сообщить Арендатору и Компании свои новые реквизиты, а также контактные данные в
                  случае их изменения.
                </ListItem>
                <ListItem>
                  6. по истечении Срока аренды или в случае досрочного прекращения Договора принять Объект от
                  Арендатора.
                </ListItem>
                <ListItem>
                  7. проверять показания счетчиков, представленных Арендатором и не позднее месяца, следующего за
                  Расчетным периодом, рассчитывать сумму для возмещения коммунальных услуг и направлять их Арендатору в
                  Сервисе.
                </ListItem>
                <ListItem>
                  8. своевременно и в полном объеме оплачивать коммунальные услуги и иные услуги, в соответствии с
                  пунктом 5 Договора.
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>
              <Paragraph>3.3. Арендатор имеет право:</Paragraph>
              <OrderedList>
                <ListItem>
                  1. проживать в Объекте в течение всего Срока аренды, вместе с лицами указанными в пункте 1.4. Договора
                  в соответствии с условиями Договора.
                </ListItem>
                <ListItem>
                  2. пользоваться Объектом и всем имуществом, находящимся в Объекте в соответствии с условиями Договора.
                </ListItem>
                <ListItem>
                  3. получать от Арендодателя информацию относительно Объекта и имущества, находящего в Объекте.
                </ListItem>
                <ListItem>
                  4. запросить у Арендодателя правоустанавливающие документы на Объект, дающие право Арендодателю
                  сдавать Объект в аренду согласно Договору.
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>
              <Paragraph>3.4. Арендодатель имеет право:</Paragraph>
              <OrderedList>
                <ListItem>
                  <Paragraph>
                    1. досрочно отказаться от исполнения Договора с предварительным уведомлением Арендатора за 3 (три)
                    дня, в случаях:
                  </Paragraph>
                  <UnorderedList>
                    <ListItem>
                      не перечисления Арендатором платежей, предусмотренных п. 4.1 и 5.1 Договора в течение 14
                      (четырнадцати) и более календарных дней с момента наступления сроков оплаты, предусмотренных
                      Договором;
                    </ListItem>
                    <ListItem>
                      причинения вреда Объекту Арендатором и/или лицами, за действия которых он отвечает;
                    </ListItem>
                    <ListItem>неоднократных (более трех раз) жалоб от соседей.</ListItem>
                    <ListItem>
                      иных случаях нарушения или не исполнения Арендатором условий Договора, а также не устранения
                      нарушения в течение 30 дней с даты получения соответствующего уведомления о нарушении.
                    </ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  2. не чаще одного раза в месяц в присутствии Арендатора самостоятельно либо через представителя
                  проверять состояние Объекта с предварительным уведомлением Арендатора за 3 (три) дня до планируемого
                  визита и с согласованием с Арендатором даты и времени проверки Объекта.
                </ListItem>
                <ListItem>
                  3. доступа в Объект в любое время без уведомления Арендатора в случае аварии, пожара, затоплений,
                  несанкционированного доступа третьих лиц, иных случаях, угрожающих ущербом Объекту, имуществу
                  Арендодателя и/или Арендатора, жизни и здоровью людей или в случае угрозы их возникновения, а также в
                  случае, если Арендатор не вносит Арендную плату и иные платежи более 14 (четырнадцати) дней и при этом
                  не отвечает на уведомления, сообщения, звонки от Арендодателя и/или Компании в течение 2 (двух) дней с
                  момента поступления таких уведомлений/сообщений/звонков.
                </ListItem>
                <ListItem>
                  4. не возмещать Арендатору расходы по улучшению объекта, если эти улучшения являются неотделимыми без
                  ущерба для объекта и осуществлены Арендатором без письменного согласия Арендодателя.
                </ListItem>
                <ListItem>5. проверять показания счетчиков, внесённые Арендатором в Сервисе.</ListItem>
              </OrderedList>
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <TitleThree>4. ПЛАТЕЖИ И ПОРЯДОК РАСЧЕТОВ</TitleThree>
          <OrderedList>
            <ListItem>
              4.1. Арендная плата за первые ___ Расчетные периоды составляет Место для ввода текста. (Место для ввода
              текста.) тенге Арендная плата за ___ и последующие Расчетные периоды составляет ______
              (_____________________________________) тенге. или Арендная плата за Расчетный период составляет
              ________________.
            </ListItem>
            <ListItem>
              4.2. Арендатор перечисляет Арендодателю Арендную плату за соответствующий Расчетный период путем
              предоплаты не позднее Даты оплаты, установленной в пункте 4.3. Договора и Даты оплаты, установленной
              пунктом 4.4. Договора через Сервис.
            </ListItem>
            <ListItem>
              4.3. Стороны установили следующую Дату оплаты за второй и последующие Расчетные периоды: до 18-00 Место
              для ввода текста.
            </ListItem>
            <ListItem>
              4.4. Арендная плата за первый Расчетный период должна быть совершена в течение 24 часов после подписания
              Договора.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <TitleThree>5. КОММУНАЛЬНЫЕ И ИНЫЕ УСЛУГИ</TitleThree>
          <OrderedList>
            <ListItem>
              5.1. Конкретный перечень коммунальных и иных услуг, порядок несения расходов по их оплате, а также порядок
              предоставления квитанций и документов подтверждающих оплату коммунальных и иных услуг определяется
              Арендодателем в Сервисе и согласовывается с Арендатором в Сервисе до подписания Договора Сторонами.
            </ListItem>
            <ListItem>
              5.2. В случае, если Арендатор не предоставляет показания счетчиков в срок, согласованный в Сервисе, при
              этом Стороны утвердили, что Арендодатель выставляет счет на оплату коммунальных и иных услуг, расходы по
              которым несет Арендатор, в соответствии с условиями согласованными в Сервисе Арендодатель вправе
              произвести расчёт по среднемесячным значениям потребления.
            </ListItem>
            <ListItem>
              5.3. Арендатор обязуется оплачивать коммунальные услуги и иные услуги, расходы по которым несет
              самостоятельно, в срок не позднее 10 (десяти) календарных дней после получения соответствующих квитанций.
            </ListItem>
            <ListItem>
              5.4. Арендатор обязуется возмещать Арендодателю расходы на коммунальные и иные услуги, в срок не позднее
              10 (десяти) календарных дней после выставления счета от Арендодателя с использованием Сервиса, если это
              согласовано в Сервисе.
            </ListItem>
            <ListItem>
              5.5. Если Стороны в Сервисе согласовали, что Арендатор обязуется ежемесячно направлять фотографии
              квитанций по коммунальным услугам и/или иным услугам и/или подтверждение оплаты квитанций Арендодателю
              через Сервис, то срок предоставления – не позднее 5 (пяти) календарных дней после получения квитанции
              и/или оплаты.
            </ListItem>
            <ListItem>
              5.6. Показания счетчиков на момент передачи Объекта указаны Арендодателем в Сервисе. Арендатор в течение
              24 часов с Даты передачи ключей Арендатору имеет право внести изменения в указанные показания счетчиков в
              случае, если показания счетчиков, указанные в Сервисе, отличаются от показаний на Дату передачи ключей
              Арендатору.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <TitleThree>6. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</TitleThree>
          <OrderedList>
            <ListItem>
              6.1. Оформление Арендатором и лицами, проживающими в Объекте вместе с Арендатором временной
              государственной регистрации по месту пребывания, в случае если в Объекте возможно оформление временной
              государственной регистрации, осуществляется только с письменного согласия Арендодателя и в установленном
              законом порядке.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <TitleThree>7. ИЗМЕНЕНИЕ И РАСТОРЖЕНИЕ ДОГОВОРА</TitleThree>
          <OrderedList>
            <ListItem>
              7.1. Изменения и дополнения в Договор осуществляются путем подписания дополнительных соглашений к Договору
              обеими Сторонами с обязательным письменным уведомлениям Компании по е-mail: _______________.
              Дополнительные соглашения к Договору могут быть подписаны посредством ЭП с использованием Сервиса, а также
              собственноручно с обязательным обменом Сторонами их подписанными сканированными копиями по e-mail,
              указанным в реквизитах Договора. При этом Стороны договорились о том, что все документы и сообщения,
              поступившие с e-mail Стороны, указанного в настоящем пункте, считаются поступившими от этой Стороны.
            </ListItem>
            <ListItem>
              7.2. Договор может быть расторгнут по соглашению Сторон, а также в иных случаях, предусмотренных Договором
              и законодательством РК.
            </ListItem>
            <ListItem>
              7.3. Каждая из Сторон вправе отказаться от исполнения Договора в одностороннем внесудебном порядке, при
              условии предварительного письменного уведомления другой Стороны и Компании за 30 календарных дней до
              предполагаемой даты прекращения Договора.
            </ListItem>
            <ListItem>
              7.4. Договор автоматически продлевается на тех же условиях на следующие 11 (одиннадцать) месяцев, если ни
              одна из Сторон за 1 (один) календарный месяц до окончания Срока аренды, не предупредит другую Сторону
              путем письменного уведомлении о желании прекратить Договор по окончании срока аренды.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <TitleThree>8. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</TitleThree>
          <OrderedList>
            <ListItem>
              8.1. За неисполнение или ненадлежащее исполнение Сторонами своих обязательств по настоящему Договору
              Стороны несут ответственность в соответствии с действующим законодательством РК.
            </ListItem>
            <ListItem>
              <Paragraph>8.2. При заключении Договора Стороны подтверждают, что:</Paragraph>
              <UnorderedList>
                <ListItem>они понимают юридические последствия Договора;</ListItem>
                <ListItem>они не лишены, не ограничены в дееспособности и правоспособности;</ListItem>
                <ListItem>
                  отсутствуют обстоятельства, вынуждающие их совершить сделку на крайне невыгодных для себя условиях
                  (сделка не является для них кабальной).
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              8.3. Все споры и разногласия, возникающие между Сторонами, будут разрешаться путем переговоров. При
              неурегулировании в процессе переговоров спорных вопросов все споры по Договору или в связи с ним подлежат
              рассмотрению в суде по месту нахождения Объекта.
            </ListItem>
            <ListItem>
              8.4. Во всем остальном, не предусмотренном Договором, стороны руководствуются действующим
              законодательством РК. Стороны признают, что если какое-либо из положений Договора будет признано
              недействительным, то это не влечет недействительности всего Договора.
            </ListItem>
            <ListItem>
              <Paragraph>8.5. Приложения к Договору:</Paragraph>
              <UnorderedList>
                <ListItem>
                  Приложение № 1 «Копия выписки из EGOV.kz или Справки о зарегистрированных правах (обременениях) на
                  недвижимое имущество»
                </ListItem>
              </UnorderedList>
            </ListItem>
          </OrderedList>
        </ListItem>
      </OrderedList>
      <FooterTable>
        <tr>
          <td>
            <p>
              <b>ФИО:</b> Место для ввода текста.
            </p>
            <p>
              <b>Документ, удостоверяющий личность:</b> Место для ввода текста. номер _ Место для ввода текста., выдан
              Место для ввода текста., Место для ввода текста. года, ИИН Место для ввода текста. .
            </p>
            <p>
              <b>Адрес места жительства:</b> Место для ввода текста. в лице _______________________________, документ
              уд.личность: ____ номер _____, выдан ___________________________________________ ________ __ ____________
              _____ года, ИИН: _____ - _____, действующего на основании доверенности от __ ____ ___ года, удостоверенной
              нотариусом города ___________ — ___________, номер в реестре нотариуса _____________________________
            </p>
          </td>
          <td>
            <p>
              <b>ФИО:</b> Место для ввода текста.
            </p>
            <p>
              <b>Документ, удостоверяющий личность:</b> Место для ввода текста. номер _ Место для ввода текста., выдан
              Место для ввода текста., Место для ввода текста. года, ИИН (если применимо) Место для ввода текста.
            </p>
            <p>
              <b>Адрес места жительства:</b> Место для ввода текста.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <b>Контактный телефон:</b> Место для ввода текста.
            </p>
            <p>
              <b>E-mail:</b> Место для ввода текста.
            </p>
          </td>
          <td>
            <p>
              <b>Контактный телефон:</b> Место для ввода текста.
            </p>
            <p>
              <b>E-mail:</b> Место для ввода текста.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>________________/_____________________/</p>
          </td>
          <td>
            <p>________________/_____________________/</p>
          </td>
        </tr>
      </FooterTable>
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

const HeaderTable = styled.table`
  td {
    padding: 0 16px 16px 0;
    vertical-align: top;
  }

  p {
    margin: 0;
    ${({ theme: { typography } }) => typography.body_20_14_regular};
    color: ${({ theme: { colors } }) => colors.greyScale[80]};
  }

  td:not(:first-child) p {
    word-break: break-word;
  }
`;

const FooterTable = styled.table`
  td {
    border: 1px solid ${({ theme: { colors } }) => colors.greyScale[100]};
    padding: 5px;
    vertical-align: top;
    width: 50%;
  }

  p {
    margin: 0;
    ${({ theme: { typography } }) => typography.body_20_14_regular};
    word-break: break-word;
    color: ${({ theme: { colors } }) => colors.greyScale[80]};
  }
`;

export default Agreement;
