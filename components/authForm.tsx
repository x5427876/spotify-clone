import { Box, Flex, Text } from "@chakra-ui/layout";
import { Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import { BsSpotify } from "react-icons/bs";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const user = await auth(mode, { email, password });
    setIsLoading(false);

    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex justify="center" align="center" height="100px">
        <BsSpotify size={40} viewBox="0 0 16 16" fill="#FFFFFF" />
        <Text
          fontSize="25px"
          marginLeft="10px"
          color="#FFFFFF"
          fontWeight="600"
        >
          Spotify
        </Text>
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                "&:hover": {
                  bg: "green.400",
                },
              }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
