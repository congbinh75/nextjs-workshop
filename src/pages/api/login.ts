import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from "node:fs";
import path from "node:path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  const filePath = path.join(process.cwd(), "public", "data", "login.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  const user = data.users.find(
    (user: { email: string; password: string }) =>
      user.email === email && user.password === password
  );

  if (!user) {
    res.redirect(302, '/login?error=Invalid%20credentials');
    return;
  } 

  res.setHeader('Set-Cookie', serialize('auth_token', email, {
    httpOnly: true, 
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/'
  }));
  res.redirect(302, '/admin');
  return user;
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
