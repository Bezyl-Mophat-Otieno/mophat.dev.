CREATE OR ALTER PROCEDURE updateBlog
        @id VARCHAR(255),
        @blog_title varchar(50) = NULL,
        @blog_content varchar(500) = NULL,
        @tags varchar(50) = NULL,
        @thumbnail varchar(255) = NULL
        AS BEGIN
            update blogTable 
            SET blog_title = COALESCE(@blog_title, blog_title),
                blog_content = COALESCE(@blog_content, blog_content),
                tags = COALESCE(@tags, tags),
                thumbnail = COALESCE(@thumbnail, thumbnail)
            WHERE id = @id;
        END;