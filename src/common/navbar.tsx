import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";

export const Navbar = () => {
  return (
    <div className="text-2xl h-20 flex items-center justify-between">
      social.mikedegeofroy.com
      <Avatar className="h-9 w-9 flex justify-center items-center">
        <AvatarImage src={undefined} alt="Avatar" />
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
    </div>
  );
};
