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
  const accessToken = 'eyJraWQiOiJDc3Zwa2dEZ3g3ODJjbUlRTXBTMFpYRkJ6SWZNbmVBRWpNWnROcm9mdTJrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlN4MTBNRFllcW5QS0ZRUDdLMGRMbDh3R2tPdklReWJMenJtYlhrcjJCQzgiLCJpc3MiOiJodHRwczovL2Rldi0yNDY3MDgub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTU1NTkzODcwLCJleHAiOjE1NTU1OTc0NzAsImNpZCI6IjBvYWZ2YXFtc1J0eExrNm5TMzU2IiwidWlkIjoiMDB1ZnY1ODhpajY1N3Y4U3YzNTYiLCJzY3AiOlsib3BlbmlkIl0sInN1YiI6InZpc2hhbC50ZXdhdGlhQHN1Y2Nlc3NpdmUudGVjaCJ9.CugxfRDPC_qOpHgwCcGjftwbBsphNyPJsXtcbqENJj9_oXQvcFR1bxjCLHdyD2ARZMkOEsu7BHfafsrYRddUATT9IIfwcgrnhGuTbZzxKRuJ-B62m6wJ4QHiEExS_2TFSmBTO6IGdX9qnpGJnUhGlSnf8nT7lKg6zYtaE0upx6rk6LrnCTo4g7Se4cTLktP6V96_uMm_ZDWcBKW2w9sKv7Va-4Ml8RQlBRW-gOX1ltG5-8RI2cp-zPY3AOiIYaUGN0-u3_PBVgkT9cguCSGuVP2HG6K1g5aILduNE0LilqTnmIXo6QLbgo-9Iu-674NUutP5FG15CiSWmkN_PUaORQ';

  // const { claims: { sub } } =  await oktaJwtVerifier.verifyAccessToken(accessToken);
  const { claims: { sub } } =  await oktaJwtVerifier.verifyAccessToken(accessToken);
  console.log('fetchUser.ts [sub]', sub);
  return sub;
}

export default fetchUser;
