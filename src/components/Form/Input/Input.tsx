import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as InputChakra,
} from "@chakra-ui/react";
import { InputProps } from "./types";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputChakra
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: "gray.900",
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

const Input = forwardRef(InputBase);
export default Input;
