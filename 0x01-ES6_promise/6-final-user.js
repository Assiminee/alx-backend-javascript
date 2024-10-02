import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((resp) => {
      const responses = [];

      for (const response of resp) {
        if (response.status !== 'fulfilled') {
          response.value = response.reason;
          delete response.reason;
        }
        responses.push(response);
      }
      return responses;
    });
}
