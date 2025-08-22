// middleware.ts
import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/',
  },
});

export const config = {
  matcher: [
    '/body-type', 
    '/chatbot',
    '/dashboard',
    '/reccommended',
    '/upload',
    '/wardrobe',
  ]
};
