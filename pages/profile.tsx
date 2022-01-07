import withPublic from "../hooks/route/withPublic";
import { Badge, chakra, Code, Container, Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";
// import withProtected from "../hooks/route/withProtected";

import useAuth from "../lib/authProvider";

const Profile = () => {
  const { currentUser } = useAuth();
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
};

export default Profile;
// export default Profile;
