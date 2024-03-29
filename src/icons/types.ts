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
  | 'Work'
  | 'Close';
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
    switch (textType) {
      case 'Headline/XXL':
        textSize = 57;
        break;
      case 'Headline/XL':
        textSize = 45;
        break;
      case 'Headline/L':
        textSize = 36;
        break;
      case 'Headline/M':
        textSize = 32;
        break;
      case 'Headline/S':
        textSize = 28;
        break;
      case 'Headline/XS':
        textSize = 24;
        break;
      case 'Headline/XXS':
        textSize = 20;
        break;
      case 'Body/L':
        textSize = 16;
        break;
      case 'Body/M':
        textSize = 14;
        break;
      case 'Label/L':
        textSize = 14;
        break;
      case 'Label/M':
        textSize = 12;
        break;
      case 'Caption/L':
        textSize = 12;
        break;
      case 'Caption/M':
        textSize = 10;
        break;
      case 'Button':
        textSize = 16;
        break;
      default:
        textSize = 16;
    }
    const textColor = props.$color ? getColor(props.$color) : 'inherit';
    return css`
      color: ${textColor};
      width: ${`${textSize * 1.5}px`};
      height: ${`${textSize * 1.5}px`};
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
