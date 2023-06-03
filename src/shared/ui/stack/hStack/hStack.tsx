import { Flex, FlexProps } from '../flex/flex';

export type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => (
    <Flex {...props} direction="row" />
);
