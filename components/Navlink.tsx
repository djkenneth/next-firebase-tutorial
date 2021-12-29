import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Navlink = ({ to, name, ...rest }) => {
  const router = useRouter();

  const isActive = router.pathname === to;

  return (
    <Link href={to} passHref>
      <Button
        as="a"
        variant={isActive ? "outline" : "ghost"}
        colorScheme={isActive ? "primary" : "gray"}
        {...rest}
      >
        {name}
      </Button>
    </Link>
  );
};

export default Navlink;
