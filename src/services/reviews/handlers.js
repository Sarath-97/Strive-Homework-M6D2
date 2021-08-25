/* This is where we have our get, put, post, delete
But instead of get, put, post, delete it will be list, create, single, update, deleteProduct
DELETE is reserved keyword in JS */

import db from "../../db/connection.js";


export const list = async (req, res, next) => { // GET ALL
	try {
		const reviews = await db.query(`SELECT * FROM reviews`);
		res.send(reviews.rows);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const create = async (req, res, next) => { // POST
	try {
		const { comment, rate, product_id} = req.body;
		const review = await db.query(
			`INSERT INTO reviews(comment,rate,product_id) VALUES('${comment}','${rate}','${product_id}') RETURNING *;`
		);
		res.send(review.rows[0]);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const single = async (req, res, next) => { // GET 1
	try {
		const { review_id } = req.params;
		const reviews = await db.query(
			`SELECT * FROM reviews WHERE id=${review_id};`
		);
		const [found, ...rest] = reviews.rows;

		res.status(found ? 200 : 404).send(found);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const update = async (req, res, next) => { // PUT TO 1
	try {
		const { review_id } = req.params;
		const { comment, rate, product_id} = req.body;
		const reviews = await db.query(
			`UPDATE reviews
			 SET comment ='${comment}',
			 rate = '${rate}',
			 product_id = '${product_id}',
			 updated_at = NOW()
			 WHERE id=${review_id} RETURNING *;`
		);
		const [found, ...rest] = reviews.rows;
		res.status(found ? 200 : 400).send(found);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const deleteReview = async (req, res, next) => { // DELETE
	try {
		const { review_id } = req.params;
		const { comment, rate, product_id} = req.body;
		const dbResult = await db.query(
			`DELETE FROM reviews
			 WHERE id=${review_id};`
		);
		res.status(dbResult.rowCount ? 200 : 400).send();
	} catch (error) {
		res.status(500).send(error);
	}
};