import { Box, Flex, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";
import PlaceDetail from "./PlaceDetail";
import { data } from "../data";

const List = ({ places, isLoading, type, era }) => {
  if (isLoading)
    return (
      <Flex
        direction={"column"}
        bg={"#191a1a"}
        width={"37vw"}
        height="100vh"
        position={"relative"}
        left={0}
        top={0}
        color={"#191a1a"}
        zIndex={1}
        overflow="hidden"
        px={2}
      >
        <Box padding="6" boxShadow="lg" bg="#1ecbe1" mt={16}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        
      </Flex>
    );

  return (
    <Flex
      direction={"row"}
      bg={"#191a1a"}
      width={"37vw"}
      height="100vh"
      position={"absolute"}
      left={0}
      top={0}
      zIndex={1}
      overflow="hidden"
      px={2}
    >
      <Flex flex={1}   sx={
     { 
      '::-webkit-scrollbar': {
        width: '0.4em',
        width: '10px',
        left:'-100px'
      },
      '::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '0.5px solid slategrey',
        backgroundClip: 'padding-box',
        borderRadius: '9999px'
      }
    }
  } overflowY={"auto"} mt={16} direction={"column"} bg={"#191a1a"}>
        {type != "Other" ?
          data.map((place, i) => 
          { if (place.religion == type && place.era == era && place.era != undefined)  {return <PlaceDetail place={place} key={i} />}  
           } 
          ) : data.map((place, i) => 
          { if (place.era === undefined)  {return <PlaceDetail place={place} key={i} />}  
           } 
          )
        }


         
          
          
          
          
        
      </Flex>
    </Flex>
  );
};

export default List;
