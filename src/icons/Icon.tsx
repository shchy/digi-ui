import { IconProps } from './types';
import { Add } from './Add';
import { Application } from './Application';
import { Arrival } from './Arrival';
import { ArrowDown } from './ArrowDown';
import { ArrowLeft } from './ArrowLeft';
import { ArrowRight } from './ArrowRight';
import { ArrowUp } from './ArrowUp';
import { Authentication } from './Authentication';
import { BankAccount } from './BankAccount';
import { Certification } from './Certification';
import { CertificationWithSeal } from './CertificationWithSeal';
import { Child } from './Child';
import { CodeReader } from './CodeReader';
import { Complete } from './Complete';
import { Copy } from './Copy';
import { Departure } from './Departure';
import { Documents } from './Documents';
import { Download } from './Download';
import { EApplication } from './EApplication';
import { Expenditure } from './Expenditure';
import { Family } from './Family';
import { FastTrack } from './FastTrack';
import { FillableCard } from './FillableCard';
import { Health } from './Health';
import { Help } from './Help';
import { History } from './History';
import { House } from './House';
import { Immunization } from './Immunization';
import { Inbox } from './Inbox';
import { Income } from './Income';
import { Information } from './Information';
import { Invoice } from './Invoice';
import { Itinerary } from './Itinerary';
import { Laws } from './Laws';
import { Luggage } from './Luggage';
import { Mailing } from './Mailing';
import { Me } from './Me';
import { Medicine } from './Medicine';
import { Menu } from './Menu';
import { Money } from './Money';
import { MotherAndChild } from './MotherAndChild';
import { Municipality } from './Municipality';
import { NewWindow } from './NewWindow';
import { Notification } from './Notification';
import { Password } from './Password';
import { Pension } from './Pension';
import { PersonalComputer } from './PersonalComputer';
import { Printer } from './Printer';
import { PrivacyProtection } from './PrivacyProtection';
import { PublicOffering } from './PublicOffering';
import { SealCertificate } from './SealCertificate';
import { Search } from './Search';
import { Smartphone } from './Smartphone';
import { Specialist } from './Specialist';
import { Stamp } from './Stamp';
import { Tax } from './Tax';
import { Transactions } from './Transactions';
import { Update } from './Update';
import { Work } from './Work';

export const Icon: React.FC<IconProps> = (props) => {
  const icon = selectIcon(props);
  return icon;
};

const selectIcon = (p: IconProps) => {
  switch (p.name) {
    case 'Add':
      return <Add {...p} />;
    case 'Application':
      return <Application {...p} />;
    case 'Arrival':
      return <Arrival {...p} />;
    case 'ArrowDown':
      return <ArrowDown {...p} />;
    case 'ArrowLeft':
      return <ArrowLeft {...p} />;
    case 'ArrowRight':
      return <ArrowRight {...p} />;
    case 'ArrowUp':
      return <ArrowUp {...p} />;
    case 'Authentication':
      return <Authentication {...p} />;
    case 'BankAccount':
      return <BankAccount {...p} />;
    case 'Certification':
      return <Certification {...p} />;
    case 'CertificationWithSeal':
      return <CertificationWithSeal {...p} />;
    case 'Child':
      return <Child {...p} />;
    case 'CodeReader':
      return <CodeReader {...p} />;
    case 'Complete':
      return <Complete {...p} />;
    case 'Copy':
      return <Copy {...p} />;
    case 'Departure':
      return <Departure {...p} />;
    case 'Documents':
      return <Documents {...p} />;
    case 'Download':
      return <Download {...p} />;
    case 'EApplication':
      return <EApplication {...p} />;
    case 'Expenditure':
      return <Expenditure {...p} />;
    case 'Family':
      return <Family {...p} />;
    case 'FastTrack':
      return <FastTrack {...p} />;
    case 'FillableCard':
      return <FillableCard {...p} />;
    case 'Health':
      return <Health {...p} />;
    case 'Help':
      return <Help {...p} />;
    case 'History':
      return <History {...p} />;
    case 'House':
      return <House {...p} />;
    case 'Immunization':
      return <Immunization {...p} />;
    case 'Inbox':
      return <Inbox {...p} />;
    case 'Income':
      return <Income {...p} />;
    case 'Information':
      return <Information {...p} />;
    case 'Invoice':
      return <Invoice {...p} />;
    case 'Itinerary':
      return <Itinerary {...p} />;
    case 'Laws':
      return <Laws {...p} />;
    case 'Luggage':
      return <Luggage {...p} />;
    case 'Mailing':
      return <Mailing {...p} />;
    case 'Me':
      return <Me {...p} />;
    case 'Medicine':
      return <Medicine {...p} />;
    case 'Menu':
      return <Menu {...p} />;
    case 'Money':
      return <Money {...p} />;
    case 'MotherAndChild':
      return <MotherAndChild {...p} />;
    case 'Municipality':
      return <Municipality {...p} />;
    case 'NewWindow':
      return <NewWindow {...p} />;
    case 'Notification':
      return <Notification {...p} />;
    case 'Password':
      return <Password {...p} />;
    case 'Pension':
      return <Pension {...p} />;
    case 'PersonalComputer':
      return <PersonalComputer {...p} />;
    case 'Printer':
      return <Printer {...p} />;
    case 'PrivacyProtection':
      return <PrivacyProtection {...p} />;
    case 'PublicOffering':
      return <PublicOffering {...p} />;
    case 'SealCertificate':
      return <SealCertificate {...p} />;
    case 'Search':
      return <Search {...p} />;
    case 'Smartphone':
      return <Smartphone {...p} />;
    case 'Specialist':
      return <Specialist {...p} />;
    case 'Stamp':
      return <Stamp {...p} />;
    case 'Tax':
      return <Tax {...p} />;
    case 'Transactions':
      return <Transactions {...p} />;
    case 'Update':
      return <Update {...p} />;
    case 'Work':
      return <Work {...p} />;
    default:
      return <></>;
  }
};
