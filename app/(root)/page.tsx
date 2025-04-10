import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
// import { sampleBooks } from "../constants";
// import { space } from "postcss/lib/list";
import { db } from "@/database/drizzle";
// import { users } from "@/database/schema";
// import { db } from "@/database/drizzle";
import { books, users } from "@/database/schema";
import { auth } from "@/auth";
import { desc } from "drizzle-orm";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

const Home=async ()=> {
  const session = await auth();

  const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt))) as Book[];

  const result=await db.select().from(users);
  console.log(JSON.stringify(result))
  return(
  <>
    <BookOverview {...latestBooks[0]} userId={session?.user?.id as string}/>
    <BookList
    title="Latest Book"
    books={latestBooks.slice(1)}
    containerClassName="mt-28"
    />
  </>
  )
;
}


export default Home;