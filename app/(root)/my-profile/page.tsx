import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import BookList from "@/components/BookList";
// import { sampleBooks } from "@/constants";
// import { sampleBooks } from "@/app/constants";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/database/drizzle";
import { eq } from "drizzle-orm";
import { inArray } from 'drizzle-orm';
import { borrowRecords } from "@/database/schema";
import { books } from "@/database/schema";
// import { borrowBook } from "@/lib/actions/book";

const Page = async () => {
  const session = await auth();
  if(!session) redirect('/sign-in')
  const borrowedBook = await db
  .select()
  .from(borrowRecords)
  .where(eq(borrowRecords.userId, session?.user?.id));
  const borrowedBooksid=borrowedBook.map(key=>key.bookId)
  // console.log(borrowedBooksid)
  const sampleBooks = await db
  .select()
  .from(books)
  .where(inArray(books.id, borrowedBooksid));
  // console.log("--->",sampleBooks)
  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        {/* <Button>Logout</Button> */}
      </form>

      <BookList title="Borrowed Books" books={sampleBooks} />
    </>
  );
};
export default Page;