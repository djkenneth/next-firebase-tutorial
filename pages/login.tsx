// -----------------------   LOGIN   --------------------------------- //

// import { NextPage } from "next";
// import { useRef, useState } from "react";
// import { signup, login, useAuth, logout } from "../firebase/initFirebase";

// const Login: NextPage = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const currentUser = useAuth() || null;

//   // const [email, setEmail] = useState<string>("");
//   // const [password, setPassword] = useState<string>("");
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await signup(emailRef?.current.value, passwordRef?.current.value);
//     } catch (err) {
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   const handleLogout = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await logout();
//     } catch (err) {
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   const handleLogin = async (e) => {
//     try {
//       e.preventDefault();
//       setLoading(true);
//       login(emailRef?.current.value, passwordRef?.current.value);
//     } catch (err) {
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   return (
//     <div style={{ marginTop: "30px", marginLeft: "30px", fontSize: "50px" }}>
//       <h5>Currently logged in as: {currentUser?.email}</h5>
//       <form onSubmit={handleSignUp}>
//         <input
//           ref={emailRef}
//           type="email"
//           placeholder="Enter your email"
//           required
//         />
//         <br />
//         <input
//           ref={passwordRef}
//           type="password"
//           placeholder="Enter your password"
//           required
//         />
//         <br />
//         <button disabled={loading || currentUser} type="submit">
//           Sign Up
//         </button>
//         <button disabled={loading || !currentUser} onClick={handleLogout}>
//           Log out
//         </button>
//         <button disabled={loading || currentUser} onClick={handleLogin}>
//           Log in
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// -----------------------   LOGIN 2   --------------------------------- //
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import UseAuth from "../lib/authProvider";
import useMounted from "../hooks/useMounted";
import NextLink from "next/link";
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
  Text,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";

// Icons
import { FaGoogle } from "react-icons/fa";

// Components
import { Card } from "../components/Card";
import DividerWithText from "../components/DividerWithText";
import Layout from "../components/Layout";

const Login = () => {
  const { currentUser, initializing, login, signInWithGoogle } = UseAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const mounted = useMounted();

  useEffect(() => {
    if (!initializing) {
      const accessToken = JSON.parse(sessionStorage.getItem("token"));
      if (accessToken || currentUser) {
        router.push("/profile");
      }
    }
  }, [currentUser, initializing, router]);

  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Login
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            // your login logic here
            if (!email || !password) {
              toast({
                description: "Credentials not valid",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
            setIsSubmitting(true);
            login(email, password)
              .then((res) => {
                router.push("/profile");
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
            {/* <PasswordField /> */}
            <Button
              isLoading={isSubmitting}
              type="submit"
              colorScheme="primary"
              size="lg"
              fontSize="md"
            >
              Sign in
            </Button>
          </Stack>
        </chakra.form>
        <HStack justifyContent="space-between" my={4}>
          <Button variant="link">
            <NextLink href="/forgot-password" passHref>
              <Link>Forgot password?</Link>
            </NextLink>
          </Button>
          <Button variant="link" onClick={() => router.push("/register")}>
            Register
          </Button>
        </HStack>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant="outline"
          isFullWidth
          colorScheme="red"
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then(() => router.push("/profile"))
              .catch((err) => console.error(err))
          }
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  );
};

export default Login;
