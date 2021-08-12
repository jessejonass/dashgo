import { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { FieldError } from 'react-hook-form';

export type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
  error?: FieldError
};
