import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
});

export const config = {
  matcher: [
    // Always run for API routes (which are public)
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/',
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
