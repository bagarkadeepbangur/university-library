import { Session } from "next-auth";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
const Header = ({ session }: { session: Session }) => {
  return (
    <header className="admin-header">
      <div>
        <h2 className="text-2xl font-semibold text-dark-400">
          {session?.user?.name}
        </h2>
        <p className="text-base text-slate-500">
          Monitor all of your users and books here
        </p>
      </div>

      {/*<p>Search</p>*/}
      <form
            action={async () => {
            "use server";

            await signOut();
            }}
            className="mb-10"
          >
            <Button>Logout</Button>
          </form>
    </header>
  );
};
export default Header;