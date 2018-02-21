var express = require('express');
var router = express.Router();
var Shoe = require('../models').Shoe;



/* GET SHOES. */
router.get('/', function(req, res) {
  Shoe.all({
    order: [
      ['updatedAt', 'DESC']
    ]
  })
    .then(function(shoes){
      return res.render('shoes', {shoes: shoes})
    })
});

router.get('/:id/edit', function(req,res){
  Shoe.findById(req.params.id)
    .then( function(shoe){
      return res.render('edit', {shoe: shoe})
    })
})

router.put('/:id', function(req, res) {
  Shoe.update(
    { model: req.body.model },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/shoes');
  })
});

router.delete('/:id', function(req, res){
  Shoe.findById(req.params.id)
    .then( function (shoe){
      shoe.destroy()
    })
      .then( function(){
        return res.redirect('/shoes')
      })
})

/*POST add shoe listing */
router.post('/', function(req, res) {
  var model = req.body.model;
  Shoe.create({ model: model })
    .then( function() {
      res.redirect('/shoes');
  });
});

module.exports = router;
