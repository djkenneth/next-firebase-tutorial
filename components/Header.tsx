import Link from "next/link";
import { logout, useAuth } from "../lib/authProvider";
import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import Navlink from "./Navlink";

const Header = () => {
  const { toggleColorMode } = useColorMode();

  const { currentUser } = useAuth();

  return (
    <Box
      borderBottom="2px"
      borderBottomColor={useColorModeValue("gray.100", "gray.700")}
      mb={4}
    >
      <HStack py={4} justifyContent="flex-end" maxW="container.lg" mx="auto">
        <Navlink to="/" name="Firebase Authentication" size="lg" />
        <Spacer />
        {!currentUser && <Navlink to="/login" name="Login" />}
        {currentUser && <Navlink to="/colors" name="Colors" />}
        {!currentUser && <Navlink to="/register" name="Register" />}
        {currentUser && <Navlink to="/profile" name="Profile" />}
        {/* <Navlink to="/protected-page" name="Protected" /> */}
        {currentUser && (
          <Navlink
            to="/logout"
            name="Logout"
            onClick={async (e) => {
              e.preventDefault();
              // handle logout
              logout();
            }}
          />
        )}

        <IconButton
          variant="outline"
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label="toggle-dark-mode"
        />
      </HStack>
    </Box>

    // <div>
    //   <ul className="header">
    //     <li>
    //       <Link href="/">
    //         <a>Index</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/colors">
    //         <a>Colors</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/posts">
    //         <a>Posts</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/login">
    //         <a>Login</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/vehicle">
    //         <a>Vehicle</a>
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Header;
