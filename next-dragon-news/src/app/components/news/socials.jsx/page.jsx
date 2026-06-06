"use client"
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
const SocialPage = () => {
  const handleGoogleSignIn = async() => {
    const data =  await authClient.signIn.social({
      provider: "google",
    })
    console.log(data);
  }
  return (
    <div className="hidden sm:flex md:flex sm:col-span-3 md:col-span-3 w-full">
      <div className="space-y-2 w-full p-2 sm:p-3 md:p-4 bg-gray-50 rounded-lg">
        <Button
          className="w-full text-xs sm:text-sm md:text-base"
          variant="tertiary"
          onClick={handleGoogleSignIn}
        >
          <Icon icon="devicon:google" />
          <span className="hidden sm:inline">Sign in with Google</span>
        </Button>
        <Button
          className="w-full text-xs sm:text-sm md:text-base"
          variant="tertiary"
        >
          <Icon icon="mdi:github" />
          <span className="hidden sm:inline">Sign in with GitHub</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialPage;
