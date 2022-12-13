import { Badge, Flex, Text, AspectRatio } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import React from "react";
import data from "../data/index"
import ReactPlayer from 'react-player'
import Image from 'next/image'

import { IoLocation } from "react-icons/io5";

const PlaceDetail = ({ place }) => {

  return (
    <Flex direction={"column"}>
    <Flex
      bg={"whiteAlpha.200"}
      px={4}
      py={2}
      mb={2}
      shadow="lg"
      direction={"column"}
      //alignItems={"start"}
      // justifyContent="space-between"
      rounded={10}
    >
      <Flex justifyContent={"space-between"} width="full">
        <Flex
          direction={"column"}
          justifyContent={"start"}
          alignItems={"start"}
          width="full"
          px={2}
        >
          <Flex
            alignItems={"center"}
            width={"full"}
            justifyContent={"space-between"}
            marginBottom={5}
          >
            <Text
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={"500"}
              style={{fontSize:25, position:"center", fontFamily: "Montserrat", fontWeight: "bolder"}}
            >
              {place.era != undefined ? place?.era : place.religion }
            </Text>
            <Text
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={"500"}
              style={{fontSize:25, position:"center", fontFamily: "Montserrat", fontWeight: "bolder"}}
            >
              {place.era != undefined ? place.religion : "" }
            </Text>

       
            
          </Flex>
          
            { (place.text[0] ) && 
              <>
              { place.videos[0] &&
              <iframe id="existing-iframe-example"
              width="600" height="360"
              src={place.videos[0]}
              frameBorder="0"
              style={{ marginRight: '5px' }}
              allowFullScreen
              ></iframe>
               }
              
              
              <Text   margin={5} fontSize={"sm"} style={{ flex: 1, flexWrap: 'wrap', fontSize: 20, fontFamily: "Montserrat" }} position="relative" color={"gray.200"}>
              { place.images[0] &&
                <Image
                src={"/"+place.images[0]} 
                alt=""
                width="600" 
                height="360"
                />
                }
                  {place.text[0]}
                </Text></>
            }
             
             { ( place.text[1] ) && 
               <>
               { place.videos[1] &&
               <iframe id="existing-iframe-example"
               width="600" height="360"
               src={place.videos[1]}
               frameBorder="0"
               style={{ marginRight: '5px' }}
               allowFullScreen
               ></iframe>
                }
               
               <Text   margin={5} fontSize={"sm"} style={{ flex: 1, flexWrap: 'wrap', fontSize: 20, fontFamily: "Montserrat" }} position="relative" color={"gray.200"}>
                { place.images[1] &&
                <Image
                src={"/"+place.images[1]} 
                alt=""
                width="600" 
                height="360"
                />
                }

               {place.text[1]}
               </Text></>
            }

                 
          { ( place.text[2] ) && 
               <>
               { place.videos[2] &&
               <iframe id="existing-iframe-example"
               width="600" height="360"
               src={place.videos[2]}
               frameBorder="0"
               style={{ marginRight: '5px' }}
               allowFullScreen
               ></iframe>
                }
               
               <Text   margin={5} fontSize={"sm"} style={{ flex: 1, flexWrap: 'wrap', fontSize: 20, fontFamily: "Montserrat" }} position="relative" color={"gray.200"}>
               { place.images[2] &&
                <Image
                src={"/"+place.images[2]} 
                alt=""
                width="600" 
                height="360"
                />
                }

               {place.text[2]}
               </Text></>
            }
            
        </Flex>
      </Flex>
    </Flex>
    </Flex>
    
  );
};

export default PlaceDetail;
