BEGIN TRY
    CREATE TABLE blogTable (
        id VARCHAR(250) NOT NULL PRIMARY KEY,
        blog_title VARCHAR(250) NOT NULL,
        blog_content VARCHAR(500) NOT NULL,
        tags VARCHAR(250) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        -- ALTER TABLE projectTable
        -- ADD CONSTRAINT FK_projectTable_userTable FOREIGN KEY (user_Id) REFERENCES userTable(id) ON DELETE SET NULL;

    );
END TRY
BEGIN CATCH
    THROW 50001, 'An error occurred while creating the projectTable', 1;
END CATCH;

-- ALTER Table blogTable
-- ADD thumbnail VARCHAR(250)  NULL;