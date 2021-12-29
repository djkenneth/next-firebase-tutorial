import { protectedRoute } from "../HOC/ProtectedRoute";

import { Badge, chakra, Code, Container, Heading } from "@chakra-ui/react";
import { Card } from "../components/Card";

import { useAuth } from "../lib/authProvider";

export default function Profile() {
  const { currentUser } = useAuth();
  return (
    <>
      <Heading>
        Profile page
        <Badge colorScheme="green" fontSize="lg" mx={4}>
          Protected Page
        </Badge>
      </Heading>

      <Container maxW="container.lg" overflowX="auto" py={4}>
        <chakra.pre>{JSON.stringify(currentUser, null, 2)}</chakra.pre>
      </Container>
    </>
  );
}
