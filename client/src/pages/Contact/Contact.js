import { Box, VStack, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header";
import ContactContainer from "../Contact/ContactContainer";

const Contact = () => {
  return (
    <Box width="100vw">
      <Header />
      <Box>
        <VStack>
          <Text fontSize="3xl"> Contact Us</Text>
          <Text fontSize="lg">
            {" "}
            Any Questions or Remarks? Leave us a message{" "}
          </Text>
        </VStack>
      </Box>

      <Box mt="50px">
        <ContactContainer />
      </Box>
    </Box>
  );
};
export default Contact;