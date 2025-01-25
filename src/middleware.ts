import { cookies } from "next/headers"
import { NextResponse } from "next/server"

// step1: export middleware 

export const middleware = async (request) => {
    const token = await cookies(request).get("next-auth.session-token")
  console.log(token);
    if (!token) {

        return NextResponse.redirect(new URL("/api/auth/signin", request.url))
    }
    return NextResponse.next()
}

//  step2: export config 
// use matcher for whcich router should be protected
export const config = {

    matcher: ["/dashboard", "/services"]

}