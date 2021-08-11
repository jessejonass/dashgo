import { FC, cloneElement } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { ActiveLinkProps } from "./types";

const ActiveLink: FC<ActiveLinkProps> = ({
  children,
  shouldMatchExactHref = false,
  ...rest
}) => {
  let isActive = false;
  const { asPath } = useRouter();

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) ||
      asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link passHref {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
};

export default ActiveLink;
