import { typography } from 'styles/general/typography';

export type VariantTypography = keyof typeof typography;

export enum TextVariants {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  VIOLET = 'VIOLET',
}

export type OptionType = {
  label: string;
  value: string;
};

export enum BreakpointsEnum {
  lg = 1440,
  lgm = 1200,
  md = 1024,
  sm = 768,
  s = 576,
  xs = 380,
  xxs = 342,
}

export enum DocumentsTabsSlug {
  PRIVACY_POLICY = 'konfidentsialnost',
  TERMS_OF_USE = 'polzovatelskoe-soglashenie',
  CONDITIONS_FOR_OWNER = 'usloviya-dlya-sobstvennika',
  CONDITIONS_FOR_TENANT = 'usloviya-dlya-rendatora',
  AGREEMENT = 'dogovor-arendy',
}

export type BreakpointsType = keyof typeof BreakpointsEnum;

export * from './card';

export type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[] ? ElementType : never;
