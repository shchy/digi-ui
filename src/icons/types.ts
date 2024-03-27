import styled, { css } from 'styled-components';
import { colorType, getColor, textType, useTypography } from '../styles';

export type Icons =
  | 'Add'
  | 'Application'
  | 'Arrival'
  | 'ArrowDown'
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
  /* ${(props) => useTypography(props.$textType ?? 'Body/L', props.$color)}*/
  ${(props) => {
    // TODO FontIconにしとけばuseTypographyでいけそうだけど一旦1.5倍くらいにしておく
    const textType: textType = props.$textType ?? 'Body/L';
    let textSize = 16;
    switch (props.$textType) {
      case 'Headline/XXL':
        textSize = 57;
      case 'Headline/XL':
        textSize = 45;
      case 'Headline/L':
        textSize = 36;
      case 'Headline/M':
        textSize = 32;
      case 'Headline/S':
        textSize = 28;
      case 'Headline/XS':
        textSize = 24;
      case 'Headline/XXS':
        textSize = 20;
      case 'Body/L':
        textSize = 16;
      case 'Body/M':
        textSize = 14;
      case 'Label/L':
        textSize = 14;
      case 'Label/M':
        textSize = 12;
      case 'Caption/L':
        textSize = 12;
      case 'Caption/M':
        textSize = 10;
      case 'Button':
        textSize = 16;
      default:
        textSize = 16;
    }
    const textColor = props.$color ? getColor(props.$color) : 'inherit';
    return css`
      color: ${textColor};
      width: ${`${textSize * 1.25}px`};
      height: ${`${textSize * 1.25}px`};
      &:disabled {
        color: ${getColor('neutral-opacity-grey-420')} !important;
      }
    `;
  }}
`;

export interface IconProps extends React.SVGProps<SVGSVGElement>, SVGProps {
  name: Icons;
  type?: IconType;
}

export type NamedIconProps = Omit<IconProps, 'name'>;
