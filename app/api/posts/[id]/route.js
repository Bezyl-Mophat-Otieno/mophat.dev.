import DB from "@/app/lib/utils/dbHelper";
import { NextResponse } from "next/server";


// Getting element by Id from the database
// { params: { id: '2' } }
export async function GET (request,context){

    try {
        const {id} = await context.params;
        console.log(typeof(id))
        const result = await DB.executeProcedure('getOneBlog',{id});
        if (result.recordset.length > 0) {
            const blog = result.recordset[0]
            return NextResponse.json(blog, {status:200});
        }else{
            return NextResponse.json({message:'Blog not found'});
        }  
    } catch (error) {
        console.log(error)
    }
}

// Updating element by Id from the database

export async function PUT (request,context){

    try {
        const {id} = await context.params;
        const requestBody = await request.json();
        const blogDetails = {...requestBody,id}
        console.log(blogDetails)
        const result = await DB.executeProcedure('updateBlog',blogDetails);
        if (result.rowsAffected[0] > 0) {
            return NextResponse.json({message:'Blog updated successfully'});
        }else{
            return NextResponse.json({message:'Blog not found'});
        }  
    } catch (error) {
        console.log(error)
    }

}


// Deleting element by Id from the database

export async function DELETE (request,context){
    try {
        const {id} = await context.params;

        const result = await DB.executeProcedure('deleteBlog',{id});
        if (result.rowsAffected[0] > 0) {
            return NextResponse.json({message:'Blog deleted successfully'});
        }else{
            return NextResponse.json({message:'Blog not found'});
        }
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:'Server Error'});
        
    }
}


