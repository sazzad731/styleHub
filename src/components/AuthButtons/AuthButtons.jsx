"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthButtons (){
  const { data } = useSession();
  
  if(data){
    return (
      <>
        <button onClick={() => signOut()} className="btn">
          Log out
        </button>
      </>
    );
  }

  return <>
    <button onClick={() => signIn()} className="btn">Login</button>
  </>
}