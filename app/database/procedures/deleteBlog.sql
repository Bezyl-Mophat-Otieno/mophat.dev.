

-- Delete a blog from the database
CREATE OR ALTER PROCEDURE deleteBlog
@id VARCHAR(255) 
AS BEGIN
    DELETE FROM blogTable WHERE id = @id
END

