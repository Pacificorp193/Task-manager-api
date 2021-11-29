const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const { userOneId, userOne, setupDatabase } = require('./fixtures/db')

// beforeEach(setupDatabase)

test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Dave',
        email: 'Dave@example.com'
    })

    // const user = await User.findById(response.body.user._id)
    // expect(user).not.toBeNull()

    // expect(response.body).toMatchObject({
    //     user: {
    //         name: 'Gavin',
    //         email: 'gavin@example.com'
    //     },
    //     token: user.tokens[0].token
    // })
})

// test('Should login existing user', async () => {
//     const response = await request(app).post('/user/login').send({
//         email: userOne.email,
//         password: userOne.password
//     })
//     const user = await User.findById(userOneId)
// })

// test('Should not login nonexistent user', async () => {
//     await request(app).post('/users/login').send({
//         email: userOne.email,
//         password: 'thisisnotmypass'
//     })
// })

// test('Should get profile for user', async () => {
//     await request(app)
//         .get('/users/me')
//         .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
//         .send()
//         .expect(200)
// })

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

// test('Should delete account for user', async () => {
//     await request(app)
//         .delete('/users/me')
//         .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
//         .send()
//         .expect(200)
// })

test('Should not delete account for unauthenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

// test('Should upload avatar image', async () => {
//     await request(app)
//         .post('/users/me/avatar')
//         .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
//         .attach('avatar', 'tests/fixtures/scale copy.jpeg')
//         .expect(200)
//     const user = await User.findById(userOneId)
//     expect(user.avatar).toEqual(expect.any(Buffer))
// })

// test('Should update valid user fields', async () => {
//     await request(app)
//         .patch('/users/me')
//         .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
//         .send({
//             name: 'Veronica'
//         })
//         .except(200)
//     const user = await User.findById(userOneId)
//     except(user.name).toEqual('Veronica')
// })

// test('Should not update valid user fields', async () => {
//     await request(app)
//         .patch('/users/me')
//         .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
//         .send({
//             location: 'Arizona'
//         })
//         .except(400)
// })