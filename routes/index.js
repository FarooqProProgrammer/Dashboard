var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get("/admin-animation",(req,res)=>{
  res.render('admin-animation')
})



router.get("/admin-nestable",(req,res)=>{
  res.render('admin-nestable')
})



router.get("/admin-rangeslider",(req,res)=>{
  res.render('admin-rangeslider')
})




router.get("/admin-ratings",(req,res)=>{
  res.render('admin-ratings')
})



router.get("/admin-sweet-alert2",(req,res)=>{
  res.render('admin-sweet-alert2')
})




router.get("/admin-widgets",(req,res)=>{
  res.render('admin-widgets')
})



router.get("/blogs-blog-add",(req,res)=>{
  res.render('blogs-blog-add')
})



router.get("/blogs-blog-column",(req,res)=>{
  res.render('blogs-blog-column')
})



router.get("/blogs-blog-list",(req,res)=>{
  res.render('blogs-blog-list')
})



router.get("/blogs-blog-post",(req,res)=>{
  res.render('blogs-blog-post')
})



router.get("/blogs-dashboard",(req,res)=>{
  res.render('blogs-dashboard')
})



router.get("/calendar",(req,res)=>{
  res.render('calendar')
})


router.get("/chart-c3",(req,res)=>{
  res.render('chart-c3')
})



router.get("/chart-chartist",(req,res)=>{
  res.render('chart-chartist')
})



router.get("/chart-chartjs",(req,res)=>{
  res.render('chart-chartjs')
})


router.get("/chart-flot",(req,res)=>{
  res.render('chart-flot')
})



router.get("/chart-google",(req,res)=>{
  res.render('chart-google')
})



router.get("/chart-knob",(req,res)=>{
  res.render('chart-knob')
})



router.get("/chart-morris",(req,res)=>{
  res.render('chart-morris')
})




router.get("/chart-sparkline",(req,res)=>{
  res.render('chart-sparkline')
})



router.get("/dashboard_2",(req,res)=>{
  res.render('dashboard_2')
})


router.get("/email-compose",(req,res)=>{
  res.render('email-compose')
})



router.get("/email-inbox",(req,res)=>{
  res.render('email-inbox')
})


router.get("/email-read",(req,res)=>{
  res.render('email-read')
})



router.get("/email-templates-action",(req,res)=>{
  res.render('email-templates-action')
})



router.get("/email-templates-alert",(req,res)=>{
  res.render('email-templates-alert')
})


router.get("/email-templates-billing",(req,res)=>{
  res.render('email-templates-billing')
})



router.get("/error",(req,res)=>{
  res.render('error')
})




router.get("/extras-about",(req,res)=>{
  res.render('extras-about')
})



router.get("/extras-coming-soon",(req,res)=>{
  res.render('extras-coming-soon')
})



router.get("/extras-contact",(req,res)=>{
  res.render('extras-contact')
})



router.get("/extras-emailtemplate",(req,res)=>{
  res.render('extras-emailtemplate')
})



router.get("/extras-faq",(req,res)=>{
  res.render('extras-faq')
})



router.get("/extras-gallery",(req,res)=>{
  res.render('extras-gallery')
})


router.get("/extras-invoice",(req,res)=>{
  res.render('extras-invoice')
})


router.get("/extras-maintenance",(req,res)=>{
  res.render('extras-maintenance')
})



router.get("/extras-members",(req,res)=>{
  res.render('extras-members')
})





router.get("/extras-pricing",(req,res)=>{
  res.render('extras-pricing')
})



router.get("/extras-profile",(req,res)=>{
  res.render('extras-profile')
})


router.get("/extras-search-result",(req,res)=>{
  res.render('extras-search-result')
})


router.get("/extras-sitemap",(req,res)=>{
  res.render('extras-sitemap')
})



router.get("/extras-timeline",(req,res)=>{
  res.render('extras-timeline')
})



router.get("/form-advanced",(req,res)=>{
  res.render('form-advanced')
})


router.get("/form-elements",(req,res)=>{
  res.render('form-elements')
})



router.get("/form-mask",(req,res)=>{
  res.render('form-mask')
})


router.get("/form-pickers",(req,res)=>{
  res.render('form-pickers')
})



router.get("/form-quilljs",(req,res)=>{
  res.render('form-quilljs')
})





module.exports = router;
