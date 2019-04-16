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
  // const match = header.match(/Bearer (.+)/);

  // if (!match) {
  //   return undefined;
  // }

  // const accessToken = match[1];
  const accessToken = 'eyJraWQiOiJDc3Zwa2dEZ3g3ODJjbUlRTXBTMFpYRkJ6SWZNbmVBRWpNWnROcm9mdTJrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjFCZko1b3ExY2J4UTZRaWZBNE5Hekt4dGJwUFdSTEVrYUtFampGbXo1aWsiLCJpc3MiOiJodHRwczovL2Rldi0yNDY3MDgub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTU1NDE0OTMwLCJleHAiOjE1NTU0MTg1MzAsImNpZCI6IjBvYWZ2YXFtc1J0eExrNm5TMzU2IiwidWlkIjoiMDB1ZnY1ODhpajY1N3Y4U3YzNTYiLCJzY3AiOlsib3BlbmlkIl0sInN1YiI6InZpc2hhbC50ZXdhdGlhQHN1Y2Nlc3NpdmUudGVjaCJ9.cRWuWyzTtsthiKFmNmNs_8pGAisZcjo2wjKgR7NUpF3G9-OqD4BfIKWYgV6AODjyVDqTTzhxeDINcP7zbwOgUXJUEgNdJ_SAMTJ2WAolmb-WOZV5ibCnxOZHn7qpL1MQeTOpXClK6LUvpTzdA42i_5MOo-4osRVjNx-UkdmsMI65BX67aJXndj9duKdz_OXt-i2CpMy89ziGIRqgNYkSzYBXrIQOosu2xZxhZVuYMuYlFCEbzVgs5wkabSs56mXCFWorSta5Fw2ddkVFwKl10ZnbtExMWxbTZAx1dOnlapOrM7nTan1xmwHHQfGECeBWBF_jLJuDxvQk0kerjGDVrQ';

  // const { claims: { sub } } =  await oktaJwtVerifier.verifyAccessToken(accessToken);
  const { claims: { sub } } =  await oktaJwtVerifier.verifyAccessToken(accessToken);

  return sub;
}

export default fetchUser;
