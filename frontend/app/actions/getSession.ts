import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route"  // the auth informations for providers and credentials

export default async function getSession() {
  return await getServerSession(authOptions); // we get information knowing user in
}