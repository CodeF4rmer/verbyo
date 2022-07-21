import styled from 'styled-components';
import { desktop, mobile } from 'utils';

const text = ["Dear Customers,",
  "Paragraph We just wanted to let you know that we have been keeping a close eye on what's been happening in Ukraine borders. Over the last couple of days, with the USA, EU and UK having released sanctions in response to recent events. We have identified that the scope of these sanctions may impact the way we are able to continue offering services to some of our customers.",
  "As you may know, accountable and regulated payments and banking institutions such as ePayments are not allowed to transact with any person or entity caught by the scope of these new imposed sanctions.",
  "Sanctions are prohibitions against individuals, entities, regions, industries (or even ships!), published by governments and other international bodies (for example the UN). The sanctions lists identify parties who those governments or international bodies believe are engaged in illegal activities. When an entry appears on a sanctions list, that may prohibit certain types of activities, for example payment processing.",
  "What we can say at this present moment of time, is that for most of our customers, who are not near any conflict zones, there will be no changes to the services that we are able to provide, and they can continue accessing the refunds process.",
  "We are continuing to monitor the situation for any updates or increased sanctions that may be imposed. In order for us to be compliant with any new sanctions, there may be an impact on some groups of customers.  ",
  "H2 Why can I not get verified?",
  "We want to keep ePayments safe and secure, and this includes making sure that we comply with all our legal and regulatory obligations, including those related to sanctions. We are pleased that most of our customers will not be impacted by the current sanctions, but as ever, if things change, we will keep you updated.",
  "Thank you for understanding and be safe,"
]
const Article: React.FC<any> = () => {
  return (
    <Container>
      <Header>
        <Date>22 OCTORBER 2022</Date>
        <Title>Payouts. How do you get paid?</Title>
      </Header>
      <Img src="/img/1280-720.png" />
      <Content>
        {text.map((_text: string, index: number) => {
          return (
            index === 6 ?
              <Bold key={index}>{_text}</Bold> :
              <Regular key={index}>{_text}</Regular>
          )
        })}
      </Content>
    </Container>
  );

}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 1080px;
  ${desktop}, ${mobile} {
    width: 100%;
  }
  padding: 0 10px;
  gap: 80px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 50px 0 0 0;
  gap: 30px;
`
const Date = styled.span`
  color: var(--shade-2);
  font-size: 12px;
  font-family: GraphikRegular;
`

const Title = styled.span`
  color: var(--shade-0);
  font-size: 42px;
  font-family: GraphikBold;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
  ${mobile} {
    width: 100%;
  }
  justify-content: start; !important
  align-items: center;
  box-sizing: border-box;
  gap: 30px;
`

const Regular = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-family: serif;
  color: var(--shade-1);
`

const Bold = styled.h2`
  margin: 0;
  padding: 0;
  display: block;
  font-size: 26px;
  font-family: serif;
  color: var(--shade-0);
`

const Img = styled.img`
  width: 1040px;
  ${desktop}, ${mobile} {
    width: 100%;
  }
`

export default Article;