import { InputProps as ChakraInputProps } from "@chakra-ui/react";

export type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
};
