import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Card } from "../components/Card";
import useAuth from "../lib/authProvider";
import { useRouter } from "next/router";

export default function ResetPasswordPage() {
  const { resetPassword } = useAuth();
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const toast = useToast();

  const { oobCode, continueUrl } = router.query;
  return (
    <div>
      <Heading textAlign="center" my={12}>
        Reset password
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              await resetPassword(oobCode, newPassword);
              toast({
                description: "Password has been changed, you can login now.",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
              router.push("/login");
            } catch (error) {
              toast({
                description: error.message,
                status: "error",
                duration: 9000,
                isClosable: true,
              });
              console.log(error.message);
            }
          }}
        >
          <Stack spacing="6">
            <FormControl id="password">
              <FormLabel>New password</FormLabel>
              <Input
                type="password"
                autoComplete="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="pink" size="lg" fontSize="md">
              Reset password
            </Button>
          </Stack>
        </chakra.form>
      </Card>
    </div>
  );
}
