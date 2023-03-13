import {
  Box,
  Flex,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import PlayIcon from "../atoms/PlayIcon";

interface ListingVideoProps {
  thumbSrc: string;
  videoSrc: string;
}

const ListingVideo = ({ thumbSrc, videoSrc }: ListingVideoProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        role="group"
        rounded="lg"
        overflow="hidden"
        cursor="pointer"
        pos="relative"
        width={["full", "auto"]}
        textAlign="center"
        onClick={onOpen}
      >
        <Image
          objectFit="cover"
          w={["full", "275px"]}
          h={["300px", "full"]}
          alt="surfer"
          src={thumbSrc}
        />
        <Box
          pos="absolute"
          top="0"
          left="0"
          bgColor="none"
          _groupHover={{
            transitionDuration: "200ms",
            transitionTimingFunction: "ease-in-out",
            bgColor: "blackAlpha.400",
          }}
          _groupActive={{
            transitionDuration: "50ms",
            bgColor: "blackAlpha.600",
          }}
          width="full"
          height="full"
        >
          <Box
            pos="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <PlayIcon
              width="20"
              height="20"
              textColor="gray.100"
              _groupHover={{
                transitionDuration: "200ms",
                transitionTimingFunction: "ease-in-out",
                textColor: "white",
              }}
              _groupActive={{
                transitionDuration: "50ms",
                textColor: "gray.300",
              }}
              opacity="90%"
            />
          </Box>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
        <ModalOverlay bg="blackAlpha.500" backdropFilter="blur(10px)" />
        <ModalContent>
          <video height="720" width="1280" autoPlay muted loop>
            <source src={videoSrc} />
            <Box rounded="lg" bgColor="white">
              <Flex alignItems="center" justifyContent="center">
                Your browser does not support the video tag :(
              </Flex>
            </Box>
          </video>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ListingVideo;
