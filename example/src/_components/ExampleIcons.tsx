import { Row, Col, Head, Text } from '../../../src';
import { Icon, Icons } from '../../../src/icons';
import styled from 'styled-components';

export const ExampleIcons = () => {
  const splitArray = <T,>(xs: T[], size: number): T[][] => {
    const line = xs.slice(0, size);
    const remain = xs.slice(size);

    if (remain.length == 0) {
      return [line];
    }
    return [line, ...splitArray(remain, size)];
  };

  const icons = splitArray<Icons>(
    [
      'Add',
      'Application',
      'Arrival',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'Authentication',
      'BankAccount',
      'Certification',
      'CertificationWithSeal',
      'Child',
      'CodeReader',
      'Complete',
      'Copy',
      'Departure',
      'Documents',
      'Download',
      'EApplication',
      'Expenditure',
      'Family',
      'FastTrack',
      'FillableCard',
      'Health',
      'Help',
      'History',
      'House',
      'Immunization',
      'Inbox',
      'Income',
      'Information',
      'Invoice',
      'Itinerary',
      'Laws',
      'Luggage',
      'Mailing',
      'Me',
      'Medicine',
      'Menu',
      'Money',
      'MotherAndChild',
      'Municipality',
      'NewWindow',
      'Notification',
      'Password',
      'Pension',
      'PersonalComputer',
      'Printer',
      'PrivacyProtection',
      'PublicOffering',
      'SealCertificate',
      'Search',
      'Smartphone',
      'Specialist',
      'Stamp',
      'Tax',
      'Transactions',
      'Update',
      'Work',
      'Close',
      'HDots',
      'VDots',
    ],
    4
  );

  return (
    <div>
      <Head level="H1">Icons</Head>
      <Head level="H2">Fill</Head>
      {icons.map((xs, i) => (
        <Row key={i}>
          {xs.map((icon, j) => (
            <Col key={j} large={1}>
              <Cell $color="primitive-blue-900" $type="Body/L">
                <Icon name={icon} type="fill" $textType="Body/L" />
                {icon}
              </Cell>
            </Col>
          ))}
        </Row>
      ))}
      <Head level="H2">Line</Head>
      {icons.map((xs, i) => (
        <Row key={i}>
          {xs.map((icon, j) => (
            <Col key={j} large={1}>
              <Cell $color="primitive-cyan-900" $type="Body/L">
                <Icon name={icon} type="line" $textType="Body/L" />
                {icon}
              </Cell>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

const Cell = styled(Text)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
