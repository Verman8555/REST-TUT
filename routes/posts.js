const express = require('express');
const router = express.Router();

const Posts = require('../models/Posts');

router.get('/', async (req, res) => {
    try{
        const posts = await Posts.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

/* router.get('/spec', (req, res) => {
    res.send('spec is specific');
}); */

router.post('/', async (req,res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description
    });
    //console.log(post);
    try{
        const savedPost = await post.save()
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

router.get('/:postId', async (req,res) => {
    try{
        const post = await Posts.findById(req.params.postId);
        res.json(post);
    }catch (err){
        res.json({message:err})
    }
})

router.delete('/:postId', async (req,res) => {
    try{
        const removePost = await Posts.remove({_id: req.params.postId});
        res.json(removePost);
    }catch(err){
        res.json({message:err});
    }
})

router.patch('/:postId', async (req,res) => {
    try{
        const updatedPost = await Posts.updateOne(
            {_id: req.params.postId},
            {$set: {title:req.body.title}}
        );
        res.json(updatedPost)
    }catch(err){
        res.json({message:err});
    }
})

module.exports = router;