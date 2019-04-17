const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://dev-246708.okta.com/oauth2/default',
  clientId: '0oafvaqmsRtxLk6nS356',
  assertClaims: {
    aud: 'api://default',
  },
});

async function fetchUser(header: any) {
  console.log('inside fetch user');
  const match = header.match(/Bearer (.+)/);

  if (!match) {
    return undefined;
  }

  const accessToken = match[1];
  // const accessToken = 'eyJraWQiOiJDc3Zwa2dEZ3g3ODJjbUlRTXBTMFpYRkJ6SWZNbmVBRWpNWnROcm9mdTJrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULldoeTBRS1pYQ3BNYlY4WkNrcTdVY3lBREZqWldZVy1xenNWVm5wWnNQOU0iLCJpc3MiOiJodHRwczovL2Rldi0yNDY3MDgub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTU1NDc4NzkxLCJleHAiOjE1NTU0ODIzOTEsImNpZCI6IjBvYWZ2YXFtc1J0eExrNm5TMzU2IiwidWlkIjoiMDB1ZnY1ODhpajY1N3Y4U3YzNTYiLCJzY3AiOlsib3BlbmlkIl0sInN1YiI6InZpc2hhbC50ZXdhdGlhQHN1Y2Nlc3NpdmUudGVjaCJ9.pXyhnKL0T79fy8oXTkgvy5xk6fifrQ5DzZKdMSms2cvNnckdi7svCE9a6wcPPhERRmnsrp36DU_ukFcN6XfxtJl30fhuqEPqCI_XuShwtqlZNe5PS8vGD7OIJ6fVsSZ5tYM8k0n_8Zj3An3F7jc_UtvJhX1keQrS5WQWnsDkSN0nuflSsrJBBPq8hnWk3AJEftuARXPxdocz0eFmI0D9jjVUu9C6_m_uoJO540NFW9j0VRfVI0g3gE-PluQlo-KAiKTXsmpOKhynQaRIA18sjeRmDmz9eSjWjNJ-JZXx60ybGRApRgtQnSNYuzc2QCEaTnghBzmju5G_ACMJk9dK6g';

  // const { claims: { sub } } =  await oktaJwtVerifier.verifyAccessToken(accessToken);
  const { claims: { sub } } =  await oktaJwtVerifier.verifyAccessToken(accessToken);

  return sub;
}

export default fetchUser;
