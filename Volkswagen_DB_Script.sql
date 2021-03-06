USE [Volkswagen_NCA]
GO
/****** Object:  Table [dbo].[Car_Make]    Script Date: 2021/01/17 19:40:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Car_Make](
	[Make_ID] [int] NOT NULL,
	[Make_Name] [varchar](75) NULL,
PRIMARY KEY CLUSTERED 
(
	[Make_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Car_Model]    Script Date: 2021/01/17 19:40:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Car_Model](
	[Model_ID] [int] NOT NULL,
	[Model_Name] [varchar](50) NULL,
	[Model_Body_Type] [varchar](50) NULL,
	[Model_Engine_Type] [varchar](50) NULL,
	[Model_Price] [int] NULL,
	[Model_In_Stock] [int] NULL,
	[Make_ID] [int] NULL,
	[Model_Description] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Model_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Car_Model]  WITH CHECK ADD FOREIGN KEY([Make_ID])
REFERENCES [dbo].[Car_Make] ([Make_ID])
GO
