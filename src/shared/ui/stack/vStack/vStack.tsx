import { Flex, FlexProps } from '../flex/flex';

export type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => (
    <Flex {...props} direction="column" />
);
