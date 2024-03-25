import styled from 'styled-components';
import { colorType, textType, useTypography } from '../styles';

export type Icons =
  | 'Add'
  | 'Application'
  | 'Arrival'
  | 'ArrowDown'
  | 'ArrowDown2'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'ArrowUp'
  | 'Authentication'
  | 'BankAccount'
  | 'Certification'
  | 'CertificationWithSeal'
  | 'Child'
  | 'CodeReader'
  | 'Complete'
  | 'Copy'
  | 'Departure'
  | 'Documents'
  | 'Download'
  | 'EApplication'
  | 'Expenditure'
  | 'Family'
  | 'FastTrack'
  | 'FillableCard'
  | 'Health'
  | 'Help'
  | 'History'
  | 'House'
  | 'Immunization'
  | 'Inbox'
  | 'Income'
  | 'Information'
  | 'Invoice'
  | 'Itinerary'
  | 'Laws'
  | 'Luggage'
  | 'Mailing'
  | 'Me'
  | 'Medicine'
  | 'Menu'
  | 'Money'
  | 'MotherAndChild'
  | 'Municipality'
  | 'NewWindow'
  | 'Notification'
  | 'Password'
  | 'Pension'
  | 'PersonalComputer'
  | 'Printer'
  | 'PrivacyProtection'
  | 'PublicOffering'
  | 'SealCertificate'
  | 'Search'
  | 'Smartphone'
  | 'Specialist'
  | 'Stamp'
  | 'Tax'
  | 'Transactions'
  | 'Update'
  | 'Work';
export type IconType = 'line' | 'fill';

export interface SVGProps {
  $textType?: textType;
  $color?: colorType;
}
export const Svg = styled.svg<SVGProps>`
  ${(props) => useTypography(props.$textType ?? 'Body/L', props.$color, true)}
`;

export interface IconProps extends React.SVGProps<SVGSVGElement>, SVGProps {
  name: Icons;
  type: IconType;
}

export type NamedIconProps = Omit<IconProps, 'name'>;
