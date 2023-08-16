import DB from "@/app/lib/utils/dbHelper"
import { NextResponse } from "next/server"
import { v4 } from "uuid"


//A function that creates a new blog
export async function POST (request){


   try {

      const {blog_title , blog_content , tags} = await  request.json()
      const id = v4()
   
      const blogDetails = {
         id,
         blog_title,
         blog_content,
         tags,
      }
   
      const result = await DB.executeProcedure("createBlog",blogDetails)
   
      if(result.rowsAffected[0]==0){
         return NextResponse.json({message:"Something went wrong,The blog was'nt created"},{status:500})
      }else{
         return NextResponse.json({message:"Blog created successfully"},{status:200})
      }
      
   } catch (error) {

      console.log(error)
      return NextResponse.json({message:"Something went wrong"},{status:500})
      
   }

}

// A function that fetches all blogs
export async function GET (request){

   try {
      const result = await DB.executeProcedure("getAllBlogs")

      if(result.recordset===[0]){
         return NextResponse.json({message:"No blogs found"},{status:404})

      }else{
         const blogs = result.recordset
         return NextResponse.json(blogs,{status:200})
      }
      
   } catch (error) {
      console.log(error)
      return NextResponse.json({message:"Something went wrong"},{status:500})

   }



}