import axios from 'axios';

const url = 'https://dev-246708.okta.com';
const apiToken = '00_DXV0IY-_byweMpMupTPh7ujdcx6qjYCvDvR1RHS';
const headers = {
  'Accept' : 'application/json',
  'Authorization': `SSWS ${apiToken}`,
  'Content-Type': 'application/json',
};

class UserService {
  public async getUsers() {
    try {
      const res = await axios.get(`${url}/api/v1/users?limit=25`, {
        headers,
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async createUser(data: any) {
    const userInfo = { ...data};
    const {
      firstName,
      lastName,
      email,
      login,
      mobilePhone,
      password,
    } = userInfo;
    try {
      // console.log('PRE-REQ-SENT-CHECK');
      const res = await axios.post(`${url}/api/v1/users?activate=false`, {
        credentials: {
          password: { value: password},
        },
        profile: {
          email,
          firstName,
          lastName,
          login,
          mobilePhone,
        },
      }, { headers });
      // console.log('POST-REQ-SENT-CHECK');
      // console.log(res.data);
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new UserService();
