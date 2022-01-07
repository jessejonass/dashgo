import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { FC } from 'react';

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
};

const Input: FC<InputProps> = ({ name, label, ...props }) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="email">{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bg: 'gray.900',
        }}
        {...props}
      />
    </FormControl>
  );
};

export default Input;
