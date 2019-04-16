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
  const accessToken = 'eyJraWQiOiJDc3Zwa2dEZ3g3ODJjbUlRTXBTMFpYRkJ6SWZNbmVBRWpNWnROcm9mdTJrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkM3aE0xbUMxREVCTHR0WjczVl81NjIwNXRHR1c5Y2xsV19uLUdEOV8wQm8iLCJpc3MiOiJodHRwczovL2Rldi0yNDY3MDgub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTU1NDI0NzQ3LCJleHAiOjE1NTU0MjgzNDcsImNpZCI6IjBvYWZ2YXFtc1J0eExrNm5TMzU2IiwidWlkIjoiMDB1ZnY1ODhpajY1N3Y4U3YzNTYiLCJzY3AiOlsib3BlbmlkIl0sInN1YiI6InZpc2hhbC50ZXdhdGlhQHN1Y2Nlc3NpdmUudGVjaCJ9.pUWSoCHr8J3Mim1YkA25-z7jBQqf377omVvN-QjqtIGLOCMjiB6b3bJDkZuC9xvjgRxhX7lxTE8UzR-BLrrQQTBvNMAwAuIWBC_uLbLEkAD7qal-JKI88qFDzZgaFwRfUS5pXMIJIZ1JGH3WDNp7cdOBry7Jvn49x9lMmcr4U_SBQqfi0X99dYh3Fv3b9m61SMrsCZ9o6WkmgjFKpnNz4MbI9Ht6idQSNbQjMXTOD2nHQimMCtpWn1_O1HQWSxmW9XEW69EUbqtGxi_-d2kMiSJKNa0tYy7Z5Ceu_bzdHMeHvx0avg4RYgj5FP6YRD7YqLriyCyDSvEicJal9_96eQ';

  // const { claims: { sub } } =  await oktaJwtVerifier.verifyAccessToken(accessToken);
  const { claims: { sub } } =  await oktaJwtVerifier.verifyAccessToken(accessToken);

  return sub;
}

export default fetchUser;
