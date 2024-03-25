import { Row, Col, Head, Text } from 'digi-ui';
import { Icon, Icons } from 'digi-ui/icons';

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
      'ArrowDown2',
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
    ],
    6
  );

  return (
    <div>
      <Head level="H1">Icons</Head>
      <Head level="H2">Fill</Head>
      {icons.map((xs, i) => (
        <Row key={i}>
          {xs.map((icon, j) => (
            <Col key={j} weight={1}>
              <Text $color="primitive-blue-900">
                <Icon name={icon} type="fill" />
              </Text>
            </Col>
          ))}
        </Row>
      ))}
      <Head level="H2">Line</Head>
      {icons.map((xs, i) => (
        <Row key={i}>
          {xs.map((icon, j) => (
            <Col key={j} weight={1}>
              <Text $color="primitive-cyan-900">
                <Icon name={icon} type="line" />
              </Text>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};