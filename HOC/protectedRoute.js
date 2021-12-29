export function protectedRoute(gssp) {
  return async (ctx) => {
    const { req } = ctx;

    if (req.headers.cookie) {
      const tokens = req.headers.cookie.split(";");
      const token = tokens.find((token) => token.includes("accessToken"));

      if (!token) {
        return {
          redirect: {
            parmanent: false,
            destination: "/login",
          },
        };
      }
    }

    return await gssp(ctx);
  };
}
