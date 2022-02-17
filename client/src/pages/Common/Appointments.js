import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  HStack,
  Icon,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import AppointmentCard from "../../components/Cards/AppointmentCard";
import AppointmentData from "../../data/AppointmentData.json";
import AppointmentDetails from "./AppointmentDetails";

const appointmentExample = {
  id: 10,
  services: ["Hair Drying", "HairCut"],
  starting_time: "9:00am",
  end_time: "10:00am",
  client: "Johanness Doe",
  staff: "John Doe",
  status: "confirmed",
  date_created: "20/02/2022",
};

const Appointments = () => {
  return (
    <Box h="100vh">
      <HStack>
        <Text fontSize="1.4em" textAlign="left">
          Appointments
        </Text>
        <Spacer />
        <HStack>
          <Text>Add</Text>
          <Icon as={AddIcon} />
        </HStack>
      </HStack>
      <Divider my={2} />
      <Flex>
        <Box width="50%" h="100vh">
          <Tabs
            h="100vh"
            variant="line"
            colorScheme="green"
            isLazy
            borderColor="transparent"
          >
            <TabList>
              <Tab>All</Tab>
              <Tab>Pending</Tab>
              <Tab>Confirmed</Tab>
              <Tab>Cancelled</Tab>
              <Tab>Postponed</Tab>
            </TabList>
            <TabPanels h="100vh">
              <TabPanel overflowY="scroll" h="inherit">
                {AppointmentData.map((appointment) => {
                  return (
                    <AppointmentCard
                      appointment={appointment}
                      key={appointment.id}
                    />
                  );
                })}
              </TabPanel>
              <TabPanel overflowY="scroll" h="inherit">
                {AppointmentData.filter(
                  (appointment) => appointment.status === "pending"
                ).map((appointment) => {
                  return (
                    <AppointmentCard
                      appointment={appointment}
                      key={appointment.id}
                    />
                  );
                })}
              </TabPanel>
              <TabPanel overflowY="scroll" h="inherit">
                {AppointmentData.filter(
                  (appointment) => appointment.status === "confirmed"
                ).map((appointment) => {
                  return (
                    <AppointmentCard
                      appointment={appointment}
                      key={appointment.id}
                    />
                  );
                })}
              </TabPanel>
              <TabPanel overflowY="scroll" h="inherit">
                {AppointmentData.filter(
                  (appointment) => appointment.status === "cancelled"
                ).map((appointment) => {
                  return (
                    <AppointmentCard
                      appointment={appointment}
                      key={appointment.id}
                    />
                  );
                })}
              </TabPanel>
              <TabPanel overflowY="scroll" h="inherit">
                {AppointmentData.filter(
                  (appointment) => appointment.status === "postponed"
                ).map((appointment) => {
                  return (
                    <AppointmentCard
                      appointment={appointment}
                      key={appointment.id}
                    />
                  );
                })}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Divider orientation="vertical" borderWidth="1px" h="100vh" />
        <Box width="50%" px={5} py={2}>
          <Text textAlign="left" fontWeight="bold" fontSize="1.3rem">
            Appointment Details
          </Text>
          <AppointmentDetails appointment={appointmentExample} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Appointments;
