CREATE OR ALTER PROCEDURE createBlog
@id VARCHAR(255),
@blog_title varchar(50),
@blog_content varchar(500),
@tags varchar(50),
@thumbnail varchar(255) = NULL

AS BEGIN

INSERT INTO blogTable (id, blog_title, blog_content , tags , thumbnail)
VALUES (@id, @blog_title, @blog_content, @tags , @thumbnail)

END;

SELECT * FROM blogTable
