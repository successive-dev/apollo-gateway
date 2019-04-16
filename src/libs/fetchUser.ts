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
  const accessToken = 'eyJraWQiOiJDc3Zwa2dEZ3g3ODJjbUlRTXBTMFpYRkJ6SWZNbmVBRWpNWnROcm9mdTJrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULm1CSmN6N0VOTFVSRzJydEVZYy0tc0pFZ0RFLTVWMU1lS2tkUHRNazZuVmMiLCJpc3MiOiJodHRwczovL2Rldi0yNDY3MDgub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTU1NDAyMDY0LCJleHAiOjE1NTU0MDU2NjQsImNpZCI6IjBvYWZ2YXFtc1J0eExrNm5TMzU2IiwidWlkIjoiMDB1ZnY1ODhpajY1N3Y4U3YzNTYiLCJzY3AiOlsib3BlbmlkIl0sInN1YiI6InZpc2hhbC50ZXdhdGlhQHN1Y2Nlc3NpdmUudGVjaCJ9.bqCu8oWrqT8RVQGRhvNMAMsIEKpoE01JI6VAOEHqkQX2LV4FAcCNfxRlXf_0yfOAPl-IOtxbkI2gweK89hGgj-sbi2Co35yWcDLajhZapbq9HNW8SkP5aPDcsM6hl4zVLRXWi8TBX_g8CEK_pA2T0KRK-zwaCDuWiATe_movEuC0ZT1qAfikHD44dE2uUl0XgUYnVVWhzb6Zo718EWn6am70YZk05He9xrXdPJ6_Psl2pV4H7mAhRC8_TnhfvjNqEciEKvNurKqFFwXl7JZ_q6xbAw1SaicSHyyT2nSZ3ZaBroz_-yjpPYgd6qyqJKrjdsFj0uns13-wr_0U_VvTuA';

  // const { claims: { sub } } =  await oktaJwtVerifier.verifyAccessToken(accessToken);
  const { claims: { sub } } =  await oktaJwtVerifier.verifyAccessToken(accessToken);

  return sub;
}

export default fetchUser;
