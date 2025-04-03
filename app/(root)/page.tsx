import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "../constants";
import { space } from "postcss/lib/list";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

const Home=async ()=> {
  const result=await db.select().from(users);
  console.log(JSON.stringify(result))
  return(
  <>
    <BookOverview {...sampleBooks[0]}/>
    <BookList
    title="Latest Book"
    books={sampleBooks}
    containerClassName="mt-28"
    />
  </>
  )
;
}


export default Home;