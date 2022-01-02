import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import useAuth from "../lib/authProvider";
import useMounted from "../hooks/useMounted";
import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import withPublic from "../hooks/route/withPublic";

// Icons
import { FaGoogle } from "react-icons/fa";

// Components
import { Card } from "../components/Card";
import DividerWithText from "../components/DividerWithText";
import Layout from "../components/Layout";

const Register = () => {
  const { register } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const mounted = useMounted();

  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Register
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            // your register logic here
            if (!email || !password) {
              toast({
                description: "Credentials not valid",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
            setIsSubmitting(true);
            register(email, password)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.error(err.message);
                toast({
                  description: err.message,
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              })
              .finally(() => mounted.current && setIsSubmitting(false));
          }}
        >
          <Stack spacing="6">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                autoComplete="password"
                required
              />
            </FormControl>
            <Button
              isLoading={isSubmitting}
              type="submit"
              colorScheme="primary"
              size="lg"
              fontSize="md"
            >
              Sign up
            </Button>
          </Stack>
        </chakra.form>
        <Center my={4}>
          <Button variant="link" onClick={() => router.push("/login")}>
            Login
          </Button>
        </Center>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant="outline"
          isFullWidth
          colorScheme="red"
          leftIcon={<FaGoogle />}
          onClick={() => alert("sign in with google")}
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  );
};

// export default withPublic(Register);
export default Register;
