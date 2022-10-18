import NextLink from "next/link";
import {
  List,
  Box,
  ListItem,
  ListIcon,
  Divider,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/layout";

import { MdLibraryMusic, MdPlaylistAdd, MdFavorite } from "react-icons/md";
import { BsSpotify } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { RiSearchLine } from "react-icons/ri";
import { usePlaylist } from "../lib/hooks";

const navMenu = [
  { name: "首頁", icon: GrHomeRounded, route: "/" },
  { name: "搜尋", icon: RiSearchLine, route: "/search" },
  { name: "你的音樂庫", icon: MdLibraryMusic, route: "/library" },
];

const playlistMenu = [
  { name: "建立播放清單", icon: MdPlaylistAdd, route: "/" },
  { name: "已按讚的歌曲", icon: MdFavorite, route: "/collection" },
];

const Sidebar = () => {
  const { playlists } = usePlaylist();
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box
          width="120px"
          marginBottom="30px"
          paddingX="20px"
          display="flex"
          alignItems="center"
          w="100%"
        >
          <BsSpotify size={40} viewBox="0 0 16 16" fill="#FFFFFF" />
          <Text
            fontSize="25px"
            marginLeft="10px"
            color="#FFFFFF"
            fontWeight="600"
          >
            Spotify
          </Text>
        </Box>
        <Box marginY="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay display="flex" alignItems="center">
                      <ListIcon
                        w="24px"
                        h="24px"
                        as={menu.icon}
                        color="white"
                        fill="gray"
                        marginRight="20px"
                      />
                      <Text fontSize="18px" color="gray" fontWeight="600">
                        {menu.name}
                      </Text>
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {playlistMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay display="flex" alignItems="center">
                      <ListIcon
                        w="24px"
                        h="24px"
                        as={menu.icon}
                        color="white"
                        fill="gray"
                        marginRight="20px"
                      />
                      <Text fontSize="18px" color="gray" fontWeight="600">
                        {menu.name}
                      </Text>
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider bg="gray.700" width="225px" marginX="8px" />
        <Box height="60%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((playlist) => (
              <ListItem
                paddingX="20px"
                fontSize="16px"
                key={playlist.id}
                sx={{
                  transition: "all .1s",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <LinkBox>
                  <NextLink
                    href={{
                      pathname: "/playlist/[id]",
                      query: { id: playlist.id },
                    }}
                  >
                    <LinkOverlay>{playlist.name}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
