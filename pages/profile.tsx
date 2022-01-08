import { Badge, chakra, Container, Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";
import UseAuth from "../lib/authProvider";

export default function Profile() {
  const { currentUser } = UseAuth();
  return (
    <Layout>
      <Heading>
        Profile page
        <Badge colorScheme="green" fontSize="lg" mx={4}>
          Protected Page
        </Badge>
      </Heading>

      <Container maxW="container.lg" overflowX="auto" py={4}>
        <chakra.pre>{JSON.stringify(currentUser, null, 2)}</chakra.pre>
      </Container>
    </Layout>
  );
}

Profile.requireAuth = true;
