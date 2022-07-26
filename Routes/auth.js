const router = require("express").Router();
const {
  createUser,
  userLogin,
  findUserById,
  updateUser,
  updateImage,
  getAllUsers,
  updateName,
  forgotPassword,
  resetPassword,
  resetPasswordValue,
  updateAddress,
} = require("../Controllers/auth");
const { verifyReset } = require("../Middlewares/VerifyResetToken");
const { verify } = require("../Middlewares/VerifyUser");

router.post("/user/register", createUser);
router.post("/user/login", userLogin);
router.post("/user/forgot/password", forgotPassword);
router.get("/user/details/:id", verify, findUserById);
router.get("/users/details/", getAllUsers);
router.get("/users/details/", getAllUsers);
router.get("/reset/password/:token", verifyReset, resetPassword);

router.put("/user/update/:id", updateUser);
router.put("/user/reset/password/:email", resetPasswordValue);

router.put("/user/updateaddress/:id", updateAddress);

router.put("/user/updatename/:id", updateName);
router.put("/user/updateimage/:id", updateImage);

module.exports = router;
