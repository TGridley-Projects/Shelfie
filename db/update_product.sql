UPDATE shelfie
SET image_url = $2, item_name = $3, price = $4
WHERE product_id = $1;