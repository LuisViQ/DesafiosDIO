const db = [
    {
        name: 'Luis',
        email: 'fileps2009@gmail.com'
    }
];

export class UserSevice {
    createUser = (name: string, email: string) => {
        const user = { name, email };
        db.push(user);
        console.log('DB atualizado', db);
    };

    getAllUsers = () => {
        return db;
    };
}
