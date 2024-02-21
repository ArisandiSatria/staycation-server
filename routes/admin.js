const router = require("express").Router();
const {
  viewDashboard,
  viewCategory,
  viewBank,
  viewItem,
  viewBooking,
  addCategory,
  editCategory,
  deleteCategory,
  addBank,
} = require("../controllers/adminController");
const { upload } = require("../middlewares/multer");

router.get("/dashboard", viewDashboard);
router.get("/category", viewCategory);
router.post("/category", addCategory);
router.put("/category", editCategory);
router.delete("/category/:id", deleteCategory);
router.get("/bank", viewBank);
router.post("/bank", upload, addBank);
router.get("/item", viewItem);
router.get("/booking", viewBooking);

module.exports = router;
