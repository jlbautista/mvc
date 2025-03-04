const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *           items:
 *             type: object
 *           properties:
 *            name:
 *              type: string
 *            email:  
 *              type: string
 *     responses:
 *       201:
 *        description: The user was successfully created
 *        content:
 *          application/json:
 *              schema:
 *              type: array
 *       500:
 *          description: Some server error
 *       400:
 *          description: Some error with the request
 *       404:
 *          description: User not found
 */
router.post('/', usersController.create);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: array
 */
router.get('/', usersController.getUsers);

/**
* @swagger
* /users/{id}:
*   get:
*     summary: Get the user by id
*     tags: [Users]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The user id
*     responses:
*       200:
*         description: The user description by id
*         content:
*           application/json:
*             schema:
*               type: array
*/
router.get('/:id', usersController.getUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update the user by the id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *           items:
 *             type: object
 *           properties:
 *            name:
 *              type: string
 *            email:
 *              type: string
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       500:
 *          description: Some server error
 *       400:
 *         description: Some error with the request
 */
router.put('/:id', usersController.update);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user was deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       500:
 *          description: Some server error
 *       400:
 *         description: Some error with the request
 */
router.delete('/:id', usersController.delete);

module.exports = router;