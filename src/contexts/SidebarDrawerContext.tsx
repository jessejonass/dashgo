import { FC, createContext, useContext, ReactNode } from "react";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

type SidebarDrawerProviderProps = {
  children: ReactNode;
};

// type returned values from context
type SideBarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SideBarDrawerContextData);

const SidebarDrawerProvider: FC<SidebarDrawerProviderProps> = ({
  children,
}) => {
  const disclosure = useDisclosure();
  const router = useRouter();

  // close modal when change router
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]); // eslint-disable-line

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

export default SidebarDrawerProvider;
export const useSideBarDrawer = () => useContext(SidebarDrawerContext);
