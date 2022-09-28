export const users = [
    {
        name: "Kambang",
        email: "Kambang@gmail.com",
        adress: "Bonaberi"
    },
    {
        name: "Saurelle",
        email: "saurelle@gmail.com",
        adress: "Bepanda"
    },
    {
        name: "Aime",
        email: "aime@gmail.com",
        adress: "Dakar"
    }
];
export const Users = users.map((user, index) => {
    return {
        ...user, id: index
    }
})

// tow type of export:
// named export
// exemple: export const user = []; export only the variable

// default export
// export default users; export the entire fill