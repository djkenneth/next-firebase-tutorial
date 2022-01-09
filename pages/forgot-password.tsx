import { useState } from "react";
import { useRouter } from "next/router";
import useAuth from "../lib/authProvider";

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

// Components
import { Card } from "../components/Card";
import DividerWithText from "../components/DividerWithText";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const toast = useToast();
  const { forgotPassword } = useAuth();

  return (
    <div>
      <Heading textAlign="center" my={12}>
        Forgot password
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            // your forgot password logic here
            forgotPassword(email)
              .then((res) => {
                console.log(res);
                toast({
                  description:
                    "Your email is successfully sent. Please check your email.",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
              })
              .catch((e) => {
                console.error(e.message);
                toast({
                  description: e.message,
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              });
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
            <Button type="submit" colorScheme="primary" size="lg" fontSize="md">
              Submit
            </Button>
          </Stack>
        </chakra.form>
        <DividerWithText my={6}>OR</DividerWithText>
        <Center>
          <Button variant="link" onClick={() => router.push("/login")}>
            Login
          </Button>
        </Center>
      </Card>
    </div>
  );
};

export default ForgotPassword;
