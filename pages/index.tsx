import { Box, Text, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import prisma from "../lib/prisma";
import GradientLayout from "../components/gradientLayout";
import { useMe } from "../lib/hooks";

const Home = ({ artists }) => {
  const { user } = useMe();

  return (
    <GradientLayout
      color="green"
      subtitle="個人檔案"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistCount} 個公開播放清單`}
      roundImage
      image="https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="20px">
          <Text fontSize="2xl" fontWeight="bold">
            本月最熱門藝人
          </Text>
          <Text fontSize="sm">僅自己可見</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image src="https://i.pravatar.cc/300" borderRadius="100%" />
                <Box marginTop="15px">
                  <Text fontWeight="bold" fontSize="large">
                    {artist.name}
                  </Text>
                  <Text fontSize="small">藝人</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};

export default Home;
