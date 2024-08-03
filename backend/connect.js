var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "authapp-a403e",
    "private_key_id": "03f98f598c6232f80662777d727b9b2753455bc3",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDUKSn1l45o0OFS\nUaR0r2W3uVmI0bdL3fycuvPtgrvnuxiPUH4Cs7roM5Qigbh5TxU7f5JFp/cGhD32\ntkidVmZdL5ieOS+boNWRSwLS18MyfaChXw9PGi6CsiP4d0aueEzM7PMoYPbJXipP\nZxYbGxVBVtajUAHW1hmRveVoz1mBQ5ySxgEPW+3NzV20yx6wg0nE4EEpal8MVNya\nt+DIxlz4hih+sihbbhawW6VsfIb3dxlO+WvxP2t3Jxa7HW2euJeywDRTtGcFZoaP\nQXN5eb19t/SgUaKSEbM4LdS44sXe8DhGD3LNfSBb1NB+fLXcHJp1XumuKBozF03G\nSrp6gbPRAgMBAAECggEAFTrhRgAacgak5XXh/QMoLJBRk01ZCDB4fL6Adj3ky7V/\nKagmU+LkSyQOKL3OVeVB/KgxXOMH5xEImk13SrdAmwaOQRb72pjnhhh5edu5Xq4P\nitZWU9YM3WsyCkT1P7QuCzuSwXGigFf55+Qq5B97qwQjikgRRww5lsnn0Osey75n\nkOHHi4Lexv6/aHjuErtyqHXJ39K1K7E6McAcM8GT9VknPKfURp71FVtZD7z0PrGC\nqcHq/XifsjPMj2sLcHaNXEzq3WlyXjp3N2eyXeTsm7aTkvZxsA0SKYdeBwSNMZdU\nKb/HsBQIb5H7stOxEv+vyPZJtMQ40fblPSaUTnGfIQKBgQD1+9m3lrxIMBP6xbhI\n7rq6JVXSZISzzXTy2QPCWLN+/FRE3ElYx/l/sByJ432ui3GPH9Ey9En8dpfJGETH\nLNnMSyA8Fd4RM53MP+x099CwrFaucdpgIBc+uFcLzF5uzOJvcIUjZ9AVYL2JkOwb\n35RfhEUGUWnMaVJouSwk51VInQKBgQDczL2VOrIjjWzwCp64QjtGAR0yMzDkYQ4O\n9Ygqd1fQ/SqbCMyNHmBhbk/geEmPwAmL7i2Ul1LDSc/C7oOYfTDvDPjFU0uH4G3f\nejx9AAJsbpJo3R0Pccrmij2zrFGVrd3HivuxijmNsJfkInGcTTrAa6wXjTqwiu6J\n3FTJr/wvxQKBgENDkEB8rpXK19vOL1t6NINsbDBxHjyQpTc3EqkVWlgSJfUCi+gE\nHvzEqrkmBRsytGXf3HPji0vHHjB2O3B/mjscG/9yN1xa0f6lSEKf9WgqaDWhmoaI\nn/Kds+fdBcGksxKoITASVjtSTeINSBNDKy6HW9yjbJvh/Q/3+tNIkvCdAoGAL/BP\n9ReCV8+76D4WCeFvZxqU0TJmGh+sYrkScE3rBhgBaRm296ixulWuCAl1xz0llXkH\n8mwMbxQWhLcuYSxFNJG3bXhRPNYQZOXwPh+DZzF2nkfrqE/Hgthe3yS5rerK7SkS\nzpA5QLcns0N7MTlfWSnHenGSXYQ8mDf7PLL16RUCgYEAp4mScumC5UB21WW7Kjsq\n5M5CePVpgl6cE9KemrKnKOgolBrGJjjSXIRpK3UjT1JU8q3yD8k2pYbNtuOIeTHp\nxbgVW/b5197LMud9OiMe9+6QwDPcuJ61Rf/Tg69UTvV3TJVW7zCS9a/6e6BeuWO8\nioHRwU6MdQnzPmDxSpeUQmk=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-grbic@authapp-a403e.iam.gserviceaccount.com",
    "client_id": "112951022218761454133",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-grbic%40authapp-a403e.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  )
});
const db = admin.firestore();
module.exports = db;