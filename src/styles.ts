import { Interpolation, RuleSet, css } from 'styled-components';

export type colorType =
  | 'neutral-white'
  | 'neutral-black'
  | 'neutral-solid-grey-50'
  | 'neutral-solid-grey-100'
  | 'neutral-solid-grey-200'
  | 'neutral-solid-grey-300'
  | 'neutral-solid-grey-400'
  | 'neutral-solid-grey-420'
  | 'neutral-solid-grey-500'
  | 'neutral-solid-grey-536'
  | 'neutral-solid-grey-600'
  | 'neutral-solid-grey-700'
  | 'neutral-solid-grey-800'
  | 'neutral-solid-grey-900'
  | 'neutral-opacity-grey-50'
  | 'neutral-opacity-grey-100'
  | 'neutral-opacity-grey-200'
  | 'neutral-opacity-grey-300'
  | 'neutral-opacity-grey-400'
  | 'neutral-opacity-grey-420'
  | 'neutral-opacity-grey-500'
  | 'neutral-opacity-grey-536'
  | 'neutral-opacity-grey-600'
  | 'neutral-opacity-grey-700'
  | 'neutral-opacity-grey-800'
  | 'neutral-opacity-grey-900'
  | 'primitive-blue-50'
  | 'primitive-blue-100'
  | 'primitive-blue-200'
  | 'primitive-blue-300'
  | 'primitive-blue-400'
  | 'primitive-blue-500'
  | 'primitive-blue-600'
  | 'primitive-blue-700'
  | 'primitive-blue-800'
  | 'primitive-blue-900'
  | 'primitive-blue-1000'
  | 'primitive-blue-1100'
  | 'primitive-blue-1200'
  | 'primitive-lightblue-50'
  | 'primitive-lightblue-100'
  | 'primitive-lightblue-200'
  | 'primitive-lightblue-300'
  | 'primitive-lightblue-400'
  | 'primitive-lightblue-500'
  | 'primitive-lightblue-600'
  | 'primitive-lightblue-700'
  | 'primitive-lightblue-800'
  | 'primitive-lightblue-900'
  | 'primitive-lightblue-1000'
  | 'primitive-lightblue-1100'
  | 'primitive-lightblue-1200'
  | 'primitive-cyan-50'
  | 'primitive-cyan-100'
  | 'primitive-cyan-200'
  | 'primitive-cyan-300'
  | 'primitive-cyan-400'
  | 'primitive-cyan-500'
  | 'primitive-cyan-600'
  | 'primitive-cyan-700'
  | 'primitive-cyan-800'
  | 'primitive-cyan-900'
  | 'primitive-cyan-1000'
  | 'primitive-cyan-1100'
  | 'primitive-cyan-1200'
  | 'primitive-green-50'
  | 'primitive-green-100'
  | 'primitive-green-200'
  | 'primitive-green-300'
  | 'primitive-green-400'
  | 'primitive-green-500'
  | 'primitive-green-600'
  | 'primitive-green-700'
  | 'primitive-green-800'
  | 'primitive-green-900'
  | 'primitive-green-1000'
  | 'primitive-green-1100'
  | 'primitive-green-1200'
  | 'primitive-lime-50'
  | 'primitive-lime-100'
  | 'primitive-lime-200'
  | 'primitive-lime-300'
  | 'primitive-lime-400'
  | 'primitive-lime-500'
  | 'primitive-lime-600'
  | 'primitive-lime-700'
  | 'primitive-lime-800'
  | 'primitive-lime-900'
  | 'primitive-lime-1000'
  | 'primitive-lime-1100'
  | 'primitive-lime-1200'
  | 'primitive-yellow-50'
  | 'primitive-yellow-100'
  | 'primitive-yellow-200'
  | 'primitive-yellow-300'
  | 'primitive-yellow-400'
  | 'primitive-yellow-500'
  | 'primitive-yellow-600'
  | 'primitive-yellow-700'
  | 'primitive-yellow-800'
  | 'primitive-yellow-900'
  | 'primitive-yellow-1000'
  | 'primitive-yellow-1100'
  | 'primitive-yellow-1200'
  | 'primitive-orange-50'
  | 'primitive-orange-100'
  | 'primitive-orange-200'
  | 'primitive-orange-300'
  | 'primitive-orange-400'
  | 'primitive-orange-500'
  | 'primitive-orange-600'
  | 'primitive-orange-700'
  | 'primitive-orange-800'
  | 'primitive-orange-900'
  | 'primitive-orange-1000'
  | 'primitive-orange-1100'
  | 'primitive-orange-1200'
  | 'primitive-red-50'
  | 'primitive-red-100'
  | 'primitive-red-200'
  | 'primitive-red-300'
  | 'primitive-red-400'
  | 'primitive-red-500'
  | 'primitive-red-600'
  | 'primitive-red-700'
  | 'primitive-red-800'
  | 'primitive-red-900'
  | 'primitive-red-1000'
  | 'primitive-red-1100'
  | 'primitive-red-1200'
  | 'primitive-magenta-50'
  | 'primitive-magenta-100'
  | 'primitive-magenta-200'
  | 'primitive-magenta-300'
  | 'primitive-magenta-400'
  | 'primitive-magenta-500'
  | 'primitive-magenta-600'
  | 'primitive-magenta-700'
  | 'primitive-magenta-800'
  | 'primitive-magenta-900'
  | 'primitive-magenta-1000'
  | 'primitive-magenta-1100'
  | 'primitive-magenta-1200'
  | 'primitive-purple-50'
  | 'primitive-purple-100'
  | 'primitive-purple-200'
  | 'primitive-purple-300'
  | 'primitive-purple-400'
  | 'primitive-purple-500'
  | 'primitive-purple-600'
  | 'primitive-purple-700'
  | 'primitive-purple-800'
  | 'primitive-purple-900'
  | 'primitive-purple-1000'
  | 'primitive-purple-1100'
  | 'primitive-purple-1200'
  | 'semantic-success-1'
  | 'semantic-success-2'
  | 'semantic-error-1'
  | 'semantic-error-2'
  | 'semantic-warning-YL1'
  | 'semantic-warning-YL2'
  | 'semantic-warning-OR1'
  | 'semantic-warning-OR2'
  | 'focus-blue'
  | 'focus-yellow';

export const getColor = (type: colorType): string => {
  switch (type) {
    case 'neutral-white':
      return '#FFFFFF';
    case 'neutral-black':
      return '#000000';
    case 'neutral-solid-grey-50':
      return '#F2F2F2';
    case 'neutral-solid-grey-100':
      return '#E6E6E6';
    case 'neutral-solid-grey-200':
      return '#CCCCCC';
    case 'neutral-solid-grey-300':
      return '#B3B3B3';
    case 'neutral-solid-grey-400':
      return '#999999';
    case 'neutral-solid-grey-420':
      return '#949494';
    case 'neutral-solid-grey-500':
      return '#7F7F7F';
    case 'neutral-solid-grey-536':
      return '#767676';
    case 'neutral-solid-grey-600':
      return '#666666';
    case 'neutral-solid-grey-700':
      return '#4D4D4D';
    case 'neutral-solid-grey-800':
      return '#333333';
    case 'neutral-solid-grey-900':
      return '#1A1A1A';
    case 'neutral-opacity-grey-50':
      return 'rgba(0,0,0,0.05)';
    case 'neutral-opacity-grey-100':
      return 'rgba(0,0,0,0.1)';
    case 'neutral-opacity-grey-200':
      return 'rgba(0,0,0,0.2)';
    case 'neutral-opacity-grey-300':
      return 'rgba(0,0,0,0.3)';
    case 'neutral-opacity-grey-400':
      return 'rgba(0,0,0,0.4)';
    case 'neutral-opacity-grey-420':
      return 'rgba(0,0,0,0.42)';
    case 'neutral-opacity-grey-500':
      return 'rgba(0,0,0,0.5)';
    case 'neutral-opacity-grey-536':
      return 'rgba(0,0,0,0.536)';
    case 'neutral-opacity-grey-600':
      return 'rgba(0,0,0,0.6)';
    case 'neutral-opacity-grey-700':
      return 'rgba(0,0,0,0.7)';
    case 'neutral-opacity-grey-800':
      return 'rgba(0,0,0,0.8)';
    case 'neutral-opacity-grey-900':
      return 'rgba(0,0,0,0.9)';
    case 'primitive-blue-50':
      return '#E8F1FE';
    case 'primitive-blue-100':
      return '#D9E6FF';
    case 'primitive-blue-200':
      return '#C5D7FB';
    case 'primitive-blue-300':
      return '#9DB7F9';
    case 'primitive-blue-400':
      return '#7096F8';
    case 'primitive-blue-500':
      return '#4979F5';
    case 'primitive-blue-600':
      return '#3460FB';
    case 'primitive-blue-700':
      return '#264AF4';
    case 'primitive-blue-800':
      return '#0031D8';
    case 'primitive-blue-900':
      return '#0017C1';
    case 'primitive-blue-1000':
      return '#00118F';
    case 'primitive-blue-1100':
      return '#000071';
    case 'primitive-blue-1200':
      return '#000060';
    case 'primitive-lightblue-50':
      return '#F0F9FF';
    case 'primitive-lightblue-100':
      return '#DCF0FF';
    case 'primitive-lightblue-200':
      return '#C0E4FF';
    case 'primitive-lightblue-300':
      return '#97D3FF';
    case 'primitive-lightblue-400':
      return '#57B8FF';
    case 'primitive-lightblue-500':
      return '#39ABFF';
    case 'primitive-lightblue-600':
      return '#008BF2';
    case 'primitive-lightblue-700':
      return '#0877D7';
    case 'primitive-lightblue-800':
      return '#0066BE';
    case 'primitive-lightblue-900':
      return '#0055AD';
    case 'primitive-lightblue-1000':
      return '#00428C';
    case 'primitive-lightblue-1100':
      return '#00316A';
    case 'primitive-lightblue-1200':
      return '#00234B';
    case 'primitive-cyan-50':
      return '#E9F7F9';
    case 'primitive-cyan-100':
      return '#C8F8FF';
    case 'primitive-cyan-200':
      return '#99F2FF';
    case 'primitive-cyan-300':
      return '#79E2F2';
    case 'primitive-cyan-400':
      return '#2BC8E4';
    case 'primitive-cyan-500':
      return '#01B7D6';
    case 'primitive-cyan-600':
      return '#00A3BF';
    case 'primitive-cyan-700':
      return '#008DA6';
    case 'primitive-cyan-800':
      return '#008299';
    case 'primitive-cyan-900':
      return '#006F83';
    case 'primitive-cyan-1000':
      return '#006173';
    case 'primitive-cyan-1100':
      return '#004C59';
    case 'primitive-cyan-1200':
      return '#003741';
    case 'primitive-green-50':
      return '#E6F5EC';
    case 'primitive-green-100':
      return '#C2E5D1';
    case 'primitive-green-200':
      return '#9BD4B5';
    case 'primitive-green-300':
      return '#71C598';
    case 'primitive-green-400':
      return '#51B883';
    case 'primitive-green-500':
      return '#2CAC6E';
    case 'primitive-green-600':
      return '#259D63';
    case 'primitive-green-700':
      return '#1D8B56';
    case 'primitive-green-800':
      return '#197A4B';
    case 'primitive-green-900':
      return '#115A36';
    case 'primitive-green-1000':
      return '#0C472A';
    case 'primitive-green-1100':
      return '#08351F';
    case 'primitive-green-1200':
      return '#032213';
    case 'primitive-lime-50':
      return '#EBFAD9';
    case 'primitive-lime-100':
      return '#D0F5A2';
    case 'primitive-lime-200':
      return '#C0F354';
    case 'primitive-lime-300':
      return '#ADE830';
    case 'primitive-lime-400':
      return '#9DDD15';
    case 'primitive-lime-500':
      return '#8CC80C';
    case 'primitive-lime-600':
      return '#7EB40D';
    case 'primitive-lime-700':
      return '#6FA104';
    case 'primitive-lime-800':
      return '#618E00';
    case 'primitive-lime-900':
      return '#507500';
    case 'primitive-lime-1000':
      return '#3E5A00';
    case 'primitive-lime-1100':
      return '#2C4100';
    case 'primitive-lime-1200':
      return '#1E2D00';
    case 'primitive-yellow-50':
      return '#FBF5E0';
    case 'primitive-yellow-100':
      return '#FFF0B3';
    case 'primitive-yellow-200':
      return '#FFE380';
    case 'primitive-yellow-300':
      return '#FFD43D';
    case 'primitive-yellow-400':
      return '#FFC700';
    case 'primitive-yellow-500':
      return '#EBB700';
    case 'primitive-yellow-600':
      return '#D2A400';
    case 'primitive-yellow-700':
      return '#B78F00';
    case 'primitive-yellow-800':
      return '#A58000';
    case 'primitive-yellow-900':
      return '#927200';
    case 'primitive-yellow-1000':
      return '#806300';
    case 'primitive-yellow-1100':
      return '#6E5600';
    case 'primitive-yellow-1200':
      return '#604B00';
    case 'primitive-orange-50':
      return '#FFEEE2';
    case 'primitive-orange-100':
      return '#FFDFCA';
    case 'primitive-orange-200':
      return '#FFC199';
    case 'primitive-orange-300':
      return '#FFA66D';
    case 'primitive-orange-400':
      return '#FF8D44';
    case 'primitive-orange-500':
      return '#FF7628';
    case 'primitive-orange-600':
      return '#FB5B01';
    case 'primitive-orange-700':
      return '#E25100';
    case 'primitive-orange-800':
      return '#C74700';
    case 'primitive-orange-900':
      return '#AC3E00';
    case 'primitive-orange-1000':
      return '#8B3200';
    case 'primitive-orange-1100':
      return '#6D2700';
    case 'primitive-orange-1200':
      return '#541E00';
    case 'primitive-red-50':
      return '#FDEEEE';
    case 'primitive-red-100':
      return '#FFDADA';
    case 'primitive-red-200':
      return '#FFBBBB';
    case 'primitive-red-300':
      return '#FF9696';
    case 'primitive-red-400':
      return '#FF7171';
    case 'primitive-red-500':
      return '#FF5454';
    case 'primitive-red-600':
      return '#FE3939';
    case 'primitive-red-700':
      return '#FA0000';
    case 'primitive-red-800':
      return '#EC0000';
    case 'primitive-red-900':
      return '#CE0000';
    case 'primitive-red-1000':
      return '#00118F';
    case 'primitive-red-1100':
      return '#850000';
    case 'primitive-red-1200':
      return '#620000';
    case 'primitive-magenta-50':
      return '#F3E5F4';
    case 'primitive-magenta-100':
      return '#FFD0FF';
    case 'primitive-magenta-200':
      return '#FFAEFF';
    case 'primitive-magenta-300':
      return '#FF8EFF';
    case 'primitive-magenta-400':
      return '#F661F6';
    case 'primitive-magenta-500':
      return '#F137F1';
    case 'primitive-magenta-600':
      return '#DB00DB';
    case 'primitive-magenta-700':
      return '#C000C0';
    case 'primitive-magenta-800':
      return '#AA00AA';
    case 'primitive-magenta-900':
      return '#8B008B';
    case 'primitive-magenta-1000':
      return '#6C006C';
    case 'primitive-magenta-1100':
      return '#500050';
    case 'primitive-magenta-1200':
      return '#3B003B';
    case 'primitive-purple-50':
      return '#F1EAFA';
    case 'primitive-purple-100':
      return '#ECDDFF';
    case 'primitive-purple-200':
      return '#DDC2FF';
    case 'primitive-purple-300':
      return '#CDA6FF';
    case 'primitive-purple-400':
      return '#BB87FF';
    case 'primitive-purple-500':
      return '#A565F8';
    case 'primitive-purple-600':
      return '#8843E1';
    case 'primitive-purple-700':
      return '#6F23D0';
    case 'primitive-purple-800':
      return '#5C10BE';
    case 'primitive-purple-900':
      return '#5109AD';
    case 'primitive-purple-1000':
      return '#41048E';
    case 'primitive-purple-1100':
      return '#30016C';
    case 'primitive-purple-1200':
      return '#21004B';
    case 'semantic-success-1':
      return '#259D63';
    case 'semantic-success-2':
      return '#197A4B';
    case 'semantic-error-1':
      return '#EC0000';
    case 'semantic-error-2':
      return '#CE0000';
    case 'semantic-warning-YL1':
      return '#B78F00';
    case 'semantic-warning-YL2':
      return '#927200';
    case 'semantic-warning-OR1':
      return '#FB5B01';
    case 'semantic-warning-OR2':
      return '#C74700';
    case 'focus-blue':
      return '#0877D7';
    case 'focus-yellow':
      return '#B78F00';
    default:
      return 'none';
  }
};

export type textType =
  | 'Headline/XXL'
  | 'Headline/XL'
  | 'Headline/L'
  | 'Headline/M'
  | 'Headline/S'
  | 'Headline/XS'
  | 'Headline/XXS'
  | 'Body/L'
  | 'Body/M'
  | 'Label/L'
  | 'Label/M'
  | 'Caption/L'
  | 'Caption/M'
  | 'Button';
type textProp = {
  size?: string;
  weight?: string;
  lineHeight?: string;
  letterSpacing?: string;
};

export const getTextProp = (type: textType): textProp => {
  const def: textProp = {
    size: '16px',
    weight: '400',
    lineHeight: '170%',
    letterSpacing: '0.04em',
  };
  switch (type) {
    case 'Headline/XXL':
      return { ...def, size: '57px', lineHeight: '140%' };
    case 'Headline/XL':
      return { ...def, size: '45px', lineHeight: '140%' };
    case 'Headline/L':
      return { ...def, size: '36px', lineHeight: '140%' };
    case 'Headline/M':
      return { ...def, size: '32px', lineHeight: '150%' };
    case 'Headline/S':
      return { ...def, size: '28px', lineHeight: '150%' };
    case 'Headline/XS':
      return { ...def, size: '24px', lineHeight: '150%' };
    case 'Headline/XXS':
      return { ...def, size: '20px', lineHeight: '150%' };
    case 'Body/L':
      return { ...def, size: '16px', lineHeight: '170%' };
    case 'Body/M':
      return { ...def, size: '14px', lineHeight: '170%' };
    case 'Label/L':
      return { ...def, size: '14px', weight: '500', lineHeight: '150%' };
    case 'Label/M':
      return { ...def, size: '12px', weight: '500', lineHeight: '150%' };
    case 'Caption/L':
      return {
        ...def,
        size: '12px',
        lineHeight: '170%',
        letterSpacing: '0.02em',
      };
    case 'Caption/M':
      return {
        ...def,
        size: '10px',
        lineHeight: '170%',
        letterSpacing: '0.02em',
      };
    case 'Button':
      return {
        ...def,
        size: '16px',
        lineHeight: '150%',
        weight: '700',
      };
    default:
      return def;
  }
};

export const useTypography = (type: textType, color?: colorType) => {
  const props = getTextProp(type);
  const textColor = color ? getColor(color) : 'inherit';
  return css`
    color: ${textColor};
    font-family: 'Noto Sans JP', 'Noto Sans';
    font-style: normal;
    font-weight: ${props.weight};
    font-size: ${props.size};
    line-height: ${props.lineHeight};
    letter-spacing: ${props.letterSpacing};
    &:disabled {
      color: ${getColor('neutral-opacity-grey-420')} !important;
    }
  `;
};

const spaceUnit = 8;
export const spaces = {
  XXS: `${spaceUnit * 0.5}px` /**  4px */,
  XS: `${spaceUnit * 1}px` /**  8px */,
  S: `${spaceUnit * 2}px` /** 16px */,
  M: `${spaceUnit * 3}px` /** 24px */,
  L: `${spaceUnit * 5}px` /** 40px */,
  XL: `${spaceUnit * 8}px` /** 64px */,
  XXL: `${spaceUnit * 13}px` /** 104px */,
};

export const radius = {
  None: '0px',
  Card_S: '8px',
  Card_M: '16px',
  Card_L: '32px',
  S: '8px',
  M: '12px',
  L: '16px',
  Full: '50%',
};

export const zIndex = Object.freeze({
  main: 0,
  drawer: 1,
  modal: 3,
});

export interface ByScreen<T> {
  large?: T;
  medium?: T;
  small?: T;
}
export interface RuleSetByScreen extends ByScreen<RuleSet<object>> {}
const defaultSize: ByScreen<number> = {
  large: 1920,
  medium: 1440,
  small: 1024,
};
export type screenSize = keyof typeof defaultSize;
export const media = ((breakpoints: ByScreen<number>) => {
  const getSize = (size: screenSize) => {
    switch (size) {
      case 'large':
        return `${breakpoints.large}px`;
      case 'medium':
        return `${breakpoints.medium}px`;
      case 'small':
        return `${breakpoints.small}px`;
    }
  };

  const lessThan =
    (size: screenSize) =>
    (styles: any, ...interpolations: Interpolation<object>[]) =>
      css`
        @media (max-width: ${getSize(size)}) {
          ${css(styles, ...interpolations)}
        }
      `;
  const greaterThan =
    (size: screenSize) =>
    (styles: any, ...interpolations: Interpolation<object>[]) =>
      css`
        @media (min-width: ${getSize(size)}) {
          ${css(styles, ...interpolations)}
        }
      `;
  const between =
    (min: screenSize, max: screenSize) =>
    (styles: any, ...interpolations: Interpolation<object>[]) =>
      css`
        @media (min-width: ${getSize(min)}) and (max-width: ${getSize(max)}) {
          ${css(styles, ...interpolations)}
        }
      `;
  const isLessThan = (size: screenSize) =>
    matchMedia(`(max-width: ${getSize(size)})`).matches;
  const isGreaterThan = (size: screenSize) =>
    matchMedia(`(min-width: ${getSize(size)})`).matches;
  const isBetween = (min: screenSize, max: screenSize) =>
    matchMedia(`(min-width: ${getSize(min)}) and (max-width: ${getSize(max)})`)
      .matches;

  return {
    getSize,
    lessThan,
    greaterThan,
    between,
    isLessThan,
    isGreaterThan,
    isBetween,
  };
})(defaultSize);
