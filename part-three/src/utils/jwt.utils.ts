import jwt from 'jsonwebtoken';

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCGhLlpouwodWJ7O+ErKGXSGw18oKN7OKgaxxa878PWRAdKGxDC
Lape3t/MS12R8kq98qppBqaTq9whX1k/cYIPsBqbLFib1ZXwlJ2635lp+X1h2ij8
w1IMYkCtkpcaS9J1NWyRp2YGRFIb4fSu1DLVeBEt+JoQhUikQmmbYEgrqQIDAQAB
AoGAA9BLeWU3EMaTLi86aQDSMiy2KyxatimbCndOe7jIcpCnLECsLvUgeWQUMDSK
yJJ37/6rOiMIIfOjYAbV/uh26XReoxgrrd+keiohSAmoS8J+gTZbPyniLbnpc/em
BfdiF2etJ6G5RD4bAWSnYZMFR3zLTv0w+bUhK5W3bYuyHSECQQDNvjAMT9JSRB3e
s0zsDFjtqY2ogDNkEzhOPJc7+cT9K9LSEZpdq9HrDGih714Y/NlkM8Lublfsxz2O
qJh3173NAkEAp2CgMqqJrOGx1a6b12W9t3fUoF+Nay9zV6R7mDNLMW7ckHiL+Nzu
KoehHBcyFpS1hdbVnVPUadBj0wdh0rdpTQJACAiYGbL4NGwienKn20O0KTuIo362
Av9ZIHzvLtFW5sfSSI+VZnjyDmqCn2gYVYNx/Z6jyumWF1HETpC4u106NQJBAJfP
At2RYdekyLfna7+crsrl67sdj1WlLvdR3yu3cj6+r1x1iXbJY1a9tzmULEDg1hcz
OII+k0z5zmCLtIT7B40CQFRsWGw6bw2z+QHfdLTClV3OQndvPMV4VAdnJFxBqcAA
2ZRCLbcV9QV/YsXf/k0xT0l8tuWgfR0RSKR8WTSikzU=
-----END RSA PRIVATE KEY-----`;

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCGhLlpouwodWJ7O+ErKGXSGw18
oKN7OKgaxxa878PWRAdKGxDCLape3t/MS12R8kq98qppBqaTq9whX1k/cYIPsBqb
LFib1ZXwlJ2635lp+X1h2ij8w1IMYkCtkpcaS9J1NWyRp2YGRFIb4fSu1DLVeBEt
+JoQhUikQmmbYEgrqQIDAQAB
-----END PUBLIC KEY-----`;

export function signJwt(payload) {
  return jwt.sign(payload, privateKey, { algorithm: 'RS256' });
}

export function decode(token: string) {
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, publicKey);

    return decoded;
  } catch (error) {
    console.error(`error`, error);
    return null;
  }
}
