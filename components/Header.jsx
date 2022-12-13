import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

import {
  BiChevronDown,
  BiTime
} from "react-icons/bi";
import Swal from 'sweetalert2'
import 'animate.css';

const Header = ({ setType, setTimePeriod, setTime }) => {

 

  return (
    <Flex
      position={"absolute"}
      
      top={0}
      left={0}
      width={"full"}
      px={4}
      py={2}
      zIndex={101}
      bg={"#191a1a"}

    >
      <Flex  bg={"#191a1a"}
>
        <div style={{ width: "35vw", marginRight: 20 }}>
          <Text style={{ fontSize: 35, fontVariantEastAsian: "ruby", fontFamily: "Montserrat", fontWeight: "bolder", color:"white" }}>
            Religious Freedom History in China
          </Text>
        </div>

        <Flex alignItems={"center"} justifyContent={"center"} gridAutoFlow={"column"}
              bg={"#191a1a"}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"whiteAlpha.200"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "orange.500" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}

          >
            <Menu>
              <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"} >
                <div style={{ justifyContent: "space-around", display: "grid", gap: "1rem", gridAutoFlow: "column" }}>
                  <BiTime fontSize={25} />
                  <Text style={{ marginLeft: 2, fontFamily: "Montserrat", fontWeight: "bolder"}}>Time Period </Text>
                  <BiChevronDown fontSize={25} />
                </div>
              </MenuButton>

              <MenuList  bg={"black"}>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => {setTimePeriod("1900-1950"); setTime("1900-1950")} }
                  bg={"black"}

                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    1900-1950
                  </Text>
                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => {setTimePeriod("1950-1980"); setTime("1950-1980")}}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    1950-1980
                  </Text>

                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => {setTimePeriod("1980-2000"); setTime("1980-2000")}}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    1980-2000
                  </Text>

                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => {setTimePeriod("2000-current"); setTime("2000-current")}}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    2000-current
                  </Text>

                </MenuItem>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => {setTime("All")}}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    Show All Periods On Map
                  </Text>

                </MenuItem>


              </MenuList>

            </Menu>
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"whiteAlpha.200"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "orange.500" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("Christianity")}
          >
            <Text fontSize={16} fontWeight={500} style={{fontFamily: "Montserrat", fontWeight: "bolder"}}>
              Christinity
            </Text>
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"whiteAlpha.200"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "orange.500" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("Buddhism")}
          >
            <Text fontSize={16} style={{fontFamily: "Montserrat", fontWeight: "bolder"}} fontWeight={500}>
              Buddahism
            </Text>
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            ml={4}
            bg={"whiteAlpha.200"}
            rounded={"full"}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "orange.500" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("Islam")}
          >
            <Text fontSize={16} style={{fontFamily: "Montserrat", fontWeight: "bolder"}} fontWeight={500}>
              Islam
            </Text>
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            ml={4}
            bg={"whiteAlpha.200"}
            rounded={"full"}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "orange.500" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("Daoism")}
          >
            <Text fontSize={16} style={{fontFamily: "Montserrat", fontWeight: "bolder"}} fontWeight={500}>
              Daosim
            </Text>
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            ml={4}
            bg={"whiteAlpha.200"}
            rounded={"full"}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "orange.500" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("Other")}
          >
            <Text fontSize={16} fstyle={{fontFamily: "Montserrat", fontWeight: "bolder"}} ontWeight={500}>
              Other
            </Text>

          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"whiteAlpha.200"}
            marginLeft={280}
            rounded={"full"}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "orange.500" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => {
              Swal.fire({
                title: 'About',
                html: `
                This website is developed by Sultan Alahmadi<br>
                the idea for this website came as a final project submission
                for Prof. Fenggang Yang class SOC369: Chinese Religion taught&nbsp;at Purdue University.
                All the data sets used for mapping are provided through Purdue University.<br>
                This website code is public so you can view the code and suggest changes through the public gitub&nbsp <br>
                repoistaroy, all references used can be found there as well: <a href=https://github.com/suahmadi> <span style="color: #0000ff;"> <strong>Github Repo</strong></span> </a> <br>
                For contact please email: <span style="color: #0000ff;"> <strong> <a href="mailto:suahmadi.dev@gmail.com">suahmadi.dev@gmail.com </strong></span> </a>
                </div>`,
                
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            }}
          >
            <Text fontSize={16} style={{fontFamily: "Montserrat", fontWeight: "bolder"}} fontWeight={500}>
              About
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
