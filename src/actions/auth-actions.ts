"use server";

import { auth } from "@/auth";
import mongooseClient from "@/lib/mongoose";
import { User } from "@/lib/models/user-model";

export async function isUserAuthorized() {
  // Get email from session
  const session = await auth();
  if (!session) return null;

  const email = session?.user?.email;
  if (!email) return null;

  try {
    // use email to see if user exists in MongoDB
    await mongooseClient;
    const user = await User.findOne({ email });
    if (!user) return null;

    return user;
  } catch (err) {
    console.error("Error finding user in MongoDB:", err);
    return null;
  }
}
