import { prismaClient } from "../src";

const User_id = "9";

async function seed() {
    await prismaClient.user.create({
        data: {
            id: User_id,
            email: "test@test.com"
        }
    })

    const website = await prismaClient.website.create({
        data: {
            url: "https://test.com",
            userId: User_id
        }
    })

    const Validator = await prismaClient.validator.create({
        data: {
            publicKey: "0x1233432524524254",
            location: "Delhi",
            ip: "127.0.0.1",
        }
    })

    await prismaClient.websiteTick.create({
        data: {
            websiteId: website.id,
            status: "Good",
            createdAt: new Date(Date.now() - 1000 * 60 * 10),
            latency: 100,
            validatorId: Validator.id
        
        }
    })

    await prismaClient.websiteTick.create({
        data: {
            websiteId: website.id,
            status: "Good",
            createdAt: new Date(Date.now() - 1000 * 60 * 20),
            latency: 100,
            validatorId: Validator.id
        }})
}

seed();