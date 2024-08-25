export interface Project {
    name: string;
    language: string;
    imgUrl: string;
    description: string;
    url: string;
    images: string[];
}

const baseImagePath = '/PortfolioSerious/projectsImg';

export const projectImages = {
    atomus: [
        `${baseImagePath}/AtomusV1/homepage.png`,
        `${baseImagePath}/AtomusV1/image1.png`,
        `${baseImagePath}/AtomusV1/image2.png`
    ],
    airbnb: [
        `${baseImagePath}/TPairbnb/homepage.png`,
        `${baseImagePath}/TPairbnb/image1.png`,
        `${baseImagePath}/TPairbnb/image2.png`,
        `${baseImagePath}/TPairbnb/image3.png`,
        `${baseImagePath}/TPairbnb/image4.png`,
    ],
    videoGameTs: [`${baseImagePath}/VideoGameTs/homepage.png`],
    extinguisherGestion: [
        `${baseImagePath}/exctincteurTpSymfonyV2/homepage.png`,
        `${baseImagePath}/exctincteurTpSymfonyV2/homepageLogged.png`,
        `${baseImagePath}/exctincteurTpSymfonyV2/image1.png`,
        `${baseImagePath}/exctincteurTpSymfonyV2/image2.png`,
        `${baseImagePath}/exctincteurTpSymfonyV2/image3.png`,

    ],

    crud: [`${baseImagePath}/CrudProject/homepage.png`],

    transat: [
        `${baseImagePath}/Transat/homepage.png`,
        `${baseImagePath}/Transat/login.png`,
        `${baseImagePath}/Transat/register.png`,
        `${baseImagePath}/Transat/reservation.png`,
        `${baseImagePath}/Transat/contact.png`
    ]
};

export const projectsData: Project[] = [
    {
        name: "Atomus Project",
        language: "React",
        imgUrl: `${baseImagePath}/AtomusV1/homepage.png`,
        description: "Projet qui concerne l'ecologie , en cours de developement",
        url: "https://github.com/Hanakhin/AtomUsSolution-main",
        images: projectImages.atomus
    },
    {
        name: "AirBnb clone Project",
        language: "PHP",
        imgUrl: `${baseImagePath}/TPairbnb/homepage.png`,
        description: "Projet réalisé a l'idem dans le cadre d'un TP PHP",
        url: "https://github.com/Hanakhin/TP_PHP_IDEM_ERN24_HANAKHIN",
        images: projectImages.airbnb
    },
    {
        name: "VideoGameTs Project",
        language: "React/Ts // M.E.R.N stack",
        imgUrl: `${baseImagePath}/VideoGameTs/homepage.png`,
        description: "Projet personnel , qui m'as permis d'apprendre a utiliser firebase avec react/ts",
        url: "https://github.com/Hanakhin/VideoGameApp",
        images: projectImages.videoGameTs
    },
    {
        name: "Exctinguisher Gestion Project",
        language: "PHP/Symfony",
        imgUrl: `${baseImagePath}/exctincteurTpSymfonyV2/homepage.png`,
        description: "Projet réalisé lui aussi a l'Idem dans le cadre d'un tp Symfony",
        url: "https://github.com/Hanakhin/symfonyPerso",
        images: projectImages.extinguisherGestion
    },
    {
        name: "CRUD Project",
        language: "React/Ts // M.E.R.N stack",
        imgUrl: `${baseImagePath}/CrudProject/homepage.png`,
        description: "Projet personnel qui m'as servi a apprendre a gerer le systeme de CRUD sur mongoDB en react/ts",
        url: "https://github.com/Hanakhin/VideoGameAppTs",
        images: projectImages.crud
    },
    {
        name: "Transat Reservation Project",
        language: "Symfony/Mongodb",
        imgUrl: `${baseImagePath}/Transat/homepage.png`,
        description: "Projet réalisé dans le cadre de l'apprentissage de symfony lié a Mongodb",
        url: "https://github.com/Hanakhin/TransatAppSymfoMongo",
        images: projectImages.transat
    },
];