import { FC } from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

import { ProfileProps } from "./types";

const Profile: FC<ProfileProps> = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jessé Jonas</Text>
          <Text color="gray.300" fontSize="small">
            jessejonas13@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Jessé Jonas"
        src="https://github.com/jessejonass.png"
      />
    </Flex>
  );
};

export default Profile;
