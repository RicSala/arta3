export const initialData = {

    users: [
        {
            // id: 1,
            name: "Pablo Sala",
            email: "pablo@google.com",
            role: "user",
            city: "Pasadena",
            password: "88888888",
            confirmPassword: "88888888",
            profilePic: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"
        },
        {
            // id: 2,
            name: "Ricardo Sala",
            email: "ricardo@google.com",
            role: "admin",
            city: "Zaragoza",
            password: "88888888",
            confirmPassword: "88888888",
            profilePic: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"

        },
        {
            // id: 3,
            name: "Mamen Sala",
            email: "mamen@google.com",
            role: "artist",
            city: "New York",
            password: "88888888",
            confirmPassword: "88888888",
            profilePic: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"
        },
        {
            // id: 3,
            name: "Mamen Sala",
            email: "mamen1@google.com",
            role: "artist",
            city: "New York",
            password: "88888888",
            confirmPassword: "88888888",
            profilePic: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"
        },
        {
            // id: 3,
            name: "Mamen Sala",
            email: "mamen2@google.com",
            role: "artist",
            city: "New York",
            password: "88888888",
            confirmPassword: "88888888",
            profilePic: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"
        },
        {
            // id: 3,
            name: "Mamen Sala",
            email: "mamen3@google.com",
            role: "artist",
            city: "New York",
            password: "88888888",
            confirmPassword: "88888888",
            profilePic: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"
        },
    ],

    artists: [
        {
            id: 1,
            name: "Tatuador 1",
            images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
            availability: "Disponible",
            location: "Ciudad de México",
            url: "/tatuadores/1"
        },
        {
            id: 2,
            name: "Tatuador 2",
            images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
            availability: "Disponible",
            location: "Ciudad de México",
            url: "/tatuadores/2"
        },
        {
            id: 3,
            name: "Tatuador 3",
            images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
            availability: "Disponible",
            location: "Ciudad de México",
            url: "/tatuadores/3"
        },
        {
            id: 4,
            name: "Tatuador 4",
            images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
            availability: "Disponible",
            location: "Ciudad de México",
            url: "/tatuadores/4"
        }],

    tattoos: [
        {
            // id: 1,
            title: "Tatuaje 1",
            images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png", "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
            author: "Tatuador 1",
            timestamp: "2021-01-01"
        },
        {
            // id: 2,
            title: "Tatuaje 2",
            images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png", "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
            author: "Tatuador 2",
            timestamp: "2021-01-01"
        },
        {
            // id: 3,
            title: "Tatuaje 3",
            images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png", "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
            author: "Tatuador 3",
            timestamp: "2021-01-01"
        }
    ],

    comments: [
        {
            id: 1,
            tattooid: 1,
            content: "Comentario 1",
            timestamp: "2021-01-01",

        },
        {
            id: 2,
            tattooid: 1,
            content: "Comentario 2",
            timestamp: "2021-01-01",
        }
    ]
}







