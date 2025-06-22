import { TabLayoutOptions } from './tab-layout.type';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

export type FooterProps = {
    icon: IconProp;
    iconSize?: SizeProp;
    onClick?: VoidFunction;
} & TabLayoutOptions;
