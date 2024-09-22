import { merchantAuth, riderAuth } from "./firebase"; // Import both auth instances
import { createUserWithEmailAndPassword } from "firebase/auth";

// Register Merchant
export const registerMerchant = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      merchantAuth,
      email,
      password
    );
    console.log("Merchant registered:", userCredential.user);
  } catch (error) {
    console.error("Error registering merchant:", error.message);
  }
};

// Register Rider
export const registerRider = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      riderAuth,
      email,
      password
    );
    console.log("Rider registered:", userCredential.user);
  } catch (error) {
    console.error("Error registering rider:", error.message);
  }
};
