const express = require('express');
const { isLoggedIn } = require('./middlewares');
const User = require('../models/user');
const router = express.Router();

router.post('/:id/follow', isLoggedIn, async(req, res, next) => {
    try {
        const user = await User.findOne({where: {id: req.user.id}});
        if(user) {
            await user.addFollowing(parseInt(req.params.id, 10));
            res.send('success');
        } else {
            res.status(404).send('no user');
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/:id/unfollow', isLoggedIn, async(req, res, next) => {
    try {
        const user = await User.findOne({where: {id: req.user.id}});
        if(user) {
            await user.removeFollowing(parseInt(req.params.id, 10));
            res.send('success');
        } else {
            res.status(404).send('no user');
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// router.post('/:id/post-delete', isLoggedIn, async(req, res, next) => {
//     console.log('포스트 삭제 들어왔당1');
//     try {
//         console.log('포스트 삭제 들어왔당2');
//         // const user = await User.findOne({where: {id: req.user.id}});
//         // if(user) {
//         //     await user.removeFollowing(parseInt(req.params.id, 10));
//         //     res.send('success');
//         // } else {
//         //     res.status(404).send('no user');
//         // }
//     } catch (error) {
//         console.error(error);
//         next(error);
//     }
// });

module.exports = router;