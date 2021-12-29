import { useState } from "react";
import { useRouter } from "next/router";

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
          }}
        >
          <Stack spacing="6">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input name="email" type="email" autoComplete="email" required />
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
