-- DROP TABLE IF EXISTS public.products CASCADE;
-- DROP TABLE IF EXISTS public.reviews CASCADE;

CREATE TABLE 
	IF NOT EXISTS
		products(
			id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
			name VARCHAR(50) NOT NULL,
			description VARCHAR (255) NOT NULL,
			brand VARCHAR(50) NOT NULL,
			image_url TEXT NOT NULL,
			price NUMERIC NOT NULL,
			category VARCHAR(50) NOT NULL,
			created_at TIMESTAMPTZ DEFAULT NOW(),
			updated_at TIMESTAMPTZ DEFAULT NOW()
);

    -- {
    --     "id": 1, //SERVER GENERATED
    --     "name": "3310",  // NOT NULL
    --     "description": "somthing longer", // NOT NUL
    --     "brand": "nokia", // NOT NUL 	  
    --     "image_url":"https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", NOT NUL
    --     "price": 100, // NOT NUL
    --     "category": "smartphones" // NOT NUL
    --     "created_at": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
    --     "updated_at": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
    -- }


CREATE TABLE 
	IF NOT EXISTS
		reviews(
			id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
			comment VARCHAR(255) NOT NULL,
			rate NUMERIC NOT NULL, -- make max 5
			product_id INTEGER REFERENCES products ON DELETE CASCADE,
			created_at TIMESTAMPTZ DEFAULT NOW()
);
    --  {
    --     "id": 1, //SERVER GENERATED
    --     "comment": "A good book but definitely I don't like many parts of the plot", // NOT NUL
    --     "rate": 3, //REQUIRED, max 5
    --     "product_id": "5d318e1a8541744830bef139", // NOT NUL
    --     "createdAt": "2019-08-01T12:46:45.895Z" // SERVER GENERATED
    -- }