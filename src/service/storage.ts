import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';

const SECRET = {
  KEY: 'CP@23@Secret',
  IV: 'IV2205CP2023',
};

// const SysStorage = (name: string) => {
//   return {
//     async get() {
//       const value = await AsyncStorage.getItem(name);
//       return value ? decrypt(value) : '';
//     },
//     async set(value: any) {
//       AsyncStorage.setItem(name, encrypt(value));
//     },
//     async remove() {
//       AsyncStorage.removeItem(name);
//     },
//   };
// };

const SysStorage = (name: string) => {
  return {
    async get() {
      const value = await AsyncStorage.getItem(name);
      if (!value) return null;
      try {
        const decrypted = decrypt(value);
        return JSON.parse(decrypted); // parse về object
      } catch (e) {
        return null;
      }
    },
    async set(value: any) {
      try {
        const str = JSON.stringify(value); // stringify object
        await AsyncStorage.setItem(name, encrypt(str));
      } catch (e) {
        return null;
      }
    },
    async remove() {
      await AsyncStorage.removeItem(name);
    },
  };
};

export default SysStorage;

export const SysClearStorage = async () => {
  await AsyncStorage.clear();
};

const decrypt = (value: string | CryptoJS.lib.CipherParams) => {
  const key = CryptoJS.enc.Utf8.parse(SECRET.KEY);
  const iv = CryptoJS.enc.Utf8.parse(SECRET.IV);
  const decryptedPassword = CryptoJS.AES.decrypt(value, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decryptedPassword.toString(CryptoJS.enc.Utf8);
};

const encrypt = (sourceString: string | CryptoJS.lib.WordArray) => {
  const key = CryptoJS.enc.Utf8.parse(SECRET.KEY);
  const iv = CryptoJS.enc.Utf8.parse(SECRET.IV);
  const encryptedPassword = CryptoJS.AES.encrypt(sourceString, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encryptedPassword.toString();
};
