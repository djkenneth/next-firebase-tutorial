export default async function handler(req, res) {
  const { token } = req.body;
  const data = await handleTokenVerification(token);
  res.status(data.code).json({
    msg: data.msg,
    token: data.token,
  });
}
