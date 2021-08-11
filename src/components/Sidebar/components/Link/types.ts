import { ElementType } from "react";
import { LinkProps as LinkChakraProps } from "@chakra-ui/react";

export type LinkProps = LinkChakraProps & {
  icon: ElementType;
  children: string;
}