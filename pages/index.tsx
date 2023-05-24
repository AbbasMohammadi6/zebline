import * as React from 'react'

const token = 'bearer 4$U2VnbWVudCFuMA$TyBLdeYwC71684835503713';
const licence_code = '4$U2VnbWVudCFuMA$SCA9IOb4gf1684835503794';

const Index = () => {
  const loginUser = async () => {
    await fetch(`{HOST}/v1/accounts/${licence_code}/users`, {
      method: 'POST',
      body: JSON.stringify({ name: 'test' }),
      headers: { Authorization: token }
    });
  }

  return (
    <button onClick={loginUser}>Login</button>
  )
}

export default Index;
