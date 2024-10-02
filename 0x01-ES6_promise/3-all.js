import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const resp1 = await uploadPhoto();
    const resp2 = await createUser();

    console.log(`${resp1.body} ${resp2.firstName} ${resp2.lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}
