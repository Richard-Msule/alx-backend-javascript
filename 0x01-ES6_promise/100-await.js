import uploadPhoto from "./utils.js";
import createUser from "./utils.js";

async function asyncUploadUser() {
  try {
    // Wait for both async functions to resolve
    let photo = await uploadPhoto();
    let user = await createUser();
    // Return an object with the responses
    return {
      photo: photo,
      user: user,
    };
  } catch (error) {
    // If one of the async functions fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

