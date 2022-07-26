export default `
<!DOCTYPE html>
<html>

<head>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <meta charset='utf-8'>
  <title>Media Query</title>
  <style>
    @media screen and (max-width : 767px) {
      p {
        font-size: 14px;
        font-family: serif;
        margin: 0;
        line-height: 22px;
        letter-spacing: 0.22px;
      }
    }

    @media screen and (min-width : 768px) {
      p {
        font-size: 18px;
        font-family: serif;
        margin: 0;
        line-height: 32px;
        letter-spacing: 0.36px;
      }
    }

    #body {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p {
      text-align: left;
      margin: 0;
      padding: 0;
      font-family: serif;
    }

    h2 {
      margin: 0;
      padding: 0;
      display: block;
      font-size: 26px;
      font-family: serif;
      color: var(--shade-0);
    }

    #content {
      display: flex;
      flex-direction: column;
      max-width: 720px;
      box-sizing: border-box;
      gap: 30px;
    }
  </style>
</head>

<div id='body'>
  <div id='content'>

  <ol>
    <li>text 1</li>
    <li>text 2</li>
    <li>text 3</li>
  </ol>
  <p>&nbsp;</p>

    <p>Dear Customers,</p>
    <p>Paragraph We just wanted to let you know that we have been keeping a close eye on what's been happening in
      Ukraine borders. Over the last couple of days, with the USA, EU and UK having released sanctions in response
      to recent events. We have identified that the scope of these sanctions may impact the way we are able to
      continue offering services to some of our customers.</p>
    <p>As you may know, accountable and regulated payments and banking institutions such as ePayments are not
      allowed to transact with any person or entity caught by the scope of these new imposed sanctions.</p>
    <p>Sanctions are prohibitions against individuals, entities, regions, industries (or even ships!), published by
      governments and other international bodies (for example the UN). The sanctions lists identify parties who
      those governments or international bodies believe are engaged in illegal activities. When an entry appears
      on a sanctions list, that may prohibit certain types of activities, for example payment processing.</p>
    <p>What we can say at this present moment of time, is that for most of our customers, who are not near any
      conflict zones, there will be no changes to the services that we are able to provide, and they can continue
      accessing the refunds process.</p>
    <p>We are continuing to monitor the situation for any updates or increased sanctions that may be imposed. In
      order for us to be compliant with any new sanctions, there may be an impact on some groups of customers.
    </p>
    <h2>H2 Why can I not get verified?</h2>
    <p>We want to keep ePayments safe and secure, and this includes making sure that we comply with all our legal
      and regulatory obligations, including those related to sanctions. We are pleased that most of our customers
      will not be impacted by the current sanctions, but as ever, if things change, we will keep you updated.</p>
    <p>Thank you for understanding and be safe,</p>
  </div>
</div>

</html>
`;