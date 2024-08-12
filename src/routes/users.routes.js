const {Router} = require("express");

const multer = require("multer");
const uploadConfig = require("../configs/upload");
const upload = multer(uploadConfig.MULTER);

const UsersAvatarController = require("../controllers/UsersAvatarController");
const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();
const usersController = new UsersController();
const usersAvatarController = new UsersAvatarController();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), usersAvatarController.update);

module.exports = usersRoutes;