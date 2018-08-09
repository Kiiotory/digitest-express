function User() {
    this.module_id = 1;
}

User.prototype.getById = (mainData) => {
        // dummy ->
    const user = {
        id:1,
        fisrtName:'Tobby',
        lastName: 'Grindewalth',
        isActive: true,
        isAdmin: false
    };
    return user;
};

module.exports = User;