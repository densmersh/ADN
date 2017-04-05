namespace ADN.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newsmodel3 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Comments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Text = c.String(),
                        Date = c.DateTime(nullable: false),
                        Raiting = c.Int(nullable: false),
                        News_Id = c.Int(),
                        User_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.News", t => t.News_Id)
                .ForeignKey("dbo.Users", t => t.User_Id)
                .Index(t => t.News_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Username = c.String(),
                        Password = c.Int(nullable: false),
                        Raiting = c.Int(nullable: false),
                        Role = c.String(),
                        Avatar = c.Binary(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.News", "KindOfNews", c => c.String());
            AddColumn("dbo.News", "User_Id", c => c.Int());
            CreateIndex("dbo.News", "User_Id");
            AddForeignKey("dbo.News", "User_Id", "dbo.Users", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.News", "User_Id", "dbo.Users");
            DropForeignKey("dbo.Comments", "User_Id", "dbo.Users");
            DropForeignKey("dbo.Comments", "News_Id", "dbo.News");
            DropIndex("dbo.Comments", new[] { "User_Id" });
            DropIndex("dbo.Comments", new[] { "News_Id" });
            DropIndex("dbo.News", new[] { "User_Id" });
            DropColumn("dbo.News", "User_Id");
            DropColumn("dbo.News", "KindOfNews");
            DropTable("dbo.Users");
            DropTable("dbo.Comments");
        }
    }
}
