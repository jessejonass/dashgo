import { FC } from "react";
import {
  FormControl,
  FormLabel,
  Input as InputElement,
} from "@chakra-ui/react";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputElement
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: "gray.900",
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
};

export default Input;
